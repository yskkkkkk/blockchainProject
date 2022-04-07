import CustomButton from "../../ui/button/button";


const FinalConfirm = () => {
  
  return (
    <section className="flex flex-col items-center gap-[5rem] border-2 py-[4rem] mx-[255px]">
      <h2 className="text-center">최종 구매 내용 확인 페이지</h2>
      <CustomButton 
        text="최종 구매 확정"  
        classNameProp="bg-theme-color text-white font-semibold w-40 h-10 " />
    </section>
  )

}

export default FinalConfirm;