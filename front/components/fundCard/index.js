import Image from "next/image";

const FundCard = ({fund}) => {

  return (
    <article className="flex flex-col gap-[1rem] overflow-hidden flex-wrap shadow-lg">
      <img className="self-center w-fit" src="/productImg.jpg" alt="fund card image" />
      <section className="px-6">
        <div className="mb-2 text-xl font-bold">펀드명:{fund.fundingTitle} ₩</div>
        <p className="text-base text-gray-700">펀드한줄설명{fund.fundingSimple}</p>
      </section>
      <section className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#early bird</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#한정수량</span>
      </section>
    </article>

    // <div class="max-w-sm min-w-sm lg:max-w-full lg:flex">                                                         {/* 아래거 안될시 style={{backgroundImage: `url('/productImg.jpg')`}} 로 대체*/} 
    //   <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${fund.fundingImage})` }} title="product thumbnail pic">
    //   </div>
    //   <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //     <div class="mb-8">
    //       <div class="text-gray-900 font-bold text-xl mb-2">{fund.fundingTitle}</div>
    //       <p class="text-gray-700 text-base">매우단순한 설명입니다:</p>
    //       <p class="text-gray-700 text-base">{fund.fundingSimple}</p>
    //     </div>
    //     <div class="flex items-center">
    //       <Image width="30rem" height="30rem" class="rounded-full mr-4" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="seller pic" />
    //       <div class="text-sm">
    //         <p class="text-gray-900 leading-none">Jonathan Reinink</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default FundCard;