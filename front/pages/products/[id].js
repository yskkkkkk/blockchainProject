import {useState} from 'react';
import Image from 'next/image';

import ProductBasics from "../../components/productBasics";
import ProductDetail from "../../components/productDetail";
import ProductAnnouncement from "../../components/productAnnouncement";
import ProductQNA from "../../components/productQNA";

// 다이나믹 루트 활용하여 각 상세 페이지에 대해 라우트와 html 페이지를 생성해주기 위한 함수
export const getStaticPaths = async () => {
  
  // const res = await fetch('https://retoolapi.dev/X9nA53/dummy');    // 펀딩 리스트 get 요청
  const res = await fetch('/funding/lists', {"sort": 1});    // 펀딩 리스트 get 요청
  const data = await res.json();

  const paths = data.map(fund => {
    return {
      // params: {id: fund.id.toString()}  // 라우트팅에 활용할 id값 return ([id].js 과 key 값의 이름이 동일해야함)
      params: {id: fund.fundingSeq.toString()}
    }
  })

  return {
    paths: paths,     // key값 이름이 paths인것은 convention 이고, 해당 값은 아래의 getStaticProps 의 context값으로 자동 전달됩니다.
    fallback: false,  // 유효하지 않은 id값의 페이지로 라우팅 되면 자동으로 404페이지 표시 
  }
}


// 각 다이내믹 페이지마다, 페이지 render 전에 실행되어 필요한 정보들을 fetch 해온다
export const getStaticProps = async (context) => {  // context == getStaticPaths의 return 값 paths
  
  const id = context.params.id;
  // const res = await fetch(`https://retoolapi.dev/X9nA53/dummy/${id}`);  // 펀딩 상세정보 get 요청
  const res = await fetch('/funding/top', {"fundingSeq": id});
  const data = await res.json();

  return {
    props: {fund: data}
  }
}


// getStaticProps 에서 fetch 된 데이터들을 props로 받아와서 Detail 페이지에서 활용하게됨
const Detail = ({fund}) => {
 
  const [currentNav, setCurrentNav] = useState(0);

  const showProductDetail = (e) => {
    e.preventDefault();
    setCurrentNav(0);
  }
  const showAnnouncement = (e) => {
    e.preventDefault();
    setCurrentNav(1);
  }
  const showQNA = (e) => {
    e.preventDefault();
    setCurrentNav(2);
  }

  return (
    <main className="flex flex-col gap-[4rem]">
      
      {/* 펀드 상품 상단정보가 들어갈 위치 */}
      {/* 소스 링크 같은 경우는 prop 이름이 src 여야한다는 슬픈 사실.. */}
      {/* <ProductBasics src={fund.col1} fundInfo={fund} /> */}
      <ProductBasics src={fund.fundingImage} fundInfo={fund} />
      <hr />
      {/* 상품 상세정보의 네비게이션바  */}
      <nav className="flex flex-row gap-[3rem] justify-center mr-[50rem]">
        <button onClick={showProductDetail} className={`${currentNav === 0 ? "decoration-theme-color/70 text-theme-color font-semibold" : "text-black text-opacity-50"} font-sans text-2xl antialiased underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70`}>상품 정보</button>
        <button onClick={showAnnouncement} className={`${currentNav === 1 ? "decoration-theme-color/70 text-theme-color font-semibold" : "text-black text-opacity-50"} font-sans text-2xl antialiased underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70`}>공지사항</button>
        <button onClick={showQNA} className={`${currentNav === 2 ? "decoration-theme-color/70 text-theme-color font-semibold" : "text-black text-opacity-50"} font-sans text-2xl antialiased underline decoration-4 underline-offset-8 decoration-white hover:decoration-theme-color/70`}>Q & A</button>
      </nav>
      <section className="flex flex-row gap-[8rem] justify-center">
        {/* 펀딩 상세정보 컴포넌트 */}
        <section className="flex flex-col gap-[4rem] basis-[50rem]">
          {currentNav === 0 && (
            <ProductDetail picture="https://images.unsplash.com/photo-1603408639326-fad10b8fbc1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZyUyMHdheXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
          )}
          {currentNav === 1 && (
            <ProductAnnouncement announcements={[1, 2, 3, 4, 5]} />
          )}
          {currentNav === 2 && (
            <ProductQNA qnas={[1, 2, 3, 4, 5]} />
          )}
        </section>
        
        {/* 펀드 상품 종류 선택 컴포넌트들 들어갈 위치  */}
        <aside className="flex flex-col gap-[2rem]">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg" alt="rocket" width={250} height={400} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg" alt="rocket" width={250} height={400} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg" alt="rocket" width={250} height={400} />
        </aside>
      </section>
    </main>
  );
}

export default Detail;