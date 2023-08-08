import main from '../images/img7.jpg'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const [isInView, setIsInView] = useState(false);

  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.05, triggerOnce: false });

  useEffect(() => {
    setIsInView(topInView);
    if (topInView) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [topInView]);

  return (
    <>
      <motion.div 
        initial={{ scale: 0.5 , borderRadius: '10px'  }}
        animate={{ scale: 1 , borderRadius: '0px' }}
        transition={{ duration: 1.5, delay:1.5 , ease: "backInOut"}}
        className='text-white bg-cover bg-center flex items-center h-screen'
        style={{ backgroundImage: `url(${main})`}}
        ref={topRef}
        onChange={(inView) => {
          setIsInView(inView);
        }}
      >
        <div className=' pt-10 flex flex-col font-bold text-[3rem] md:text-[5rem] w-full lg:w-[50%] px-10 lg:px-20'>
          <motion.p
            initial={{ opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 1.3 , delay: 2.5 }} 
            className='font-[Italiana]'>
            Where Waves 
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 1.3 , delay: 2.8 }} 
            className='font-[Italiana] mb-10'>
            Meet Flavors.
          </motion.p>
          <motion.p
            initial={{ opacity: 0}}
            animate={{opacity: 1 }}
            transition={{ duration: 1.3 , delay: 3.3 }} 
            className=' font-normal text-lg w-[90%] md:w-[70%] lg:w-full'> Immerse Yourself in Seaside Delights. Experience Unforgettable Flavors at Water&apos;s Edge. Unleash Your Palate&apos;s Passion. Join Us for an Adventure by the Sea.</motion.p>
        </div>
      </motion.div>
    </>
  )
}

export default Hero