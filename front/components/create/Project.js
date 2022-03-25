import { Input, Select } from "@mui/material"
import { MenuItem } from "@mui/material"
import { FormControl } from "@mui/material"
import { InputLabel } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { display } from "@mui/system"
import { styled } from "@mui/material"

export default function Proeject(props){
  const {name, intro, category, image, description} = props.projectData
  const categories = [
    {category_number:2, category_name:"뷰티"},
    {category_number:3, category_name:"생활"},
  ]
  
  const Input = styled('input')(
    {display: 'none'}
  )

  function checkEvent(event){
    console.log(event)
  }

  const categoryItems = categories.map(item => 
    <MenuItem value={item.category_name} key={item.category_number}>{item.category_name}</MenuItem>
  )

  return(
    <div className="flex flex-col items-center">
      <div>
        <label htmlFor="name">프로젝트 명:</label>
        <TextField 
          type="text" 
          id="name" 
          name="name"
          onChange={props.handleChange}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="intro">프로젝트 한줄 소개:</label>
        <TextField 
          type="text" 
          id="intro" 
          name="intro"
          onChange={props.handleChange}
          value={intro}
        />
      </div>
      <div>
        <label htmlFor="category">프로젝트 카테고리</label>        
        <FormControl sx={{ m:1, minWidth: 120}}>          
          <Select             
            value={category}
            onChange={props.handleChange}
            displayEmpty
            name="category"
          >
            <MenuItem value="">카테고리 선택</MenuItem>
            {categoryItems}

          </Select>
        </FormControl>
      </div>
      <div>
        <label htmlFor="image">
          프로젝트 이미지 : {image}
          <Input id="image"  accept="image/*" multiple type="file" name="image" onChange={props.handleChange} />
          <Button variant="contained" component="span">
            Upload
          </Button>          
        </label>
      </div>
      <div>
        <label htmlFor="description">프로젝트 설명:</label>
        <TextField 
          type="text" 
          id="description" 
          name="description"
          onChange={props.handleChange}
          value={description}
        />
      </div>
    </div>    
  )
}