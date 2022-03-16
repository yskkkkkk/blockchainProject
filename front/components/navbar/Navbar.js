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
    <nav className={style.container}>
      <ul>
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