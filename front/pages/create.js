import Creator from '../components/create/Creator'
import Project from '../components/create/Project'
import Funding from '../components/create/Funding'
import Policy from '../components/create/Policy'
import {useEffect, useState, useContext } from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'
import { UserContext } from '../lib/UserContext'
import Router from 'next/router'
import { ethers, ContractFactory } from 'ethers'
import toast, { Toaster } from 'react-hot-toast';
import ABI from '../lib/ABI.json'
import Bytecode from '../lib/Bytecode.json'

export default function Create(){
  const [creatorData, setCreatorData] = useState({nickname:"", phone:"", description:"" })
  const [projectData, setProjectData] = useState({name:"", intro:"", category:"", image:"", description:""})
  const [fundingData, setFundingData] = useState({goal:"", startDay:new Date(), startTime:"", endDay:"", options:[]})
  const [choice, setChoice] = useState(0)
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)

  const {userSeq, setUserSeq} = useContext(UserContext);
 
  function handleChange(event) {
    const {name, value} = event.target
    switch (choice) {
      case 0:
        setCreatorData(prevData=> {
          return {
            ...prevData,
            [name] : value
          }
        })
        return
      case 1:
        setProjectData(prevData=> {
          return {
            ...prevData,
            [name] : value
          }
        })
        return
      case 2:
        setFundingData(prevData=> {
          return {
            ...prevData,
            [name] : value
          }
        })
        return
      case 3:
        console.log("policy")
        return
      default:
        console.log("error")
    }
  }
  const handleChoice = event => {
    setChoice(parseInt(event.target.value))
  }
  
  function changeDate(newVal, name){
    setFundingData(prevData => {
      return {
        ...prevData,
        [name]:newVal
      }
    })
  }

  function addItem(item){
    setFundingData(prevData => {
      return {
        ...prevData,
        options: [...prevData.options, item]
      }
    })
  }

  // 유저 정보를 받아오고, 지갑도 확인한 뒤 지갑주소가 유저 정보에 저장된 지갑주소와 같은지 확인합니다.
  useEffect( async () => {
    if (!userSeq) {
      Router.push('login/')
    }
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const res = await fetch(`https://j6a305.p.ssafy.io/api/user/${userSeq}`);
        const data = res.data.json();
        const userWalletAddress = data.userWalletAddress
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
              chainId: "0x13881",
              rpcUrls: ["https://rpc-mumbai.matic.today"],
              chainName: "Mumbai Testnet",
              nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18
              },
              blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com"]
          }]
        })
          .then((result) => {
            const _provider = new ethers.providers.Web3Provider(window.ethereum);
            const _signer = _provider.getSigner()
            setProvider(_provider);
            setSigner(_signer);
            _signer.getAddress()
              .then((res) => {
               const address = res
              })
            // const address = await _signer.getAddress()
            if (address !== userWalletAddress) {
              throw new Error(`지갑 주소가 저장된 것과 다릅니다.  
              ${userWalletAddress} 주소를 이용하여 주세요.`)
            }
          })
          .error(
            (err) => {
              toast.error(err)
              Router.push('/')
            }
          );
        
      } catch (error) {
        console.error("유저 정보 획득 실패:", error)
        return
      }
    } else {
      toast.error('메타마스크를 먼저 설치해 주세요 ㅠ')
      setTimeout(
        () => {Router.push('/intro')},
        2000
      )
    }
    // console.log(userSeq)
  }, [])


  // 블록체인 컨트랙트 생성에 사용되는 더미데이터입니다! 세부사항 완성되면 불러주세요.
  const temp_optionPrices = [ethers.utils.parseEther("0.01"), ethers.utils.parseEther("0.02"), ethers.utils.parseEther("0.03")];
  const temp_startDate = 111111;
  const temp_endDate = 1650422845;
  const temp_targetAmount = ethers.utils.parseEther("3");
  // 펀딩 등록할 때 사용하는 함수입니다! 초반부는 컨트랙트 부분이고 후반부는 백엔드 API 연동 부분입니다.
  const createProject = async () => {
    try {
      const factory = new ContractFactory(ABI, Bytecode, signer);
      const contract = await factory.deploy(temp_startDate, temp_endDate, temp_targetAmount, temp_optionPrices);
      const fullMessage = await contract.deployTransaction.wait()

      const contractAddress = contract.address; // 컨트랙트 주소입니다! 이것을 백엔드에 함께 전송해 주십시오!

      // 여기서부터 백엔드 API 연동을 해주시면 됩니다.





      // 맨 마지막에는 거래 성공^^
      toast.success('축하합니다! 펀딩이 등록되었습니다!')
      Router.push('/') // 메인페이지로 이동

    } catch (error) {
      toast.error('거래가 정상적으로 이루어지지 않았습니다. 다시 시도해주세요.')
    }
  }


  return (
    <div className="container mx-auto py-10">
      {/* flex: inline-flex -> flex로 */}      
      <ButtonGroup className="flex justify-center mb-8" variant="text" aria-label="text button group">
        <Button onClick={handleChoice} value={0}>창작자 정보</Button>
        <Button onClick={handleChoice} value={1}>프로젝트 정보</Button>
        <Button onClick={handleChoice} value={2}>펀딩 계획</Button>
        <Button onClick={handleChoice} value={3}>정책 안내</Button>
      </ButtonGroup>
      
      {choice===0 && <Creator creatorData={creatorData} handleChange={handleChange}/>}
      {choice===1 && <Project projectData={projectData} handleChange={handleChange}/>}
      {choice===2 && <Funding fundingData={fundingData} handleChange={handleChange} addItem={addItem} changeDate={changeDate}/>}
      {choice===3 && <Policy/>}
      <button onClick={createProject}>프로젝트 생성!</button>
      <Toaster />
    </div>
  )
}