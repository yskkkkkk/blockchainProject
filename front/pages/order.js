import { useState, useRef } from "react";
import Backdrop from "../components/modal/backdrop";
import {motion, AnimatePresence} from 'framer-motion';

const Order = () => {
  
  const [openPostSearch, setOpenPostSearch] = useState(false);
  
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [receiver, setReceiver] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const phoneRef = useRef();

  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";  

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setTelNumber(e.target.value); 
  };

  const togglePostSearch = (e) => {
    e.preventDefault();
    openPostSearch ? close() : open();
  }
  const open = () => setOpenPostSearch(true);
  const close = () => setOpenPostSearch(false);


  return (
    <main>
      <section className="flex flex-col items-center gap-[5rem]">
        <form class="w-full max-w-xl">
          <div class="flex flex-row -mx-3 mb-6">
            <p className=" basis-[6rem]">수령인</p>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input onChange={(e) => setReceiver(e.target.value)} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-theme-color/70 focus:bg-white" id="grid-first-name" type="text" placeholder="예) 홍길동" />
              {receiver === '' &&
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              }
            </div>
          </div>
          <div class="flex flex-row -mx-3 mb-6">
            <p className="basis-1/4">수령주소</p>
            <div class="w-full px-3">
              <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-theme-color/70 focus:bg-white focus:border-gray-500" id="address" type="text" placeholder="예) 판교역로 235, 분당 주공" autocomplete="off" readOnly value={address} />
              {address === '' &&
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              }
            </div>
            <motion.button 
             whileHover={{ scale: 1.01 }}
             whileTap={{ scale: 0.98 }}
             className="border px-[2rem] mb-[2rem] rounded-md shadow-md" 
             onClick={togglePostSearch} 
             >
               주소 검색
            </motion.button>
          </div>
          <div class=" flex flex-row -mx-3 mb-6 mt-[-1rem]">
            <p className="basis-[7.3rem] text-gray-500"></p>
            <div class="w-full px-3">
              <input onChange={(e) => setAddress2(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-theme-color/70 focus:bg-white focus:border-gray-500" id="address" type="text" placeholder="추가 주소" autoComplete="off" />
            </div>
          </div>
          <div class="flex flex-row  -mx-3 mb-6">
            <p className=" basis-[6.8rem]">전화번호</p>
            <div class="w-1/3">
              <input onChange={handlePhone} ref={phoneRef} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-theme-color/70 focus:bg-white focus:border-gray-500" id="grid-city" type="tel" placeholder="'-' 자동 입력" maxLength="15" />
            </div>
          </div>
        </form>
      </section>

      <section>
        
      </section>

      <AnimatePresence
      // initial animation (바로 사라져버리는것?) 비활성화시킴
      initial={false}
      // animation이 다 끝나야만 화면에서 컴포넌트가 사라지게함
      exitBeforeEnter={true}
      >
        {openPostSearch && <Backdrop label="post" handleClose={close} setAddress={setAddress} />}
      </AnimatePresence>
    </main>
    
  )
}

export default Order;