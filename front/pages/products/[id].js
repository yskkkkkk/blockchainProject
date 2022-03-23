import ProductDetail from "../../components/productDetail";

// 다이나믹 루트 활용하여 각 상세 페이지에 대해 라우트와 html 페이지를 생성해주기 위한 함수
export const getStaticPaths = async () => {
  
  const res = await fetch('https://retoolapi.dev/X9nA53/dummy');    // 펀딩 리스트 get 요청
  const data = await res.json();

  const paths = data.map(fund => {
    return {
      params: {id: fund.id.toString()}  // 라우트팅에 활용할 id값 return ([id].js 과 key 값의 이름이 동일해야함)
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
  const res = await fetch(`https://retoolapi.dev/X9nA53/dummy/${id}`);  // 펀딩 상세정보 get 요청
  const data = await res.json();

  return {
    props: {fund: data}
  }
}

// getStaticProps 에서 fetch 된 데이터들을 props로 받아와서 Detail 페이지에서 활용하게됨
const Detail = ({fund}) => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <div className="flex flex-row border-2 border-black justify-evenly">
        <img src={fund.col1} alt="thumbnail" />
        <h1>{fund.fullName}</h1>
      </div>
      <div className="flex flex-row justify-evenly">
        <ProductDetail picture="https://images.unsplash.com/photo-1603408639326-fad10b8fbc1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZyUyMHdheXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
        <div className="border-2 border-black">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg" alt="rocket" width="250"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg" alt="rocket" width="250"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg" alt="rocket" width="250"/>
        </div>
      </div>
    </div>
  );
}

export default Detail;