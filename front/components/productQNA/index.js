// 상품 QnA 컴포넌트
const ProductQNA = ({qnas}) => {
  
  return (
    <section className="flex flex-col gap-[4rem]">
      {/* 상품 QnA가 들어갈 위치 */}
      {qnas.map(qna => (
          // 스압방지를 위해서 + 질문 제목 빠르게 파악할 수 있게 하기 위해 질문 단위로 접었다 폇다 가능하게 구현
          <details className="border border-black py-[1rem]" key={qna}>
            <summary className="font-sans text-xl antialiased list-none pl-[1rem]">Q. {qna} 제목</summary>
            {/* 카톡 메신저 창 처럼 좌측 상대방, 우측 본인 구조로 채팅을 주고받듯이 말풍선 구현 */}
            <hr className="m-[1rem] py-[1rem]" />
            <section className="flex flex-row justify-end gap-[2rem] my-[1rem] mr-[1rem]">
              <p className="mr-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-theme-color/80 max-w-[25rem]">wdsasss asdasds asdsassss asdsad sssssssssss ssssss asdasdads asssow!</p>
              <span className="mt-[1rem] text-theme-color/70 mix-blend-color-dodge">▶</span>
            </section>
            <section className="flex flex-row gap-[2rem] ml-[1rem] my-[1rem]">
              <img className="flex-none w-[4rem] h-[4rem] border-2 border-black rounded-full mr-[-1rem]" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="seller profile image" />
              <span className="mt-[1rem] text-black/20 mix-blend-color-dodge">◀</span>
              <p className="ml-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-black/20 max-w-[25rem]">wdsasss asdasds asdsassss asdasd sssssssssss ssssss asdasdad sasssow!</p>
            </section>
            <section className="flex flex-row justify-end gap-[2rem] my-[1rem] mr-[1rem]">
              <p className="mr-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-theme-color/80 max-w-[25rem]">wdsasss asdasds asdsassss asdsad sssssssssss ssssss asdasdads asssow!</p>
              <span className="mt-[1rem] text-theme-color/70 mix-blend-color-dodge">▶</span>
            </section>
            <section className="flex flex-row gap-[2rem] ml-[1rem] my-[1rem]">
              <img className="flex-none w-[4rem] h-[4rem] border-2 border-black rounded-full mr-[-1rem]" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="seller profile image" />
              <span className="mt-[1rem] text-black/20 mix-blend-color-dodge">◀</span>
              <p className="ml-[-2.21rem] pl-[1rem] p-2 antialiased font-normal rounded-[15px] bg-black/20 max-w-[25rem]">wdsasss asdasds asdsassss asdasd sssssssssss ssssss asdasdad sasssow!</p>
            </section>
          </details>
        ))}
    </section>
  )
  
}

export default ProductQNA;