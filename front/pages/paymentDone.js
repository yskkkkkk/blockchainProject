import Link from 'next/link';

export default function PaymentDone() {
  return (
    <div className="flex justify-center" style={{marginTop: "-30px"}}>
      <div className="border-4 border-[#6667AB]/[.6] p-10 shadow-lg">
        <div className="w-96 flex justify-between mb-5">
          <img className="w-2/5" src="/productImg.jpg" alt="" />
          <div className="w-7/12 text-center">
            <div className="text-[17px] font-semibold">펀드123</div>
            <div>1000 ₩   Titless - 1개입</div>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-[18px]">
          <h2 className="text-lg">후원해주셔서 감사합니다!</h2>
        </div>
        <div className="flex justify-around">
          <Link href="/main" passHref>
            <div className="flex cursor-pointer border-[2.5px] border-[#6667AB] rounded-full pl-[10px] pr-3 py-[2px]">
              <img className="w-10 mr-[6px]" src="/logo.png" alt="" />
              <button className="">홈으로</button>
            </div>
          </Link>
          <Link href="/profile" passHref>
          <div className="flex cursor-pointer items-center border-[2.5px] border-[#6667AB] rounded-full pl-[12.5px] pr-3 py-[1.5px]">
              <img className="w-7 h-[25px] mr-2 mb-[1px]" src="/mypage.png" alt="" />
              <button className="">마이페이지로</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}