

const ProductDetail = ({picture}) => {
  
  return (
    <section className="flex flex-col gap-[4rem] border-2 border-black">
      <nav className="flex flex-row gap-[2rem] justify-evenly">
        <button className="font-sans text-2xl antialiased underline decoration-8 underline-offset-8 decoration-white hover:decoration-theme-color/70">상품 정보</button>
        <button className="font-sans text-2xl antialiased underline decoration-8 underline-offset-8 decoration-white hover:decoration-theme-color/70">공지사항</button>
        <button className="font-sans text-2xl underline decoration-8 underline-offset-8 decoration-white hover:decoration-theme-color/70">Q & A</button>
      </nav>
      <img src={picture} alt="road" width="800"/>
    </section>
  )
  

}

export default ProductDetail;