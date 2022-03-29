import {motion} from "framer-motion";


export default function QnaModal({sendForm, handleClose}) {

  const popUp = {
    initial: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y: "-30vh",
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    }
  }
  
  const cancel = (e) => {
    e.preventDefault();
    handleClose();
  }

  const postQuestion = () => {
    
  }

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={popUp}
      initial="initial"
      animate="visible"
      exit="exit"
      className="modal"
      >
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h1>질문하기</h1>
        <div className="my-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="title">
            제목
          </label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded shadow focus:outline-none focus:shadow-theme-color" id="title" type="text" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="content">
            질문 내용
          </label>
          <textarea className="w-full px-3 py-2 mb-3 text-gray-700 border rounded shadow focus:outline-none focus:shadow-theme-color" id="content" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={postQuestion} className="px-4 py-2 font-bold text-white rounded bg-theme-color/80 hover:bg-theme-color focus:outline-none focus:shadow-outline">
            작성
          </button>
          <button onClick={cancel} className="inline-block text-sm font-bold align-baseline text-theme-color hover:text-blue-800" href="#">
            취소
          </button>
        </div>
      </form>
    </motion.div>
  )
}

// 데이터 fetch 를 어떻게 해올지, 해당 정보들을 어떻게 관리하고 컴포넌트에 전달할지 고민중