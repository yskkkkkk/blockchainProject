import { Box } from "@mui/material"
import { TabList, TabContext, TabPanel } from "@mui/lab"
import { Tab } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import Profile from "../components/userSetting/Profile"
import Account from "../components/userSetting/Account"
import Wallet from "../components/userSetting/Wallet"
import Send from "../lib/Send"


export default function Setting(){
  const [tabNum, setTabNum] = useState("0")
  const [userData, setUserData] = useState("")
  function handleTab(event, newValue){
    setTabNum(newValue)
  }

  const getUserData = () => {
    Send.get(`http://j6a305.p.ssafy.io:9999/api/user?userSeq=7`)
      .then(({data}) => {        
        setUserData(data)
      })
      .catch((e) => {
        console.log(`error! ${e}`)
      })
  }
  useEffect(()=>{
    getUserData()
  },[])
  

  function handleChange(name,value){
    console.log("handle")
    console.log(name,value)
    setUserData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })

  }  

  return(
    <div>
      <h2>설정</h2>
      <TabContext value={tabNum}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTab} aria-label="lab API tabs example">
            <Tab label="프로필" value="0" />
            <Tab label="계정" value="1" />
            <Tab label="지갑" value="2" />
            <Tab label="배송지" value="3" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <Profile userData={userData} handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value="1">
          <Account userData={userData} handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value="2">
          <Wallet userData={userData} handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value="3">
          add
        </TabPanel>
      </TabContext>
    </div>
  )
}