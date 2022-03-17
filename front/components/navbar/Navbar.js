import Link from 'next/link';
import {useState, useEffect} from 'react';
import style from './navbar.module.css';


export default function Navbar() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // 토큰 안에 들어있는 userId, userName, userImage값들을
      // 컴포넌트 상태 정보 값에 저장 
    }
    else {
      console.log("미회원");
    }
  });

  return (
    <nav className={style.container} >
      <ul className="border-b-4">
        <li className={style.li}>
          <Link href="/">
            <a className={style.wow}>Home</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/intro">
            <a>우리두레란?</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/upcoming">
            <a>펀딩예정</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/support">
            <a>후원하기</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/project">
            <a>프로젝트 생성</a>
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
                <a>profile</a>
              </Link>
            </li>
            <li className={style.li}>
              <a onClick={logout}>
                logout
              </a>
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