import { motion } from "framer-motion";
import ProductModal from "../productModal";

const Backdrop = ({handleClose}) => {
 
  return (
    <motion.div
      onClick={handleClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductModal handleClose={handleClose} />
    </motion.div>
  );
};

export default Backdrop;