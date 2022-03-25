// 상품 공지사항 컴포넌트
const ProductAnnouncement = ({announcements}) => {
  
  return (
    <section className="flex flex-col gap-[4rem]">
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
      <button className="mx-[20rem] py-[1rem] bg-theme-color text-white font-black antialiased text-xl" >공지사항 작성</button>

    </section>
  )
  
}

export default ProductAnnouncement;