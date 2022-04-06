import { useRef, useState, useMemo, createRef, forwardRef } from 'react'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Send from "../../lib/Send"
import axios from 'axios'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(async () => {
  const { default: RQ } = await import('react-quill')
  return function comp({ forwardedRef, ...props}) {
    return <RQ ref={forwardedRef} {...props}/>
  }
}, { ssr: false })


export default function Texteditor(props){

  const [value, setValue] = useState('')
  const quillRef = useRef()
  
  const modules = useMemo(() => {
    return { 
      toolbar: {
        container:[
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link','image'],
          ['clean']
        ],
        handlers: {
          image: imageHandler,
          }
      }
    }
  }, [])

  function imageHandler() {    
    const input = document.createElement('input')

    

    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.addEventListener('change', async () => {
      let img = input.files[0]           
      const formData = new FormData()
      formData.append('files',img)
      const result = await axios.post(`https://j6a305.p.ssafy.io/api/file`, formData)
        // .then(res=>console.log(res))
        // .catch(e=>console.log(e))
      const IMG_URL = result.data.file
      const editor = quillRef.current.getEditor()
      const range = editor.getSelection()
      editor.insertEmbed(range.index, 'image', IMG_URL)
      
    })   
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  
  return(
    <div>
      {/* <QuillNoSSRWrapper ref={quillRef} theme="snow" modules={modules} formats={formats} onChange={setValue}/> */}
      <ReactQuill forwardedRef={quillRef} theme="snow" modules={modules} formats={formats} value={value} onChange={setValue}/>
    </div>
  )
}