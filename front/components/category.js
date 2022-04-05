import Grid from '@mui/material/Grid'

export default function Category(props) {
  return (
      <div item xs={2} style={{width: "40px", textAlign: "center", borderRadius: "20px", border: "1px solid black"}}>
        {props.name}
      </div>
  )
}