import { useState, useRef } from "react";
import RecepientForm from "../components/orderPage/recepientForm";
import { motion } from "framer-motion";
import Image from 'next/image';

const Order = () => {
  
  const [openPostSearch, setOpenPostSearch] = useState(false);
  
  const [orderProcess, setOrderProcess] = useState(1);

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
    <main className="flex flex-col gap-[5rem]">
      <nav className="flex flex-row justify-center gap-[4rem]">
        <motion.button 
          whileTap={{ scale: 0.98 }} 
          className={`${orderProcess === 0 && "text-theme-color border-theme-color/70 border-b-4"} "rounded-lg hover:text-theme-color hover:border-b-4 w-20 h-10`}
        >
          <span className="text-lg antialiased font-medium">상품 선택</span>
        </motion.button>
        <Image src="/arrow.svg" height={20} width={20} />
        <motion.button 
          whileTap={{ scale: 0.98 }} 
          className={`${orderProcess === 1 && "text-theme-color border-theme-color/70 border-b-4"} "rounded-lg hover:text-theme-color hover:border-b-4 w-20 h-10`}
        >
          <span className="text-lg antialiased font-medium">수령 정보</span>
        </motion.button>
        <Image src="/arrow.svg" height={20} width={20} />
        <motion.button 
          whileTap={{ scale: 0.98 }} 
          className={`${orderProcess === 2 && "text-theme-color border-theme-color/70 border-b-4"} "rounded-lg hover:text-theme-color hover:border-b-4 w-20 h-10`}
        >
          <span className="text-lg antialiased font-medium">최종 확인</span>
        </motion.button>
      </nav>

      {orderProcess === 0 && (
        <h2>상품 페이지</h2>
      )}

      {orderProcess === 1 && (
        <RecepientForm 
        togglePostSearch={togglePostSearch} 
        setReceiver={setReceiver} 
        receiver={receiver} 
        address={address}
        setAddress={setAddress}
        setAddress2={setAddress2} 
        handlePhone={handlePhone} 
        phoneRef={phoneRef} 
        openPostSearch={openPostSearch}
        handleClose={close}
        telNumber={telNumber}
        />
      )
      }
      {orderProcess === 2 && (
        <h2>최종 페이지</h2>
      )}
      

      <section>
        
      </section>
    </main>
    
  )
}

export default Order;