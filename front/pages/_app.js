import {motion} from 'framer-motion';
import '../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { UserContext } from '../lib/UserContext';
import {useState, useEffect, useMemo} from 'react';
import Send from '../lib/Send';

function MyApp({ Component, pageProps, router }) {
  // 유저 번호 값 루트 컴포넌트에서 뿌려줄 수 있게 관리
  const [userSeq, setUserSeq] = useState('');  // 임의값
  const [userInfo, setUserInfo] = useState('');
  // 유저 번호 값이 바뀔때만 userSeq 값 수정
  const userInfoValue = useMemo(() => ({
    userSeq, setUserSeq, userInfo, setUserInfo}), 
    [userSeq, setUserSeq, userInfo, setUserInfo]);

  return (
    <>
      <UserContext.Provider value={userInfoValue}>
        {/* framer-motion 라이브러리를 활용, 페이지 라우팅 될 때마다 transition effect를 발생시킵니다  */}
        <div className="grid grid-cols-1 gap-[5rem] mx-[12rem]">
          <Navbar />
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}>
            <Component {...pageProps} />
          </motion.div>
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default MyApp
