import Link from 'next/link';
import Image from 'next/image';
import Router from "next/router";
import Send from '../../lib/Send';

import {useEffect, useContext, useState} from 'react';
import {follow, unfollow} from '../../lib/User.js';
import CustomButton from '../ui/button.js';

import {UserContext} from "../../lib/UserContext";

const ProductBasics = ({src, fundInfo}) => {

  const {userSeq, setUserSeq} = useContext(UserContext);  // 현 유저의 userSeq 값

  const [following, setFollowing] = useState([]);         // 현 유저가 팔로우하는 유저 리스트
  const [getAlarm, setGetAlarm] = useState(false);        // 보여주기용 알람 버튼 토글 상태값
  const [like, setLike] = useState(false);                // 찜 버튼 토글 상태 값
  const [seller, setSeller] = useState(fundInfo.userSeq);

  const toggleFollow = (e) => {
    e.preventDefault();
    if (following && following.includes(seller)) {
      unfollow(userSeq, seller);  // lib 파일에 위치한 함수
      setFollowing(following.filter(f => f !== seller));
    }
    else {
      follow(userSeq, seller);    // lib 파일에 위치한 함수
      setFollowing(...following, seller);
    }
  }
  const toggleAlarm = (e) => {
    e.preventDefault();
    setGetAlarm(!getAlarm);
  }
  const toggleLike = (e) => {
    e.preventDefault();
    setLike(!like);
  }

  const getFollowing = () => {
    Send.get(`/follow/followings?userSeq=${userSeq}`)
    .then((data) => {
      setFollowing([data.data.data.map(e => {return e.seller})]);
    })
    .catch((e) => {
      console.log(`getFollowing 에러: ${e}`);
      // return false
    })
  }

  const checkOut = (e) => {
    e.preventDefault();
    Router.push("/order");
  }

  const toLoginPage = (e) => {
    e.preventDefault();
    Router.push("/login");   // 회원가입 페이지로 라우트
  }

  useEffect(() => {     // 랜더시 팔로잉 리스트 상태값에 저장.   팔로워 로직을 루트에서 한번만 가져와서 저장하고 매번 쓰고싶지만 고민중입니다.
    getFollowing();  // lib 파일에 위치한 함수
  }, [userSeq])

  

  return (
    <header className="flex flex-row justify-center gap-[10rem]">
      <section>
        <Image src={src} alt="thumbnail" width={300} height={300} />
      </section>
      <section className="flex flex-col gap-[2rem] w-96">
        {/* <h2 className="text-center">유명 음식점에서 맛보던 멘보샤를 집에서!</h2> */}
        <h2>{fundInfo.fundingTitle}</h2>
        <div>
          <div className="w-full mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="p-1 rounded-full bg-theme-color" style={{width:'45%'}}></div>
          </div>
          <p>45% 달성 (100,000원)</p>
        </div>
        {/* <p>겉바속촉의 정석! 유명 식당에서 눈치 봐가며 시키던 멘보샤를 집에서도 푸짐하게 즐기세요! 홈메이드 칠리소스도 함께 드립니다:)</p> */}
        <p>매우 간편한 설명! : {fundInfo.fundingSimple}</p>
        <div className="flex flex-row justify-evenly gap-[3rem]">
          <Link href={'/order/'} passHref>
            <CustomButton func={checkOut} text="펀딩하기" classNameProp="w-48 py-[0.5rem] bg-theme-color text-white font-black antialiased text-xl justify-self-center" />
          </Link>
          <button onClick={toggleLike} className="w-48 py-[0.5rem] border-2 text-gray-600 font-black antialiased text-xl justify-self-center "><span className={like ? "text-theme-color/70" : "text-gray-400"}>♡ </span>찜하기</button>
        </div>
        <div className="flex flex-row justify-evenly">
          <p className="basis-1/2">파트너 정보:
            {/* <button>블루샹하이</button> */}
            <button>{fundInfo.userNickname}</button>
          </p>
          <div className="flex flex-row justify-end gap-[1rem] basis-1/2">  
            {/* 팔로우 버튼 토글 애니매이션 폭망. 다시짜야함  */}
            <button onClick={userSeq ? toggleFollow : toLoginPage} className={`w-[4.5rem] py-[1px] antialiased border-2 justify-self-center rounded-lg hover:border-theme-color ${following ? (following.includes(seller) ? "bg-theme-color text-white" : "bg-gray-200") : "bg-gray-200"}`}>팔로우</button>
            {following && following.includes(seller) && (<button onClick={toggleAlarm} className={`w-[5rem] py-[1px] antialiased justify-self-center rounded-lg ${getAlarm ? "text-white bg-theme-color" : "bg-gray-200"}`}>알림받기</button>)}
          </div>
        </div>
      </section>
      {console.log(`팔로잉 상대:${following}`)}
    </header>
  )
}

export default ProductBasics;