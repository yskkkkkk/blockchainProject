import { Accordion, AccordionDetails } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
import OnFundingTable from "./OnFundingTable"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FundingCard(){
  const [expanded, setExpanded] = useState(false)  


  return(  
    <div className="my-4">
      <Accordion expanded={expanded} onChange={()=>setExpanded(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex flex-row">
           <img className="w-32 h-32" src="https://www.ikea.com/kr/en/images/products/kavalkad-frying-pan-black__0811388_pe771635_s5.jpg" alt="pan" />
           <div>
             <p>제목: Title</p>
             <p>현재모금액: Amount1</p>
             <p>목표모금액: Amount2</p>
             <p>달성률: percentage</p>
             <p>기간: startData ~ endDate</p>
           </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <h3 className="p-4">후원 정보</h3>
          <OnFundingTable/>
          <h3 className="p-4">선물 정보</h3>
          <div className="p-6 border-2 border-black border-solid">
            <p>선물 구성: gift</p>
            <p>후원 금액: amount</p>
            <p>전달 상태: state</p>
          </div>
          <Button className="mt-2 border-2 border-solid">펀딩 취소</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}