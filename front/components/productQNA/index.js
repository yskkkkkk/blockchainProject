// 상품 상세정보 컴포넌트
const ProductQNA = ({picture}) => {
  
  return (
    <section className="flex flex-col gap-[4rem] border-2 border-black">
      {/* 상품 상세정보가 들어갈 위치 */}
      <img src={picture} alt="road" width="800"/>
    </section>
  )
  
}

export default ProductQNA;