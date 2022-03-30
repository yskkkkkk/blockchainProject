import {motion} from "framer-motion";
import Send from "../../lib/Send.js";
import {useState} from 'react';

export default function AnnounceModal({addAnnouncement, handleClose}) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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

  const submitAnnouncement = (e) => {
    e.preventDefault();
    let data = {
      "fundingSeq": 1,
      "boardTitle": title,
      "boardContent": content,
    }
    // 공지사항 제출 시 DB에 post 요청 보내고
    Send.post('funding/board', data)
      .then((data) =>{
        console.log(data);
        addAnnouncement();  // 공지사항 새롭게 요청해서 화면에 표시 (annoucement 컴포넌트에서 실행됨)
        setTitle('');
        setContent('');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}  // 부모 컴포넌트로 이벤트 전달을 막아줌 : 모달컴포넌트는 클릭해도 화며에 유지해줌
      variants={popUp}
      initial="initial"
      animate="visible"
      exit="exit"
      className="modal"
      >
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h1>공지하기</h1>
        <div className="my-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="title">
            제목
          </label>
          <input onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 text-gray-700 border rounded shadow focus:outline-none focus:shadow-theme-color" id="title" type="text" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="content">
            공지 내용
          </label>
          <textarea onChange={(e) => setContent(e.target.value)} className="w-full px-3 py-2 mb-3 text-gray-700 border rounded shadow focus:outline-none focus:shadow-theme-color" id="content" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={submitAnnouncement} className="px-4 py-2 font-bold text-white rounded bg-theme-color/80 hover:bg-theme-color focus:outline-none focus:shadow-outline">
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