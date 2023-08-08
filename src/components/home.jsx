import { useState , useEffect } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from './hero'
import beach from '../images/beach.jpg'
import mainPattern from '../images/mainpattern.png'
import food from '../images/food1.jpg'
import interior from '../images/interior1.jpg'
import service from '../images/service1.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import menu from '../images/menu.jpg'
import contactUs from '../images/contactUs.jpg'
import { Link } from 'react-router-dom'
import transition from './transition';

const Home = () => {

  const [img, setImg] = useState(food);
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
  
  const changer1 = () => {
    setImg(food)
    console.log(img)
  }
  const changer2 = () => {
    setImg(interior)
    console.log(img)
  }
  const changer3 = () => {
    setImg(service)
    console.log(img)
  }

  useEffect(() => {
    console.log(img)
  },[img])

  return (
    <>
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: -60}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true , amount:0.3 }} 
        transition={{type: 'spring', duration: 1.5, delay:0.3}}
        id="aboutUs" 
        className=" flex flex-col pb-[50vh] md:flex-row h-full md:h-[130vh] w-screen mt-[5rem] md:mt-[5.8rem]"
      >
        <div className=" w-full md:w-[35%] font-medium text-2xl pr-16 pl-5 lg:pl-10">
          <p className=" mt-[8rem]">WHO WE ARE</p>
        </div>
        <p id="about" className="z-10 w-[80%] mt-[3rem] md:mt-[7rem] font-[Italiana] font-bold text-[2.5rem] md:text-[3.1rem] px-0 pl-5 lg:pl-10 md:px-28">
          Experience coastal bliss at RestoGrand. <br/>Unleashing bold flavors, culinary agility, and unforgettable dining. Precision and passion creating lasting impressions, delighting taste buds with remarkable gastronomy.
        </p>
      </motion.div>
      <div className=" relative lg:h-screen flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row w-screen">
        <img className=' absolute w-[20rem] lg:w-[30rem] lg:left-0 right-5 bottom-[-50px] lg:top-[-130px]' src={mainPattern} />
        <img className=" w-[90%] lg:w-[40rem] z-10 shadow-xl" src={beach} />
        <div className="flex flex-col justify-center gap-10 px-10 lg:px-24">
          <motion.p
            initial={{ opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.3 }} 
            transition={{type: 'spring', duration: 1.5, delay:0.3}}
            className='font-[Italiana] font-bold text-3xl lg:text-5xl border-[#2f2828] border-b-2 pb-5'
          >
            With passion, <br/>creating unforgettable experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.3 }} 
            transition={{type: 'spring', duration: 1.5, delay:0.3}}
            className=' text-xl'
          >
            Experience the Surge! Indulge in exquisite cuisine, refreshing cocktails, and stunning ocean views. With a relaxed beachside atmosphere, our restaurant offers a truly exceptional dining adventure. Join us for a seaside culinary experience like no other.
          </motion.p>
        </div>
      </div>
      <div className='dark:bg-[#191919] duration-500 ease-in-out mt-[15rem] w-[100%] flex flex-col gap-10 md:gap-0 md:flex-row h-full lg:h-[185vh]'>
      <div className="max-w-screen-xl w-[80%] md:w-[40%] text-2xl md:text-3xl mx-auto pl-0 md:pl-16 min-h-sceen">
        <div className="grid max-w-xl mx-auto">
          <div className="py-10 border-gray-300 border-y-[1px]">
            <details className="group">
              <summary onClick={changer1} className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className='font-[Italiana] font-bold'> What sets our food apart from others ?</span>
                <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
              </summary>
              <p className=" text-lg mt-10 group-open:animate-fadeIn">
              Indulge in the finest quality seafood and coastal-inspired dishes, expertly crafted by our talented chefs. We source the freshest ingredients, with a focus on locally caught seafood, to deliver flavors that captivate your palate.
              </p>
            </details>
          </div>
          <div className="py-10 border-gray-300 border-b-[1px]">
            <details className="group">
              <summary onClick={changer2} className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className='font-[Italiana] font-bold'> Why choose our beachside restaurant ? </span>
                <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
              </summary>
              <p className=" text-lg mt-10 group-open:animate-fadeIn">
              Immerse yourself in the enchanting ambiance of our beachside location. With panoramic views of the shoreline and the rhythmic sounds of the waves, our restaurant provides a picturesque setting for a memorable dining experience.
              </p>
            </details>
          </div>
          <div className="py-10 border-gray-300 border-b-[1px]">
            <details className="group">
              <summary onClick={changer3} className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className='font-[Italiana] font-bold'>How is our service remarkable?</span>
                <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
              </summary>
              <p className=" text-lg mt-10 group-open:animate-fadeIn">
              At our restaurant, we take pride in delivering exceptional service that exceeds your expectations. Our dedicated and highly trained staff is committed to ensuring your dining experience is flawless from start to finish. We strive to create a comfortable and inviting environment, where you can unwind, savor your meal, and create lasting memories.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[60%] md:px-20 px-5  '>
        <motion.img 
          key={img}
          initial={{ opacity: 0, transition: { duration: 1.5, ease: "circOut" } }}
          animate={{ opacity: 1 , transition: { duration: 1.5, ease: "circIn"}}}
          exit={{ opacity: 1, transition: { duration: 1.5, ease: "circOut" } }}
          className=' z-30 shadow-xl ' src={img} />
      </div>
      </div>
      <motion.div 
        ref={topRef} 
        initial="normal" 
        className=' h-[400vh] md:h-[350vh] relative flex flex-col justify-center dark:bg-[#191919] dark:text-white duration-500 ease-in-out w-full'
        onView={() => {
          setIsInView(true);
        }}
        onChange={(inView) => {
          setIsInView(inView);
        }}
        >
        <motion.img 
          initial={{ opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 1.5, delay:0.3}}
          className=' w-[30rem] hidden lg:block absolute left-10' src={img1} />
        <motion.img 
          initial={{ opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 1.5, delay:0.6}}
          className=' w-[19rem] hidden lg:block absolute bottom-32 left-10' src={img2} />
        <motion.img 
          initial={{ opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 1.5, delay:0.6}}
          className=' w-[19rem] hidden lg:block absolute right-20' src={img3} />
        <motion.img 
          initial={{ opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 1.5, delay:0.3}}
          className=' w-[23rem] hidden lg:block absolute top-32 right-44' src={img4} />
        <motion.img 
          initial={{ opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 1.5, delay:0.3}}
          className=' w-[35rem] hidden lg:block absolute bottom-44 right-28' src={img5} />
        <p className=' pl-10 md:pl-32 font-bold mb-16 text-2xl'>We welcome you </p>
        <p className='z-10 w-[90%] md:w-[65%] font-bold text-[2.5rem] md:text-[3.8rem] pl-10 md:pl-32'>
          Savor the waves of culinary excellence, where our beachside restaurant artfully crafts exceptional flavors, forges unforgettable experiences, and creates enduring memories for every guest.
        </p>
      </motion.div>
      <div className='dark:bg-[#191919] duration-500 ease-in-out pt-44 sm:h-[190vh] h-full pb-40'>
        <div className=' flex flex-col md:flex-row w-full h-full pb-40 md:h-[50vh] '>
          <p className=' w-full md:w-[50%] p-7 md:p-10 font-semibold text-3xl'>
            Taste. Explore. Connect. Delight.
          </p>
          <p className=' w-full md:w-[50%] text-[#807264] py-10 px-7 md:px-20 font-light text-xl'>
          Embark on a culinary journey at our beachside restaurant. Delight in expertly crafted dishes, showcasing the finest ingredients. Explore our menu online and reserve your table to experience an unforgettable dining adventure by the shore.
          </p>
        </div>
        <div className=' flex flex-col md:flex-row md:gap-0 gap-10 justify-around w-full'>
          <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.2 }} 
            transition={{ duration: 0.5 }}
            className=' w-[80%] md:w-[30%] flex flex-col pl-16'>
            <Link to='/menu'>
              <img className=' w-[100%]' src={menu} />
              <p className='text-[1rem] pt-5'>Take a look at the <br/><span className=' font-[Italiana] text-[5rem] font-bold'>Menu</span></p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.2 }} 
            transition={{ duration: 0.5 , delay: 0.3 }}
            className=' w-[95%] md:w-[40%] flex items-end ml-5 md:ml-0 pr-5 md:pr-16'>
          <Link to='/contact' className='flex items-end pb-10'>
            <p className='text-[1rem] pr-5'>Or contact us<br/><span className=' font-[Italiana] text-[2rem] lg:text-[3rem] font-bold'>In Here</span></p>
            <img className=' w-[50%] lg:w-[70%]' src={contactUs} />
          </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

const WrappedAboutUs = transition(Home)
export default WrappedAboutUs