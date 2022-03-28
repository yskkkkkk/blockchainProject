import { motion } from "framer-motion";
import AnnounceModal from "../announceModal";
import QnaModal from "../qnaModal";

const Backdrop = ({label, handleClose}) => {
 
  return (
    <motion.div
      onClick={handleClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {label === "qna" && <QnaModal handleClose={handleClose} />}
      {label === "announcement" && <AnnounceModal handleClose={handleClose} />}
    </motion.div>
  );
};

export default Backdrop;