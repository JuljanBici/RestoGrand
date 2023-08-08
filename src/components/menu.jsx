import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mainMenu from '../images/mainMenu.jpg'
import menu from '../menuData/menu'
import transition from './transition';

const Menu = () => {

  const [isInView, setIsInView] = useState(false);

  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    setIsInView(topInView);
    if (topInView) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [topInView]);

  const [selectedCategory, setSelectedCategory] = useState(menu[0].category);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='bg-[#fff5ee]'>
      <motion.div 
        className='text-white bg-cover bg-center flex flex-col items-center justify-center h-screen' 
        style={{ backgroundImage: `url(${mainMenu})` }}
        ref={topRef}
        onView={() => {
          setIsInView(true);
        }}
        onChange={(inView) => {
          setIsInView(inView);
        }}
        >
        <motion.p
          initial={{ opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{type: 'spring', duration: 2, delay:0.4}}
          className=' font-bold font-[Italiana] md:text-5xl text-[2.5rem]'
          >
            RestoGrand
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60}}
          animate={{opacity: 1, y: 0}}
          transition={{type: 'spring', duration: 3, delay:0.8}}
          className=' font-bold md:text-[11rem] text-[7rem]'
          >
            Menu
        </motion.p>
      </motion.div>
      <div className=' flex flex-col items-center min-h-screen'>
        <div className="flex flex-wrap gap-10 py-10 px-10 justify-center w-full">
          {menu.map((item) => (
            <button
              key={item.category}
              onClick={() => handleCategoryClick(item.category)}
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium  ">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#191919] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative font-[Italiana] font-bold transition duration-300 group-hover:text-white ease">{item.category}</span>
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 md:gap-32 gap-10 my-20 md:px-20 px-5"
        >
          {menu.find((item) => item.category === selectedCategory).items.map((item , index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{type: 'spring', duration: 0.5 }}
              viewport={{once: false , amount:0.05 }} 
              className="flex border-b border-gray-300 pb-2">
              <img src={item.imgUrl} alt={item.name} className="w-20 h-20 mx-5 object-cover rounded-full" />
              <div>
                <p className="text-center font-bold mt-2">{item.name}</p>
                <p className="text-center">Lek {item.price}.00</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const WrappedMenu = transition(Menu)
export default WrappedMenu