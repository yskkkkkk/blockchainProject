// 상품 공지사항 컴포넌트
const ProductAnnouncement = ({announcements}) => {
  
  return (
    <section className="flex flex-col gap-[4rem] border-2 border-black w-full ">
      {/* 상품 공지사항 들어갈 위치 */}
      {announcements.map(announcement => (
          <article className="flex flex-col gap-[2rem] justify-evenly border-2 border-black">
            <header className="flex flex-row justify-around">
              <h2 className="text-3xl">announcement {announcement}</h2>
              <button>삭제</button>
            </header>
            <p>
              감사합니다 {announcement}번째 공지입니다.
            </p>
            
          </article>
        ))}
    </section>
  )
  
}

export default ProductAnnouncement;