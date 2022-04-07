import { useEffect } from "react";
import DonationCard from "./DonationCard";

export default function OnDonation(props){
  useEffect(()=>{
    console.log(props.donations)
  }
  ,[props.donations])
  console.log(props)
  return(
    <>
    </>
  )
}