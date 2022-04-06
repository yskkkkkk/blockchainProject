import { Button } from "@mui/material"

export default function Account(props){
  const { userEmail, userPhone } = props.userData
  return(
    <div>
      <div className="flex justify-between">
        <p>이메일</p>
        <Button>변경</Button>
      </div>
      <div className="flex justify-between">
        <p>비밀번호</p>
        <Button>변경</Button>
      </div>
      <div className="flex justify-between">
        <p>연락처</p>
        <Button>변경</Button>
      </div>
      <div className="flex justify-between">
        <p>회원탈퇴</p>
        <Button>탈퇴</Button>
      </div>
    </div>
  )
}