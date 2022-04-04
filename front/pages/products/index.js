import Link from 'next/link';
import FundCard from '../../components/fundCard';
import {motion} from 'framer-motion';

// 상품 페이지를 통해 상세 페이지로의 이동을 임시 구현하기 위해 만든 테스트 페이지
export const getStaticProps = async () => {

  // const res = await fetch('https://retoolapi.dev/X9nA53/dummy'); // 전체 펀딩리스트를 가져올 수 있는지 확인 필요
  const res = await fetch('https://j6a305.p.ssafy.io/api/funding/lists/1', {"sort": 1});
  const data = await res.json();

  return {
    props: {
      funds: data.data,
    }
  }
}


const Products = ({funds}) => {

  return (
    <>
      <h1 className="text-center mt-[2rem] mb-[6rem]">전체 펀드 상품들</h1>
      <div className="flex flex-wrap justify-center gap-[5rem] my-10">
        {funds.map(fund => (
          // <Link href={'/products/' + fund.id} key={fund.id} passHref>
          <Link href={'/products/' + fund.fundingSeq} key={fund.fundingSeq} passHref>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4"
            >
              <FundCard fund={fund} />
            </ motion.button>
          </Link>
        ))}
      </div>
    
    </>
  )

}

export default Products;