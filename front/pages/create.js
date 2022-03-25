import Creator from '../components/create/Creator'
import Project from '../components/create/Project'
import Funding from '../components/create/Funding'
import Policy from '../components/create/Policy'
import {useState} from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'

export default function Create(){
  const [creatorData, setCreatorData] = useState({nickname:"", phone:"", description:"" })
  const [projectData, setProjectData] = useState({name:"", intro:"", category:"", image:"", description:""})
  const [fundingData, setFundingData] = useState({goal:"", startDay:new Date(), startTime:"", endDay:"", options:[]})
  const [choice, setChoice] = useState(0)
 
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
    </div>
  )
}