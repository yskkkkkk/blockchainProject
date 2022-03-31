import Link from 'next/link';
import Image from 'next/image';
import Router from "next/router";

import {useEffect, useContext} from 'react';
import {getFollowing, follow, unfollow} from '../../lib/User.js';

import {UserContext} from "../../lib/UserContext";

const ProductBasics = ({src, fundInfo}) => {

  const {userSeq, setUserSeq} = useContext(UserContext);  // 현 유저의 userSeq 값
  const [following, setFollowing] = useState([]);   // 현 유저가 팔로우하는 유저 리스트

  const toggleFollow = (e) => {
    const seller = fundingInfo.userNickname;
    e.preventDefault();
    if (following.includes(seller)) {
      unfollow(userSeq, seller);  // lib 파일에 위치한 함수
    }
    else {
      follow(userSeq, seller);    // lib 파일에 위치한 함수
    }
  }
  const toLoginPage = (e) => {
    e.preventDefault();
    Router.push("/");   // 회원가입 페이지로 라우트
  }


  useEffect(() => {     // 랜더시 팔로잉 리스트 상태값에 저장.   팔로워 로직을 루트에서 한번만 가져와서 저장하고 매번 쓰고싶지만 고민중입니다.
    setFollowing(getFollowing(userSeq));  // lib 파일에 위치한 함수
  })

  return (
    <header className="flex flex-row justify-center gap-[10rem]">
      <section>
        <Image src={src} alt="thumbnail" width={300} height={300} />
      </section>
      <aside className="flex flex-col gap-[2rem] w-96">
        {/* <h2 className="text-center">유명 음식점에서 맛보던 멘보샤를 집에서!</h2> */}
        <h2>{fundInfo.fundingTitle}</h2>
        <div>
          <div className="w-full mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="p-1 rounded-full bg-theme-color" style={{width:'45%'}}></div>
          </div>
          <p>45% 달성 (100,000원)</p>
        </div>
        {/* <p>겉바속촉의 정석! 유명 식당에서 눈치 봐가며 시키던 멘보샤를 집에서도 푸짐하게 즐기세요! 홈메이드 칠리소스도 함께 드립니다:)</p> */}
        <p>{fundInfo.fundingSimple}</p>
        <div className="flex flex-row justify-evenly gap-[3rem]">
          <Link href={'/order/'} passHref>
            <button className="w-48 py-[0.5rem] bg-theme-color text-white font-black antialiased text-xl justify-self-center">펀딩하기</button>
          </Link>
          <button className="w-48 py-[0.5rem] border-2 text-gray-600 font-black antialiased text-xl justify-self-center "><span className="text-gray-400">♡ </span>찜하기</button>

        </div>
        <div className="flex flex-row justify-evenly">
          <p className="basis-1/2">파트너 정보:
            {/* <button>블루샹하이</button> */}
            <button>{fundingInfo.userNickname}</button>
          </p>
          <div className="flex flex-row justify-end gap-[1rem] basis-1/2">  
            {/* 아직 상태값에 따른 버튼 토클 애니메이션 로직은 미작성 상태입니다  */}
            <button onClick={userSeq ? toggleFollow : toLoginPage} className="w-[4.5rem] py-[1px] antialiased bg-gray-200 border-2 justify-self-center rounded-lg">팔로우</button>
            <button className="w-[5rem] py-[1px] antialiased text-white bg-theme-color justify-self-center rounded-lg">알림받기</button>
          </div>
        </div>
      </aside>
    </header>
  )
}

export default ProductBasics;