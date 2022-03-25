import {motion} from 'framer-motion';

// 상품 공지사항 컴포넌트
const ProductAnnouncement = ({announcements}) => {
  
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
            <article className="flex flex-col py-[1.5rem] gap-[2rem] justify-evenly border border-black">
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
        <button className="w-48 py-[1rem] bg-theme-color text-white font-black antialiased text-xl justify-self-center">공지작성</button>
      </section>
    </motion.div>
  )
  
}

export default ProductAnnouncement;