import DaumPostCode from 'react-daum-postcode';
import { motion } from 'framer-motion';

const DaumPost = ({handleClose, setAddress}) => {


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
        "fundingSeq": fundingSeq,
        "boardTitle": title,
        "boardContent": content,
    }
    // 공지사항 제출 시 DB에 post 요청 보내고
    Send.post('/funding/board', data)
        .then((data) =>{
        console.log(data);
        addAnnouncement();  // 공지사항 새롭게 요청해서 화면에 표시 (annoucement 컴포넌트에서 실행됨)
        setTitle('');
        setContent('');
        handleClose();
        })
        .catch((e) => {
        console.log(e);
        });
    }

    // https://keeper.tistory.com/23 참고
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setAddress(fullAddress);
        handleClose();
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
        <DaumPostCode onComplete={handleComplete} className="post-code" />
    </motion.div>
    )
}

export default DaumPost;


