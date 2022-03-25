// 상품 QnA 컴포넌트
const ProductQNA = ({qnas}) => {
  
  return (
    <section className="flex flex-col gap-[4rem] border-2 border-black">
      {/* 상품 QnA가 들어갈 위치 */}
      {qnas.map(qna => (
          // 스압방지를 위해서 + 질문 제목 빠르게 파악할 수 있게 하기 위해 질문 단위로 접었다 폇다 가능하게 구현
          <details key={qna}>
            <summary>qna {qna}</summary>
            {/* 카톡 메신저 창 처럼 좌측 상대방, 우측 본인 구조로 채팅을 주고받듯이 말풍선 구현 */}
            <section className="flex flex-row gap-[2rem]">
              <img className="w-[4rem] rounded-full" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="seller profile image" />
              <p className="border-2 border-theme-color">wow!<br />wow!<br />wow!<br />wow!</p>
            </section>
          </details>
        ))}
    </section>
  )
  
}

export default ProductQNA;