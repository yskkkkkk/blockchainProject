import {useEffect, useState} from "react"
import Basic from "../components/profile/Basic"
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'
import { Tab } from "@mui/material"
import { TabContext } from "@mui/lab"
import { TabList } from "@mui/lab"
import { TabPanel } from "@mui/lab"
import { Box } from "@mui/material"
import DonationCard from "../components/profile/DonationCard"
import FundingCard from "../components/profile/FundingCard"
import FundedCard from "../components/profile/FundedCard"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Profile(props){ 
  //isMine은 이 프로필이 내것인가의 여부 확인변수, 만약 교체시 Basic도 교체할 것
  const [userData, setUserData] = useState({})
  const [isMine, setIsMine] = useState(true)
  const [tabNum, setTabNum] = useState(isMine?"0":"1")
  const [openState, setOpenState] = useState([false,false])
  function handleChange(event){
    console.log(event)
  }  
  function handleTab(event, newValue){
    setTabNum(newValue)
    setOpenState([false,false])
  }


  return(
    <>
      {/* 닉네임, 팔로잉,팔로우, 받은 찜, 자기소개 글 */}
      <Basic handleChange={handleChange} isMine={isMine}/>
      {/* 탭 부분 */}      
      <TabContext value={tabNum}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTab} aria-label="lab API tabs example">
            {isMine && <Tab label="후원이력 및 현황" value="0" />}
            <Tab label="펀딩 이력 및 현황" value="1" />
            {isMine && <Tab label="찜 목록" value="2" />}
          </TabList>
        </Box>
        {/* 카드 등을 보여줄 공간 나중에는 Card가 아니라 map으로 cardElements를 만들어서 보낼 예정 */}
        {isMine && <TabPanel value="0">
          {/* <h3 onClick={console.log("clicked")}>후원 진행중(Arrlength) {openState[0]?<ExpandLessIcon/>:<ExpandMoreIcon/>}</h3>
          {openState[0] && <DonationCard/>}
          <h3 onClick={()=>setOpenState([openState[0],!openState[1]])}>후원 종료(Arrlength) {openState[1]?<ExpandLessIcon/>:<ExpandMoreIcon/>}</h3>
          이 부분은 나중에 버튼 뺄 것
          {openState[1] && <DonationCard/>} */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              후원 진행중(Arrlength)
            </AccordionSummary>
            <AccordionDetails>
              <DonationCard/>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              후원 종료(Arrlength)
            </AccordionSummary>
            <AccordionDetails>
              <DonationCard/>
            </AccordionDetails>
          </Accordion>
        </TabPanel>}
        <TabPanel value="1">
          {/* <h3 onClick={()=>setOpenState(!openState[0],openState[1])}>펀딩 진행중(Arrlength) {openState[0]?<ExpandLessIcon/>:<ExpandMoreIcon/>}</h3>
          {openState[0] && <FundingCard/>}
          <h3 onClick={()=>setOpenState(openState[0],!openState[1])}>펀딩 진행중(Arrlength) {openState[1]?<ExpandLessIcon/>:<ExpandMoreIcon/>}</h3>
          {openState[1] && <FundedCard/>} */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              펀딩진행중(Arrlength)
            </AccordionSummary>
            <AccordionDetails>
              <FundingCard/>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              펀딩종료(Arrlength)
            </AccordionSummary>
            <AccordionDetails>
              <FundedCard/>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
        {isMine && <TabPanel value="2">
          <p>Main에서 사용하는 카드를 사용할 것</p>
        </TabPanel>}
      </TabContext>
      <div>
        {/* 현재는 한 개의 카드이지만 나중에는 Data를 받아서 map으로 여러 개의 카드를 보여주도록 만들 예정 */}
        
        
        
      </div>
    </>
  )
}