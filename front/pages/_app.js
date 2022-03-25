import '../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-[5rem] mx-[12rem]">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
