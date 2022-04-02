
const ProductOptions = ({options}) => {

  return (
    <>
      {options.map(option => {
        <article className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
          <section className="px-6 py-4">
            <div className="mb-2 text-2xl font-black">{option.optionPrice}</div>
            <div className="mb-2 text-xl font-bold">{option.optionTitle} - {option.Maxamount}개입</div>
            <p className="text-base text-gray-700">{option.optionText}</p>
          </section>
          <button className="w-48 py-[1rem] bg-theme-color text-white font-black antialiased text-xl justify-self-center">펀딩하기</button>
          <section className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#early bird</span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#한정수량</span>
          </section>
        </article>
      })}
    </>
  )
}

export default ProductOptions;