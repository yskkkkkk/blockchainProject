import { TextField } from "@mui/material"
import Image from 'next/image';

export default function Creator(props){
  const {userNickname, userPhone, userIntroduce} = props.creatorData
  
  return(

    <div className="flex flex-col items-center">
      <Image className="my-6" width={150} height={40} src="/welcome.png" alt="welcome" />      
      <div className="flex items-center my-6">
        <label htmlFor="userNickname">창작자 닉네임:</label>
        <TextField 
          type="text"
          id="userNickname" 
          name="userNickname"
          onChange={props.handleChange}
          value={userNickname}
        />
      </div>
      <div className="flex items-center my-6">
        <label htmlFor="userPhone">창작자 연락처:</label>
        <TextField 
          type="text" 
          id="userPhone" 
          name="userPhone"
          onChange={props.handleChange}
          value={userPhone}
        />
      </div>
      <div className="flex items-center my-6">
        <label htmlFor="userIntroduce">창작자 소개글:</label>
        <TextField 
          type="text" 
          id="userIntroduce" 
          name="userIntroduce"
          onChange={props.handleChange}
          value={userIntroduce}
          multiline
        />
      </div>
    </div>
  )
}