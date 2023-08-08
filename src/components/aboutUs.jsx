import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import transition from './transition';
import boutUs from '../images/boutUs.jpg'
import boutUs1 from '../images/boutUs1.jpg'
import boutUs2 from '../images/boutUs2.jpg'
import boutUs3 from '../images/boutUs3.jpg'
import boutUs4 from '../images/boutUs4.jpg'
import { Link } from 'react-router-dom';

const AboutUs = () => {

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

  return (
    <div className='flex flex-col items-center pt-[15vh] lg:pt-[25vh]'>
      <div className='flex flex-col items-center font-[Italiana] font-bold px-5 lg:px-0 text-[2.5rem] lg:text-[4rem] h-[50vh]'>
        <p className='text-center'>Savor the flavors amidst</p>
        <p className='text-center'> nature&apos;s untouched beauty.</p>
      </div>
      <div className=' h-[80vh] lg:h-[150vh]'>
        <motion.img
          initial={{ scale: 0.5 ,y:-200}}
          whileInView={{ scale: 1 ,y: 0 }}
          viewport={{once: true , amount:0.9 }} 
          transition={{ease: 'easeInOut', duration: 1.5}}
          className=' h-[60vh] lg:h-auto w-[85vw] rounded-3xl object-cover' src={boutUs} 
        />
      </div>
      <div className=' w-full h-screen flex flex-col gap-20 px-10 lg:px-20'>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='font-bold text-2xl w-[100%] lg:w-[50%]'>Discover our charming restaurant in the Albanian Riviera, surrounded by scenic hills and palm trees. Indulge in delightful dishes with breathtaking views, a perfect blend of nature and gastronomy. Experience the magic of the Mediterranean amidst captivating greenery.</motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className=' w-[100%] lg:w-[50%] text-lg self-end'>At our restaurant, we pride ourselves on creating an exceptional dining experience. We offer delectable dishes and a welcoming ambiance that captivates your senses. Our culinary delights are served with a touch of artistry, making every visit a memorable journey.</motion.p>
      </div>
      <div className='flex flex-col items-center font-[Italiana] font-bold text-[2.5rem] lg:text-[4rem] h-[50vh] lg:h-[70vh] px-5 lg:px-0'>
        <p className='text-center'>One of the best reviewed</p>
        <p className='text-center'> in the Western Balkans</p>
      </div>
      <div className='h-[80vh] lg:h-[130vh]'>
        <motion.img
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='h-[60vh] lg:h-auto w-[85vw] rounded-3xl object-cover' src={boutUs1} 
        />
      </div>
      <div className=' w-full h-[150vh] lg:h-[110vh] flex flex-col gap-20 px-10 lg:px-20'>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='font-bold text-2xl w-[100%] lg:w-[70%] self-end'>Nestled within the embrace of a surrounding lagoon, Shëngjin boasts its natural beauty and local legends. The name Shëngjin is believed to be connected to the enchanting &quot;Forest of the Fairies,&quot; an area of magic and wonder between Shëngjin and Velipoja. This region was once known as Medea, reminiscent of the famous Medea from the Argonauts&apos; tales. While not as renowned as the southern Riviera, Shëngjin&apos;s small harbor and beach have earned recognition both locally and internationally.</motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className=' w-[100%] lg:w-[50%] text-lg '>The beach holds a unique charm and exclusivity that sets it apart. Embraced by lush pine forests and picturesque hills, the beach&apos;s proximity to the national road makes it easily accessible to all. Comfortable and affordable accommodations welcome visitors to relish the splendors of Shëngjin&apos;s natural surroundings. Local favorites include charming restaurants and stylish pubs that enliven the delightful summer nights.</motion.p>
      </div>
      <div className=' h-[50vh] lg:h-[100vh] w-full flex justify-center gap-5 lg:gap-10'>
        <motion.img 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='h-[60%] lg:h-[90%] w-[40%] lg:w-auto rounded-2xl mt-20 object-cover' src={boutUs2} />
        <motion.img 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='h-[60%] lg:h-[90%] w-[40%] lg:w-auto  rounded-2xl object-cover' src={boutUs3} />
      </div>
      <div className=' w-full h-[120vh] lg:h-[100vh]  flex flex-col gap-20 px-10 lg:px-20 pt-32 '>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className='font-bold text-2xl w-[100%] lg:w-[60%] '>Step into a world of boundless adventure at our seaside restaurant in Shëngjin, Lezhë. Beyond savoring our delectable cuisine, immerse yourself in the wonders of nature with an array of thrilling activities that will leave you with lasting memories.</motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false , amount:0.3 }} 
          transition={{type: 'spring', duration: 0.8}}
          className=' w-[100%] lg:w-[60%] text-lg '>For those yearning for excitement on the mainland, we invite you to explore the enchanting trails, perfect for walking and hiking. Traverse through the lush landscapes and witness the mesmerizing views of the Albanian Riviera. And right here in Shëngjin, experience the thrill of renting kayaks, jetskis, and ATVs to conquer the pristine waters and coastal terrain.</motion.p>
      </div>
      <div className='  bg-cover bg-center gap-5 lg:gap-0 flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-evenly w-screen h-screen pb-14' style={{ backgroundImage: `url(${boutUs4})`}}>
        <Link to='/menu'>
          <motion.button 
            initial={{ opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.2 }} 
            transition={{type: 'spring', duration: 0.8}}
            className=' bg-[#434b34] text-[#f7f7ee] px-5 py-10 lg:px-20 lg:py-20 font-[Italiana] text-[1.3rem] lg:text-4xl font-bold rounded-3xl hover:bg-[#f7f7ee] hover:text-[#434b34] duration-200'>
            Check out our amazing Restaurant
          </motion.button>
        </Link>
        <Link to='/contact'>
          <motion.button 
            initial={{ opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.2 }} 
            transition={{type: 'spring', duration: 0.8}}
            className=' bg-[#434b34] text-[#f7f7ee] px-5 py-10 lg:px-20 lg:py-20 font-[Italiana] text-[1.5rem] lg:text-4xl font-bold rounded-3xl hover:bg-[#f7f7ee] hover:text-[#434b34] duration-200'>
            Book your stay
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

const WrappedContact = transition(AboutUs)
export default WrappedContact