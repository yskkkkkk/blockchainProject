// 상품 QnA 컴포넌트
const ProductQNA = ({qnas}) => {
  
  return (
    <section className="flex flex-col gap-[4rem] border-2 border-black">
      {/* 상품 QnA가 들어갈 위치 */}
      {qnas.map(qna => (
          <details key={qna}>
            <summary>qna {qna}</summary>
            I have a Question!
          </details>
        ))}
    </section>
  )
  
}

export default ProductQNA;