import Link from 'next/link';
import Image from 'next/image';

// 상품 페이지를 통해 상세 페이지로의 이동을 임시 구현하기 위해 만든 테스트 페이지
export const getStaticProps = async () => {

  const res = await fetch('https://retoolapi.dev/X9nA53/dummy');
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
          <Link href={'/products/' + fund.id} key={fund.id} passHref>
            <button>{fund.fullName}</button>
          </Link>
        ))}
      </div>
    
    </>
  )

}

export default Products;