import {motion} from 'framer-motion';
import '../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { UserContext } from '../lib/UserContext';
import {useState} from 'react';

function MyApp({ Component, pageProps, router }) {
  // 유저 번호 값 루트 컴포넌트에서 뿌려줄 수 있게 관리
  const [userSeq, setUserSeq] = useState('');
  const userSeqValue = useMemo(() => ({userSeq, setUserSeq}), [userSeq, setUserSeq]);

  return (
    <>
      <UserContext.Provider value={userSeqValue}>
        {/* framer-motion 라이브러리를 활용, 페이지 라우팅 될 때마다 transition effect를 발생시킵니다  */}
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
          <div className="grid grid-cols-1 gap-[5rem] mx-[12rem]">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </motion.div>
      </UserContext.Provider>
    </>
  )
}

export default MyApp
