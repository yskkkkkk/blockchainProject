import {motion} from 'framer-motion';
// 상품 상세정보 컴포넌트
const ProductDetail = ({picture}) => {
  
  return (
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
      <section className="flex flex-col gap-[4rem] border-2 border-black">
        {/* 상품 상세정보가 들어갈 위치 */}
        <img src={picture} alt="road" width="800"/>
      </section>
    </motion.div>
  )
}

export default ProductDetail;