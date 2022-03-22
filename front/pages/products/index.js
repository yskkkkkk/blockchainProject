import Link from 'next/link';

export const getStaticProps = async () => {

  const res = await fetch('https://retoolapi.dev/X9nA53/dummy');
  const data = await res.json();
  
  return {
    props: {funds: data}
  }

}


const Products = ({funds}) => {

  return (
    <div>
      <h1>전체 펀드 상품들</h1>
      {funds.map(fund => (
        <Link href={'/products/' + fund.id} key={fund.id}>
          <button>{fund.fullName}</button>
        </Link>
      ))}
    </div>
  )

}

export default Products;