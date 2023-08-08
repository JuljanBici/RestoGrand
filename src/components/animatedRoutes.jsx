import {Routes, Route , useLocation } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import Contact from './contact';
import AboutUs from './aboutUs';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes