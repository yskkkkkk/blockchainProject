import CustomButton from '../components/ui/button';
import Router from 'next/router';


export default function Login() {
  
  const toKakao = () => {
    Router.push("http://j6a305.p.ssafy.io/api/oauth2/authorization/kakao");
  }

  return (
    <main className="flex flex-col gap-[4rem] items-center">
      <h1 className="font-sans text-4xl antialiased text-center ">우리 두레의 회원이 되어<br />당신만의 펀딩을 시작하세요.</h1>
      <section className="flex flex-col gap-[1rem]">
        <div>
          <label className="inline-flex items-center gap-[2rem]">
            <input type="checkbox" className="form-checkbox accent-theme-color" />
            <span className="ml-2 text-sm">우리두레 회원가입 기본/필수 약관 <br /> 개인정보 취급방침 동의 (필수)</span>
            <button>전문보기</button>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-[2rem]">
            <input type="checkbox" className="form-checkbox accent-theme-color" />
            <span className="ml-2 mr-1.5 text-sm ">우리두레 서비스의 다양한 소식과 <br /> 이벤트 알람 (선택)</span>
            <button>전문보기</button>
          </label>
        </div>
        <hr className="mt-[1.5rem]" />
      </section>
      <img className="border hover:cursor-pointer mt-[-1rem]" src="/kakao.svg" alt="카카오로그인버튼" onClick={toKakao} />

    
    </main>
  )
}