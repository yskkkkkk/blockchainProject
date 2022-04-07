import {useState} from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from "@mui/material"

export default function Basic(props){  
  const isMine = props.isMine
  const [isEdit, setIsEdit] = useState(false)
  const [text,setText] = useState("aas")
  const [isFollow, setIsFollow] = useState(false)

  return(
    <div className="flex flex-row justify-center align-middle">      
      <img className="h-32 w-32" src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"alt="userImg" />      
      <div>
        <p>nickname
          {isMine && <button><SettingsIcon/></button>}
          {!isMine && !isFollow && <Button onClick={()=>setIsFollow(!isFollow)}>Follow</Button>}
          {!isMine && isFollow && <Button onClick={()=>setIsFollow(!isFollow)}>UnFollow</Button>}
        </p>
        <div className="flex flex-row">
          <div>
            <p>팔로잉</p>
            <p>팔로잉 수</p>            
          </div>
          <div>
            <p>팔로우</p>
            <p>팔로우 수</p>            
          </div>          
        </div>
      </div>
      <div>
        <p>자기소개 글 
          {isMine && !isEdit && <button onClick={()=>setIsEdit(true)}><EditIcon/></button>}
          {isEdit && <button onClick={()=>setIsEdit(false)}><CheckCircleOutlineIcon/></button>}</p>
        <textarea disabled={isEdit?false:true} value={text} onChange={props.handleChange}/>
      </div> 
    </div>
  )
}