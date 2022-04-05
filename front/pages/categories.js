import CardFav from '../components/cards/cardFav'
import Banner from '../components/main/banner'
import Grid from '@mui/material/Grid'
import style from "../components/cards/card.module.css"
import Category from '../components/category'
import {useState, useEffect} from 'react'

export default function categories() {
  // category 받아오기
  // async function getCategories() {
  //   const res = await axios({
  //     url: "https://"
  //   })
  //   if (!res.ok) {
  //     throw new Error(`HTTP error! status: ${res.status}`);
  //   }
  //   console.log(res)
  //   return await res.blob();
  // }
  // getCategories().then(() => {

  // }).catch(e => console.log(e))

  const categories = ['life', 'game', 'baby']
  const categoryElements = categories.map(category => {
    return <Category key ={category} name={category}/>
  })

  const fundings = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const fundingElements = fundings.map(funding => {
    return <CardFav key={funding} info={funding} style={style.card} />
  })

  return (
    <>
      <Banner />
      <div style={{disply: "flex", justifyContent: "flex-start"}}>
        {categoryElements}
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <input type="text" style={{border: "1px solid gray"}}/>
        <button>검색</button>
        <select name="" id="">
          <option value="">전체</option>
          <option value="">진행중</option>
          <option value="">종료된</option>
        </select>
        <select name="" id="">
          <option value="">추천순</option>
          <option value="">인기순</option>
          <option value="">펀딩액순</option>
          <option value="">마감임박순</option>
          <option value="">최신순</option>
          <option value="">응원참여자순</option>
        </select>
      </div>
      <Grid container>
        {fundingElements}
      </Grid>
    </>
  )
}