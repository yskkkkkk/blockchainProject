import { useState, useRef, useContext } from "react";
import RecepientForm from "../components/orderPage/recepientForm";
import { motion } from "framer-motion";
import Image from 'next/image';
import { UserContext } from "../lib/UserContext";
import CustomButton from "../components/ui/button/button";
import FinalConfirm from "../components/orderPage/finalConfirm";
import AddSubt from "../components/orderPage/addsubt";
import Send from "../lib/Send";
import Router from "next/router";
// import {useRouter} from 'next/router';

const Order = () => {
  
  const [orderProcess, setOrderProcess] = useState(0);
  const [openPostSearch, setOpenPostSearch] = useState(false);

  const {curOption, setCurOption} = useContext(UserContext);
  const {userSeq, setUserSeq} = useContext(UserContext);
  const {fundSeq, setFundSeq} = useContext(UserContext);

  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [receiver, setReceiver] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const phoneRef = useRef();

  const temp = []
    for (let i = 0; i < curOption.length; i ++) {
      temp.push(0)
    }
  const [choices, setChoices] = useState(temp);

  //https://velog.io/@sbinha/next.js-Router%EB%A5%BC-%ED%86%B5%ED%95%B4-props-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
  // 위 글대로 했는데 왜 안되지;
  // const router = useRouter();
  // console.log("option:", router.query.option);
  // console.log("fundingSeq:", router.query.fundingSeq);


  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";  

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setTelNumber(e.target.value); 
  };

  const togglePostSearch = (e) => {
    e.preventDefault();
    openPostSearch ? close() : open();
  }
  const open = () => setOpenPostSearch(true);
  const close = () => setOpenPostSearch(false);

  const toProductSelection = (e) => {
    e.preventDefault();
    setOrderProcess(0);
  }
  const toRecepientForm = (e) => {
    e.preventDefault();
    setOrderProcess(1);
  }
  const toFinalConfirm = (e) => {
    e.preventDefault();
    setOrderProcess(2);
  } 

  const confirmFinalOrder = (e) => {
    e.preventDefault();
    for (let i = 0; i < choices.length; i++) {
      let data = {
        "userSeq": userSeq,
        "fundingSeq": fundSeq,
        "optionNum": choices[i],
        "optionSeq": i,
      }
      if (data.optionNum) {
        Send.post('/history', data)
          .then((res) => {
            console.log(res);
            setCurOption([]);
            setFundSeq('');
            Router.push('/paymentDone');
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
  

  return (
    <main className="flex flex-col gap-[5rem]">
      <nav className="flex flex-row justify-center gap-[4rem]">
        <motion.button 
          whileTap={{ scale: 0.98 }} 
          className={`${orderProcess === 0 && "text-theme-color border-theme-color/70 border-b-4"} "rounded-lg hover:text-theme-color hover:border-b-4 w-20 h-10`}
          onClick={toProductSelection}
        >
          <span className="text-lg antialiased font-medium">상품 선택</span>
        </motion.button>
        <Image src="/arrow.svg" height={20} width={20} />
        <motion.button 
          whileTap={{ scale: 0.98 }} 
          className={`${orderProcess === 1 && "text-theme-color border-theme-color/70 border-b-4"} "rounded-lg hover:text-theme-color hover:border-b-4 w-20 h-10`}
          onClick={toRecepientForm}
        >
          <span className="text-lg antialiased font-medium">수령 정보</span>
        </motion.button>
        <Image src="/arrow.svg" height={20} width={20} />
        <motion.button 
          whileTap={{ scale: 0.98 }} 
          className={`${orderProcess === 2 && "text-theme-color border-theme-color/70 border-b-4"} "rounded-lg hover:text-theme-color hover:border-b-4 w-20 h-10`}
          onClick={toFinalConfirm}
        >
          <span className="text-lg antialiased font-medium">최종 확인</span>
        </motion.button>
      </nav>

      {orderProcess === 0 && (
        <section className="flex flex-col items-center gap-[2rem] border-2 py-[1rem] mx-[255px]">
          <section className="flex flex-wrap justify-center gap-x-[45px] gap-y-[96px] my-10">
            {curOption && curOption.map((option, idx) => (
              <AddSubt choices={choices} setChoices={setChoices} option={option} idx={idx} key={option.optionTitle}>
              </AddSubt>
            ))}
          </section>
          <CustomButton text="수령정보 입력" func={toRecepientForm} classNameProp="bg-theme-color text-white font-semibold w-40 h-10 self-center mt-[-1rem] mb-[2rem]" />
        </section>
      )}

      {orderProcess === 1 && (
        <RecepientForm 
        togglePostSearch={togglePostSearch} 
        setReceiver={setReceiver} 
        receiver={receiver} 
        setOrderProcess={setOrderProcess}
        address={address}
        setAddress={setAddress}
        setAddress2={setAddress2} 
        handlePhone={handlePhone} 
        phoneRef={phoneRef} 
        openPostSearch={openPostSearch}
        handleClose={close}
        telNumber={telNumber}
        />
      )
      }
      {orderProcess === 2 && (
        <FinalConfirm confirmFinalOrder={confirmFinalOrder} curOption={curOption} choices={choices} />
      )}
      

      <section>
        
      </section>
    </main>
    
  )
}

export default Order;