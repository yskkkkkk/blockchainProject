import {motion} from 'framer-motion';
import '../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}>
        <div className="grid grid-cols-1 gap-[5rem] mx-[12rem]">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </motion.div>
    </>
  )
}

export default MyApp
