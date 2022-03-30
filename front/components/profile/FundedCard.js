import { Accordion, AccordionDetails } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
import OffFundingTable from "./OffFundingTable"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FundedCard(){
  const [expanded, setExpanded] = useState(false)  


  return(  
    <div className="my-4">
      <Accordion expanded={expanded} onChange={()=>setExpanded(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex flex-row">
           <img className="h-32 w-32" src="https://www.ikea.com/kr/en/images/products/kavalkad-frying-pan-black__0811388_pe771635_s5.jpg" alt="pan" />
           <div>
             <p>제목: Title</p>
             <p>"목표모금액": Amount1</p>
             <p>"달성모금액": Amount2</p>
             <p>달성률: percentage</p>
             <p>기간: startData ~ endDate</p>
           </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <h3 className="p-4">후원 정보</h3>
          <OffFundingTable/>
          <h3 className="p-4">선물 정보</h3>
          <div className="border-solid border-black border-2 p-6">
            <p>선물 구성: gift</p>
            <p>후원 금액: amount</p>
            <p>전달 상태: state</p>
          </div>          
        </AccordionDetails>
      </Accordion>
    </div>
  )
}