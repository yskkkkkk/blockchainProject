import style from "./card.module.css"
import Grid from '@mui/material/Grid'

export default function Card(props) {

  return (
    <Grid item xs={3} className={props.style}>
      <img src="/donlee.jpg" alt="" />
      <h2>{props.info}</h2>
      <div className={style.flexJustifyBetween}>
        <span>78%</span>
        <span>~2022.4.8</span>
      </div>
    </Grid>
  )
}