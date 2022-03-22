// OAUTH TEST용 파일. 특이 사항: 비동기 호출을 쓸 필요가 없이, 그냥 링크만 연결해주시면 됩니다!

export default function login() {

  return (
    <div>
      <a style={{position: "fixed", left: "50vw", top: "50%"}} href="https://kauth.kakao.com/oauth/authorize?client_id=d0c28ab1ec869874fb6be4eaa9ff193a&redirect_uri=http://localhost:3000/test/loggedin&response_type=code">카카오로 로그인</a>
      {/* <button onClick={kakao} style={{position: "fixed", left: "50vw", top: "50%"}}>카카오로 로그인</button> */}
    </div>
  )
}