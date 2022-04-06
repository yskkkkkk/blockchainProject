import { Button } from "@mui/material";
import { useState } from "react";

export default function Wallet(){
  const [walletAddress, setWalletAddress] = useState('')
  const [walletBalance, setWalletBalance] = useState(-1)
  if (typeof window.ethereum !== 'undefined') {
    console.log(window.ethereum);
  }
  
  async function connect() {
    var address
    await ethereum.request({ method: 'eth_requestAccounts' })
      .then(res => {
        address=res[0]
        setWalletAddress(address)})
    await ethereum.request({ method: 'eth_getBalance', params:[address ,'latest']})
      .then(res => setWalletBalance(parseInt(res,16)))
  }  
  
  return (
    <div>      
      {window.ethereum !== undefined 
      ? <Button onClick={connect}>지갑 연결</Button> 
      : <Button onClick={()=>location.href="https://metamask.io/"}>metamask를 설치해야 합니다.</Button>}
      <p>{walletAddress}</p>
      {walletBalance === -1 ? <p></p>: <p>{walletBalance}</p>}
    </div>
  )
}