import { Input, Select } from "@mui/material"
import { MenuItem } from "@mui/material"
import { FormControl } from "@mui/material"
import { InputLabel } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { display } from "@mui/system"
import { styled } from "@mui/material"
import Texteditor from "./Texteditor"

export default function Project(props){
  const {fundingTitle, fundingSimple, fundingCategory, image, fundingText} = props.projectData  
  
  
  const Input = styled('input')(
    {display: 'none'}
  )

  function checkEvent(event){
    console.log(event)
  }

  function handleImage(event){
    const image = event.target.files[0]
    console.log(image)
    const formData = new FormData()
    formData.append('file',image)
    console.log(formData)
    props.handleChange({target:{name:'image', value:formData}})
  }

  const categoryItems = props.categories.map(item => 
    <MenuItem value={item.categoryName} key={item.categoryNumber}>{item.categoryName}</MenuItem>
  )

  return(
    <div className="flex flex-col items-center">
      <div>
        <label htmlFor="fundingTitle">프로젝트 명:</label>
        <TextField 
          type="text" 
          id="fundingTitle" 
          name="fundingTitle"
          onChange={props.handleChange}
          value={fundingTitle}
        />
      </div>
      <div>
        <label htmlFor="fundingSimple">프로젝트 한줄 소개:</label>
        <TextField 
          type="text" 
          id="fundingSimple" 
          name="fundingSimple"
          onChange={props.handleChange}
          value={fundingSimple}
        />
      </div>
      <div>
        <label htmlFor="fundingCategory">프로젝트 카테고리</label>        
        <FormControl sx={{ m:1, minWidth: 120}}>          
          <Select             
            value={fundingCategory}
            onChange={props.handleChange}
            displayEmpty
            name="fundingCategory"
          >
            <MenuItem value="">카테고리 선택</MenuItem>
            {categoryItems}

          </Select>
        </FormControl>
      </div>
      <div>
        <label htmlFor="image">
          프로젝트 이미지 : 
          <Input id="image"  accept="image/*" multiple type="file" name="image" onChange={handleImage} />
          <Button variant="contained" component="span">
            Upload
          </Button>          
        </label>
      </div>
      <div>
        <label htmlFor="fundingText">프로젝트 설명:</label>
        {/* <TextField 
          type="text" 
          id="description" 
          name="description"
          onChange={props.handleChange}
          value={description}
        /> */}        
        <Texteditor id="fundingText" handleChange={props.handleChange}/>
      </div>
    </div>    
  )
}