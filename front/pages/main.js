import axios from 'axios'
// import {useState, useEffect} from 'react'
import Banner from '../components/main/banner'
import Card from '../components/cards/card'
import CardFav from '../components/cards/cardfav'
import Grid from '@mui/material/Grid'
import style from "../components/cards/card.module.css"
import CardSmall from "../components/cards/cardSmall"

export default function main() {
  // for문으로 funding list 다 받아오기
  // async function getFundings() {
  //   let fundings = []
  //   for(let i = 9; i < 3; i++) {
  //     const res = await axios({
  //       method: 'get',
  //       url: `http://j6a305.p.ssafy.io/api/funding/lists/${i}`
  //     })
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }
  //     console.log("11:"+res)
  //   }
    
  // }
  // getFundings().then(() => {

  // }).catch(e => console.log(e))

  axios({
    method: 'get',
    url: 'https://j6a305.p.ssafy.io/api/funding/lists/1'
  })

  // 로그인 되어있을 때, 안되어있을 때
  
  const fundingFav = ["못먹어본 사람은 있어도 한번만 먹어본 사람은...", 2, 3, 4, 5, 6]
  const favoriteElements = fundingFav.map(fav => {
    return <CardFav key={fav} info={fav} style={style.card} />
  })
  const fundingHot = ["못먹어본 사람은..", "못먹어본 사람은...", "못먹어본 사람은....", "못먹어본 사람은.....", "못먹어본 사람은......"]
  const hotElements = fundingHot.map(fav => {
    return <CardSmall key={fav} info={fav} style={style.smallcard} />
  })
  const fundingSoaring = [1, 2, 3, 4]
  const soaringElements = fundingSoaring.map(fav => {
    return <Card key={fav} info={fav} style={style.card} />
  })
  const fundingNew = [1, 2, 3, 4]
  const newElements = fundingNew.map(fav => {
    return <Card key={fav} info={fav} style={style.card} />
  })

  return (
    <>
      <Banner />
      <Grid container>
        <Grid item xs={8}>
          <div>
            <h2 style={{ fontSize: "26px", marginBottom: "5px" }}>회원님이 좋아할 펀딩</h2>
            <Grid container>
              {favoriteElements}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={4} style={{ paddingLeft: "15px", borderLeft: "1px solid gray" }}>
          <div>
            <h2 style={{ fontSize: "26px", marginBottom: "5px" }}>인기 펀딩</h2>
            {hotElements}
          </div>
        </Grid>
      </Grid>
        <hr />
        <div>
          <h2 style={{ fontSize: "26px" }}>급상승 펀딩</h2>
          <Grid container>
            {soaringElements}
          </Grid>
        </div>
        <hr />
        <div>
          <h2 style={{ fontSize: "26px" }}>신규 펀딩</h2>
          <Grid container>
            {newElements}
          </Grid>
        </div>
    </>
  )
}