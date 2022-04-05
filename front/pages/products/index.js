import Link from 'next/link';
import FundCard from '../../components/fundCard';
import {motion} from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// 상품 페이지를 통해 상세 페이지로의 이동을 임시 구현하기 위해 만든 테스트 페이지
export const getStaticProps = async () => {

  // const res = await fetch('https://retoolapi.dev/X9nA53/dummy'); // 전체 펀딩리스트를 가져올 수 있는지 확인 필요
  // const res = await fetch('https://j6a305.p.ssafy.io/api/funding/lists/1', {"sort": 1});
  // const data = await res.json();
  let fundsList = [];
  for (let i = 1; i < 4; i++) {
    const res = await fetch(`https://j6a305.p.ssafy.io/api/funding/lists/${i}`, {"sort": `${i}`});
    const data = await res.json();
    fundsList.push([data.data])
  }

  return {
    props: {
      funds: fundsList,
    }
  }
}


const Products = ({funds}) => {

  const [category, setCategory] = useState(1);

  const showPopular = (e) => {
    e.preventDefault();
    setCategory(1);
  }
  const showNew = (e) => {
    e.preventDefault();
    setCategory(2);
  }
  const showTrending = (e) => {
    e.preventDefault();
    setCategory(3);
  }

  return (
    <>
      <nav className="flex flex-row justify-center gap-[5rem] mt-[2rem] mb-[6rem]">
        <motion.button whileTap={{ scale: 0.98 }} className={`${category === 1 && "text-theme-color"} "rounded-2xl flex flex-col items-center gap-[0.5rem] shadow hover:text-theme-color hover:shadow-theme-color rounded-xl`} onClick={showPopular}>
          <Image width="70rem" height="70rem" className="rounded-t-xl" src="/category/popular.jpg" alt="popular category button image" />
          <span className="font-black mb-[0.3rem]">인기</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.98 }} className={`${category === 2 && "text-theme-color"} "rounded-2xl flex flex-col items-center gap-[0.5rem] shadow hover:text-theme-color hover:shadow-theme-color rounded-xl`} onClick={showNew}>
          <Image width="70rem" height="70rem" className="rounded-t-xl" src="/category/new.webp" alt="new category button image" />
          <span className="font-black">신규</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.98 }} className={`${category === 3 && "text-theme-color"} "rounded-2xl flex flex-col items-center gap-[0.5rem] shadow hover:text-theme-color hover:shadow-theme-color rounded-xl`} onClick={showTrending}>
          <Image width="70rem" height="70rem" className="rounded-t-xl" src="/category/trending.jpg" alt="trending category button image" />
          <span className="font-black">급상승</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.98 }} className={`${category === 1 && "text-theme-color"} "rounded-2xl flex flex-col items-center gap-[0.5rem] shadow hover:text-theme-color hover:shadow-theme-color rounded-xl`} onClick={showPopular}>
          <Image width="70rem" height="70rem" className="object-none rounded-t-xl" src="/category/life.avif" alt="life category button image" />
          <span className="font-black">생활</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.98 }} className={`${category === 2 && "text-theme-color"} "rounded-2xl flex flex-col items-center gap-[0.5rem] shadow hover:text-theme-color hover:shadow-theme-color rounded-xl`} onClick={showNew}>
          <Image width="70rem" height="70rem" className="object-none rounded-t-xl" src="/category/food.avif" alt="food category button image" />
          <span className="font-black">식품</span>
        </motion.button>
        
      </nav>
      <div className="flex flex-wrap justify-center gap-[5rem] my-10">
        {funds[category-1][0].map(fund => (
          // <Link href={'/products/' + fund.id} key={fund.id} passHref>
          <Link href={'/products/' + fund.fundingSeq} key={fund.fundingSeq} passHref>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
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