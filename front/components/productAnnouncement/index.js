import {motion, AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import Backdrop from '../backdrop';

// 상품 공지사항 컴포넌트
const ProductAnnouncement = ({announcements}) => {
  
  const [openAnnounceModal, setOpenAnnounceModal] = useState(false);

  const toggleAnnounceModal = (e) => {
    e.preventDefault();
    openAnnounceModal ? close() : open();
  }
  const open = () => setOpenAnnounceModal(true);
  const close = () => setOpenAnnounceModal(false);

  return (
    // framer-motion 라이브러리를 활용, 해당 컴포넌트가 보여질때 마다 transition effect를 발생시킵니다
    <motion.div
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
      <section className="grid grid-cols-1 gap-[4rem]">
        {/* 상품 공지사항 들어갈 위치 */}
        {announcements.map(announcement => (
            <article key={announcement} className="flex flex-col py-[1.5rem] gap-[2rem] justify-evenly border border-black">
              <header className="flex flex-row justify-between mx-[2rem]">
                <h2 className="text-3xl">announcement {announcement}</h2>
                <button>삭제</button>
              </header>
              <hr className="mx-[2rem]" />
              <p className="mx-[2rem]">
                감사합니다 {announcement}번째 공지입니다.
              </p>
            </article>
          ))}
          
        <button onClick={toggleAnnounceModal} className="w-48 py-[1rem] bg-theme-color text-white font-black antialiased text-xl justify-self-center">공지작성</button>
      </section>
      <AnimatePresence
        // initial animation (바로 사라져버리는것?) 비활성화시킴
        initial={false}
        // animation이 다 끝나야만 화면에서 컴포넌트가 사라지게함
        exitBeforeEnter={true}
        >
        {openAnnounceModal && <Backdrop label="announcement" handleClose={close} />}
      </AnimatePresence>
    </motion.div>
  )
  
}

export default ProductAnnouncement;