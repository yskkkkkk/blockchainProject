import Link from 'next/link';
import style from './products.module.css';

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
    <div className="grid grid-cols-4 gap-5 mt-10 text-center">
      <h1>전체 펀드 상품들</h1>
      {funds.map(fund => (
        <Link href={'/products/' + fund.id} key={fund.id}>
          <div>
            <button>{fund.fullName}</button>
          </div>
        </Link>
      ))}
    </div>
  )

}

export default Products;