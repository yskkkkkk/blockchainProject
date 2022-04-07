import axios from 'axios'
import {useState, useEffect} from 'react'
import Banner from '../components/main/banner'
import Card from '../components/cards/card'
import CardFav from '../components/cards/cardFav'
import Grid from '@mui/material/Grid'
import style from "../components/cards/card.module.css"
import CardSmall from "../components/cards/cardSmall"
import FundCard from '../components/fundCard/index'

export default function main() {
//   async function getFundings() {
//     const res = await axios({
//         method: 'get',
//         url: `https://j6a305.p.ssafy.io/api/funding/lists/${i}`
//       })
//       if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//       }
//     console.log("11:"+res)
  
// }
// getFundings().then(() => {
      
// }).catch(e => console.log(e))

  const [fundings, setFundings] = useState([]);
  useEffect(() => {
    let fundingsFav
    axios.all(
      [
        axios.get("https://j6a305.p.ssafy.io/api/funding/lists/1"),
        axios.get("https://j6a305.p.ssafy.io/api/funding/lists/2"),
        axios.get("https://j6a305.p.ssafy.io/api/funding/lists/3"),
      ]
    )
      .then(axios.spread(
        (res1, res2, res3) => {
          setFundings([null, res1.data.data.slice(0, 5), res2.data.data.slice(0, 4), res3.data.data.slice(0, 4)])
        }
      ))
      // 로그인 되어있을 때, 안되어있을 때
  }, []);
    let hotElements
    let soaringElements
    let newElements
    if(fundings.length) {
      // favElements = fundings[0].map(fav => {
      //   return <CardFav key={fav.fundingSeq} info={fav} style={style.card} />
      // })
      hotElements = fundings[1].map(hot => {
        return <CardSmall key={hot.fundingSeq} info={hot} style={style.smallcard} />
      })
      soaringElements = fundings[2].map(soar => {
        return <Card key={soar.fundingSeq} info={soar} style={style.card} />
      })
      // newElements = fundings[3].map(newF => {
      //   return <Card key={newF.fundingSeq} info={newF} style={style.card} />
      // })
      newElements = fundings[3].map(newF => {
        return <FundCard key={newF.fundingSeq} fund={newF}/>
      })
    }


  return (
    <>
      <Banner />
      <Grid container style={{marginTop: "10px"}}>
        <Grid item xs={8}>
          <div>
            <h2 style={{ fontSize: "26px", marginBottom: "5px" }}>회원님이 좋아할 펀딩</h2>
            <Grid container>
              {/* {favoriteElements} */}
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