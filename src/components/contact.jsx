import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import pointer from '../images/pointer.png'
import map from '../images/map.png'
import phone from '../images/phone.png'
import email from '../images/email.png'
import transition from './transition';

const Contact = () => {

  const [isInView, setIsInView] = useState(false);

  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setIsInView(topInView);
    if (topInView) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [topInView])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gxtgr5q', 'template_hcdk6aq', form.current, 'eYZsO9dMjjjc0ww4u')
      .then((result) => {
          console.log(result.text);
          alert('Message sent succesfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <motion.div 
      className="relative bg-[#151515] text-white overflow-hidden" 
      ref={topRef}
      onView={() => {
        setIsInView(true);
      }}
      onChange={(inView) => {
        setIsInView(inView);
      }}
      >
      <img className="absolute h-[150vh] top-0 right-0 opacity-10" src={map} ></img>
      <img className=' invert h-8 absolute top-[15rem] right-[18rem]' src={pointer} />
      <div className=' mt-32 sm:pl-20 pl-10'>
        <motion.p
        initial={{ opacity: 0, y: -100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true , amount:0.1 }} 
        transition={{type: 'spring', duration: 1.5, delay:0.3}}
        className=' sm:text-[5.5rem] text-[3rem]'> Send Us a Message </motion.p>
        <div className=' flex flex-col sm:flex-row gap-32 w-[100%] sm:w-[70%] justify-between py-10 '>
          <motion.div
            className='border-t-[1px] w-[90%] border-gray-700 py-5'
            initial={{ opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.1 }} 
            transition={{type: 'spring', duration: 0.5, delay:1}}
            >
            <div className='flex items-center pb-5'>
              <p className=' text-gray-700'>PHONE NUMBER</p>
              <img className=' h-5 invert opacity-40 px-2' src={phone} />
            </div>
            <a className=' pb-2'>068 999 9999</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.1 }} 
            transition={{type: 'spring', duration: 0.5, delay:1.3}} 
            className='border-t-[1px] w-[90%] border-gray-700 py-5'
            >
          <div className='flex items-center pb-5'>
              <p className=' text-gray-700'>ADDRESS</p>
              <img className=' h-5 invert opacity-40 px-2' src={pointer} />
          </div>
            <p>Blv. Nënë Tereza</p>
            <p>Shengjin, Albania</p>
          </motion.div>
        </div>
        <div className=' flex gap-32 w-[90%]  justify-between py-10 '>
          <motion.div 
            className='border-t-[1px] w-[90%] border-gray-700 py-5'
            initial={{ opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.1 }} 
            transition={{type: 'spring', duration: 0.5, delay:1.6}}
            >
            <div className='flex items-center pb-5'>
              <p className=' text-gray-700'>EMAIL</p>
              <img className=' h-5 invert opacity-40 px-2' src={email} />
            </div>
            <a className=' pb-2'>julianbici14@gmail.com</a>
          </motion.div>
        </div>
      </div>
      <div className=' flex md:flex-row flex-col py-20 sm:pl-20 pl-10 gap-24'>
      <div className="  md:w-[40%] w-[90%]">
          <p className="font-light pb-2 sm:text-xl">Get in touch or shoot us an email directly. </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 ">
              <div className="z-30">
                <motion.input 
                  initial={{ opacity: 0, y: -50}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true , amount:0.1 }} 
                  transition={{type: 'spring', duration: 0.5, delay:0.3}}
                  name='from_email' type="email" id="email" className="shadow-sm bg-transparent border border-gray-400 text-white text-sm rounded-lg placeholder:text-zinc-500 dark:placeholder:text-white focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none block w-full p-2.5 " placeholder="Email" required />
              </div>
              <div className="z-30">
                  <motion.input
                    initial={{ opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true , amount:0.1 }} 
                    transition={{type: 'spring', duration: 0.5, delay:0.6}}
                    name='from_subject' type="text" id="subject" className="block p-3 w-full text-sm text-white bg-transparent rounded-lg border border-gray-400 shadow-sm placeholder:text-zinc-500 dark:placeholder:text-white focus:ring-primary-500 focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none" placeholder="Name" required />
              </div>
              <div className="sm:col-span-2 z-30">
                  <motion.textarea 
                    initial={{ opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true , amount:0.1 }} 
                    transition={{type: 'spring', duration: 0.5, delay:0.9}}
                    name='message' rows="6" className=" resize-none block p-2.5 w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-gray-400 placeholder:text-zinc-500 dark:placeholder:text-white focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none" placeholder="Message"></motion.textarea>
              </div>
              <button type='submit' value='Send' className=" z-50 flex items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                Send
              </button>
            </form>
        </div>
        <div className='border-t-[1px] sm:w-[30%] w-[80%] border-gray-700 py-5'>
          <div className='flex items-center justify-center pb-5'>
              <p className=' text-gray-700'>Opening Hours</p>
              <img className=' h-5 invert opacity-40 px-2' src={pointer} />
          </div>
          <div className=' flex justify-evenly'>
            <motion.div
              initial={{ opacity: 0, y: -50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true , amount:0.1 }} 
              transition={{type: 'spring', duration: 0.5, delay:0.6}}
            >
              <p>Mon-Fri</p>
              <p>08:00 22:00</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true , amount:0.1 }} 
              transition={{type: 'spring', duration: 0.5, delay:1.2}}
            >
              <p>Sat-Sun</p>
              <p>24hr</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const WrappedContact = transition(Contact)
export default WrappedContact