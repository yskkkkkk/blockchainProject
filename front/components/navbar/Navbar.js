import Link from 'next/link';
import {useState, useEffect} from 'react';


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
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href="/intro">
            <button>우리두레란?</button>
          </Link>
        </li>
        <li>
          <Link href="/upcoming">
            <button>펀딩예정</button>
          </Link>
        </li>
        <li>
          <Link href="/support">
            <button>후원하기</button>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <button>프로젝트 생성</button>
          </Link>
        </li>
        {/* 유저 로그인 상태 */}
        {isLoggedIn && (
          <>
            <li>
              <Link href="/profile">
                <button>profile</button>
              </Link>
            </li>
            <li>
              <button onClick={logout}>
                logout
              </button>
            </li>
          </>
        )}
        {/* 유저 로그아웃 상태 */}
        {!isLoggedIn && (
          <li>
            <Link href="/login">
              <button>login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )

} 