import Link from 'next/link';


export default function PaymentDone() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="w-80 flex justify-between">
          <img className="w-2/5" src="/productImg.jpg" alt="" />
          <div className="w-3/5">펀드펀드</div>
        </div>
        <div className="flex justify-around">
          <Link href="/main" passHref>
            <button className="">홈으로</button>
          </Link>
          <Link href="/profile" passHref>
            <button className="">마이페이지로</button>
          </Link>
        </div>
      </div>
    </div>
  )
}