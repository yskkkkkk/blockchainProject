import Link from 'next/link';
import {useState, useEffect, useContext} from 'react';
import style from './navbar.module.css';
import { UserContext } from '../../lib/UserContext';
import Send from '../../lib/Send';

export default function Navbar() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {userInfo, setUserInfo} = useContext(UserContext);
  

  const logout = (e) => {
    e.preventDefault();
    Send.get('/user/logout')
    .then((data) => {
      console.log(data);
      setUserInfo('');
      setIsLoggedIn(false);
    })
  }

  const a = async () => {
    const data = await fetch('https://j6a305.p.ssafy.io/api/user/check');
    console.log('받아온 것:', data);
    try {
    const temp = await data.json();
    console.log('JSON화:', temp);
    console.log('유저 시퀀스:', temp.userSeq);
    setUserInfo(temp);
    } catch {
        console.log('사용자가 아닙니다');
    }
  }

  useEffect(() => {
    a();
  })

  useEffect(() => {
    if (userInfo) {
      setIsLoggedIn(true);
      console.log('저장된 사용자 정보:' + userInfo);
      console.log(`${userInfo.userNickname}'s navber login status: ${isLoggedIn}`);
    }
  }, [userInfo])
  // useEffect(() => {
  //   Send.get('/user/check')
  //   .then((data) => {
  //     console.log(1, data);
  //     console.log(2, data.data);
  //     data.json();
  //   })
  //   .then((data) => {
  //     console.log(3, data);
  //     console.log(4, data.data);
  //     setUserInfo(data.data);
  //     if (data.data) {
  //       setIsLoggedIn(true);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // })

  return (
    <nav className={style.container} >
      <ul className="border-b-4">
        <li className={style.li}>
          <Link href="/" passHref>
            <button>
              <img className="-mb-4" src="logo.png" width="50" alt="home logo" />
            </button>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/intro" passHref>
            <button className="underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70">우리두레란?</button>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/upcoming" passHref>
            <button className="underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70">펀딩예정</button>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/products" passHref>
            <button className="underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70">후원하기</button>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/project" passHref>
            <button className="underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70">프로젝트 생성</button>
          </Link>
        </li>
        <li className={style.li}>
          <div className={style.container}>
            <div className="relative flex flex-wrap items-stretch w-full mb-4 rounded input-group">
              <div className={style.li}>
                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                
              </div>
            </div>
          </div>
        </li>
        {/* 유저 로그인 상태 */}
        {isLoggedIn && (
          <>
            <li className={style.li}>
              <Link href="/profile">
                <a>{userInfo.userNickname}</a>
              </Link>
            </li>
            <li className={style.li}>
              <Link href="/">
                <a onClick={logout}>
                  logout
                </a>
              </Link>
            </li>
          </>
        )}
        {/* 유저 로그아웃 상태 */}
        {!isLoggedIn && (
          <li className={style.li}>
            <Link href="/login">
              <a>login</a>
            </Link>
          </li>
        )}      
      </ul>
    </nav>
  )

} 