import Link from 'next/link';

// 상품 페이지를 통해 상세 페이지로의 이동을 임시 구현하기 위해 만든 테스트 페이지
export const getStaticProps = async () => {

  // const res = await fetch('https://retoolapi.dev/X9nA53/dummy'); // 전체 펀딩리스트를 가져올 수 있는지 확인 필요
  const res = await fetch('/funding/lists', {"sort": 1});
  const data = await res.json();
  
  return {
    props: {funds: data}
  }
}


const Products = ({funds}) => {

  return (
    <>
      <h1 className="text-center">전체 펀드 상품들</h1>
      <div className="grid grid-cols-4 gap-5 mt-10 text-center">
        {funds.map(fund => (
          // <Link href={'/products/' + fund.id} key={fund.id} passHref>
          <Link href={'/products/' + fund.fundingSeq} key={fund.fundingSeq} passHref>
            {/* <button>{fund.fullName}</button> */}
            <button>{fund.fundingTitle}</button>
          </Link>
        ))}
      </div>
    
    </>
  )

}

export default Products;