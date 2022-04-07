import { Accordion, AccordionDetails } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
import OffFundingTable from "./OffFundingTable"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import contractGetter from "../../lib/ContractGetter"
import Image from "next/image"

export default function FundedCard({fundingData, isMine}){
  const [expanded, setExpanded] = useState(false);  
  const d1 = new Date().getTime()
  const [sellData, setSellData] = useState(false)
  useState(async ()=>{
    if(fundingData){
      const contract = contractGetter(fundingData.fundingContract)
      const endDate = await contract.endDate()
      const startDate = await contract.startDate()
      const endTime = new Date(parseInt(endDate._hex,16)*1000)
      const startTime = new Date(parseInt(startDate._hex,16)*1000)
      if (parseInt(startDate._hex, 16)*1000 > d1 || d1 > parseInt(endDate._hex, 16)*1000) {        
        setSellData({startTime:startTime, endTime:endTime})
      } 
    }
  }, [fundingData])
  console.log(sellData)  

  return(  
    <div className="my-4">
      {sellData && <Accordion expanded={expanded} onChange={()=>setExpanded(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex flex-row">
          <Image width="32" height="32" src={fundingData.fundingImage} alt={fundingData.fundingTitle} />
           <div>
           <p>제목: {fundingData.fundingTitle}</p>
             <p>현재모금액: Amount1</p>
             <p>목표모금액: Amount2</p>
             <p>달성률: percentage</p>
             <p>기간: {sellData.startTime.toLocaleString()} ~ {sellData.endTime.toLocaleString()}</p>
           </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <h3 className="p-4">후원 정보</h3>
          <OffFundingTable/>
          <h3 className="p-4">선물 정보</h3>
          <div className="p-6 border-2 border-black border-solid">
            {fundingData.option.map(opt => {
              return(
                <div className="p-2 border-1 border-black border-solid">                  
                  <p>옵션 제목: {opt.optionTitle}</p>
                  <p>옵션 가격: {opt.optionPrice}</p>
                  <p>옵션 내용: {opt.optionText}</p>
                  <p>최대 선택 가능 개수: {opt.optionMaxamount}</p>
                </div>
              )
            })}
          </div>          
        </AccordionDetails>
      </Accordion>}
    </div>
  )
}