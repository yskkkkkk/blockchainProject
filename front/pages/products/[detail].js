export const getStaticPaths = async () => {
  
  const res = await fetch('https://retoolapi.dev/X9nA53/dummy');
  const data = await res.json();

  const paths = data.map(fund => {
    return {
      params: {id: fund.id.toString()}  // 라우트팅에 활용할 id값 return
    }
  })

  return {
    paths: paths,
    fallback: false,  // 유효하지 않은 id값의 페이지로 라우팅 되면 자동으로 404페이지 표시 
  }
}

const Detail = () => {
  return (
    <div>
      <h1>펀드 상품 상세 정보</h1>
    </div>
  );
}

export default Detail;