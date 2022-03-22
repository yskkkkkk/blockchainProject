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

// 각 다이내믹 페이지마다 실행됨
export const getStaticProps = async (context) => {  // context == getStaticPaths의 return 값 paths
  
  const id = context.params.id;
  const res = await fetch(`https://retoolapi.dev/X9nA53/dummy/${id}`);
  const data = await res.json();

  return {
    props: {fund: data}
  }
}

const Detail = ({fund}) => {
  return (
    <div>
      <h1>{fund.fullName}</h1>
      <img src={fund.col1} alt="thumbnail" />
    </div>
  );
}

export default Detail;