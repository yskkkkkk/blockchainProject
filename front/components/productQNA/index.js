import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import Backdrop from '../backdrop';

// 상품 QnA 컴포넌트
const ProductQNA = ({qnas}) => {
  
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    openModal ? close() : open();
  }
  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

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
        {/* 상품 QnA가 들어갈 위치 */}
        {qnas.map(qna => (
            // 스압방지를 위해서 + 질문 제목 빠르게 파악할 수 있게 하기 위해 질문 단위로 접었다 폇다 가능하게 구현
            <details className="border border-black py-[1rem]" key={qna}>
              <summary className="font-sans text-xl antialiased list-none pl-[1rem]">Q. {qna} 제목</summary>
              {/* 카톡 메신저 창 처럼 좌측 상대방, 우측 본인 구조로 채팅을 주고받듯이 말풍선 구현 */}
              {/* map 함수 활용하여 글이 작성된 시간 순으로 위에서 아래로 채팅html 생성할 예정  */}
              {/* reply text 면 좌측, qna text 면 우측 */}
              <hr className="m-[1rem] py-[1rem]" />
              <section className="flex flex-row justify-end gap-[2rem] my-[1rem] mr-[1rem]">
                <p className="mr-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-theme-color/80 max-w-[25rem]">wdsasss asdasds asdsassss asdsad sssssssssss ssssss asdasdads asssow!</p>
                <span className="mt-[1rem] text-theme-color/70 mix-blend-color-dodge">▶</span>
              </section>
              <section className="flex flex-row gap-[2rem] ml-[1rem] my-[1rem]">
                <img className="flex-none w-[4rem] h-[4rem] border-2 border-black rounded-full mr-[-1rem]" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="seller profile image" />
                <span className="mt-[1rem] text-black/20 mix-blend-color-dodge">◀</span>
                <p className="ml-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-black/20 max-w-[25rem]">wdsasss asdasds asdsassss asdasd sssssssssss ssssss asdasdad sasssow!</p>
              </section>
              <section className="flex flex-row justify-end gap-[2rem] my-[1rem] mr-[1rem]">
                <p className="mr-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-theme-color/80 max-w-[25rem]">wdsasss asdasds asdsassss asdsad sssssssssss ssssss asdasdads asssow!</p>
                <span className="mt-[1rem] text-theme-color/70 mix-blend-color-dodge">▶</span>
              </section>
              <section className="flex flex-row gap-[2rem] ml-[1rem] my-[1rem]">
                <img className="flex-none w-[4rem] h-[4rem] border-2 border-black rounded-full mr-[-1rem]" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="seller profile image" />
                <span className="mt-[1rem] text-black/20 mix-blend-color-dodge">◀</span>
                <p className="ml-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-black/20 max-w-[25rem]">wdsasss asdasds asdsassss asdasd sssssssssss ssssss asdasdad sasssow!</p>
              </section>
            </details>
          ))}
        <button onClick={toggleModal} className="w-48 py-[1rem] bg-theme-color text-white font-black antialiased text-xl justify-self-center">질문하기</button>
      </section>

      {/* 모달창 사라지는 애니매이션 유지시키기위해 AnimatePresence 활용 */}
      <AnimatePresence
        // initial animation (바로 사라져버리는것?) 비활성화시킴
        initial={false}
        // animation이 다 끝나야만 화면에서 컴포넌트가 사라지게함
        exitBeforeEnter={true}
        >
        {openModal && <Backdrop handleClose={close} />}
      </AnimatePresence>
    </motion.div>
  )
  
}

export default ProductQNA;