import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import AnimatedRoutes from './components/animatedRoutes';
import Footer from './components/footer'

const App = () => {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const delayScrollToTop = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
      return () => clearTimeout(delayScrollToTop);
    }, [pathname]);
  
    return null;
  }

  return (
    <div className=' text-[#434b34] bg-[#f7f7ee]'>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </div>
  )
}

export default App
