import { TextField } from "@mui/material"
import Image from 'next/image';

export default function Creator(props){
  const {nickname, phone, description} = props.creatorData
  
  return(

    <div className="flex flex-col items-center">
      <Image className="my-6" src="/welcome.png" alt="welcome" />      
      <div className="flex items-center my-6">
        <label htmlFor="nickname">창작자 닉네임:</label>
        <TextField 
          type="text"
          id="nickname" 
          name="nickname"
          onChange={props.handleChange}
          value={nickname}
        />
      </div>
      <div className="flex items-center my-6">
        <label htmlFor="phone">창작자 연락처:</label>
        <TextField 
          type="text" 
          id="phone" 
          name="phone"
          onChange={props.handleChange}
          value={phone}
        />
      </div>
      <div className="flex items-center my-6">
        <label htmlFor="description">창작자 소개글:</label>
        <TextField 
          type="text" 
          id="description" 
          name="description"
          onChange={props.handleChange}
          value={description}
          multiline
        />
      </div>
    </div>
  )
}