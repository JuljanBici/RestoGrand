import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import pointer from '../../public/images/pointer.png'
import map from '../../public/images/map.png'
import phone from '../../public/images/phone.png'
import email from '../../public/images/email.png'
import transition from './transition';
import { useLang } from './langContext';

const Contact = () => {

  const [isInView, setIsInView] = useState(false);

  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const { lang } = useLang();

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
      className="contact relative bg-[#151515] text-white overflow-hidden" 
      ref={topRef}
      onView={() => {
        setIsInView(true);
      }}
      onChange={(inView) => {
        setIsInView(inView);
      }}
      >
      <div className=' mt-32 sm:pl-20 pl-10'>
        <motion.p
        initial={{ opacity: 0, y: -100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true , amount:0.1 }} 
        transition={{type: 'spring', duration: 1.5, delay:0.3}}
        className=' sm:text-[5.5rem] text-[3rem]'> { lang ? 'Send Us a Message' : 'Na dergo nje Mesazh'} </motion.p>
        <div className=' flex flex-col sm:flex-row gap-32 w-[100%] sm:w-[70%] justify-between py-10 '>
          <motion.div
            className='border-t-[1px] w-[90%] border-gray-700 py-5'
            initial={{ opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true , amount:0.1 }} 
            transition={{type: 'spring', duration: 0.5, delay:1}}
            >
            <div className='flex items-center pb-5'>
              <p className=' '> { lang ? 'PHONE NUMBER' : 'NUMRI I TELEFONIT'} </p>
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
              <p className=' '> { lang ? 'ADDRESS' : 'ADRESA'} </p>
              <img className=' h-5 invert opacity-40 px-2' src={pointer} />
          </div>
            <p>Blv. Nënë Tereza</p>
            <a className=' pb-2' href='https://goo.gl/maps/jt7MM4fAvTf55VcS6' >Shengjin, Albania</a>
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
              <p className=' '>EMAIL</p>
              <img className=' h-5 invert opacity-40 px-2' src={email} />
            </div>
            <a href="mailto:julianbici14@gmail.com" className=' pb-2'>julianbici14@gmail.com</a>
          </motion.div>
        </div>
      </div>
      <div className=' flex md:flex-row flex-col py-20 sm:pl-20 pl-10 gap-24'>
      <div className="  md:w-[40%] w-[90%]">
          <p className="font-light pb-2 sm:text-xl"> { lang ? 'Get in touch or shoot us an email directly.' : 'Ose na shkruaj direkt ketu.'}  </p>
          <form ref={form} onSubmit={sendEmail} className=" z-10 space-y-8 ">
              <div className="z-30">
                <motion.input 
                  initial={{ opacity: 0, y: -50}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true , amount:0.1 }} 
                  transition={{type: 'spring', duration: 0.5, delay:0.3}}
                  name='from_email' type="email" id="email" className="shadow-sm bg-white bg-opacity-10 border border-gray-400 text-white text-sm rounded-lg placeholder:text-zinc-500 dark:placeholder:text-white focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none block w-full p-2.5 duration-150" placeholder="Email" required />
              </div>
              <div className="z-30">
                  <motion.input
                    initial={{ opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true , amount:0.1 }} 
                    transition={{type: 'spring', duration: 0.5, delay:0.6}}
                    name='from_subject' type="text" id="subject" className="block p-3 w-full text-sm text-white bg-white bg-opacity-10 rounded-lg border border-gray-400 shadow-sm placeholder:text-zinc-500 dark:placeholder:text-white focus:ring-primary-500 focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none duration-150" placeholder="Name" required />
              </div>
              <div className="sm:col-span-2 z-30">
                  <motion.textarea 
                    initial={{ opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true , amount:0.1 }} 
                    transition={{type: 'spring', duration: 0.5, delay:0.9}}
                    name='message' rows="6" className=" resize-none block p-2.5 w-full text-sm text-white bg-white bg-opacity-10 rounded-lg shadow-sm border border-gray-400 placeholder:text-zinc-500 dark:placeholder:text-white focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none duration-150" placeholder="Message"></motion.textarea>
              </div>
              <button type='submit' value='Send' className=" z-50 flex items-center justify-between rounded-2xl bg-[#c93510] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-opacity-70 duration-200 hover:cursor-pointer active:duration-75">
              { lang ? 'Send' : 'Dergo'} 
              </button>
            </form>
        </div>
        <div className='border-t-[1px] sm:w-[30%] w-[80%] border-gray-700 py-5'>
          <div className='flex items-center justify-center pb-5'>
              <p className=' '> { lang ? 'Opening Hours' : 'Oret e hapjes'} </p>
              <img className=' h-5 invert opacity-40 px-2' src={pointer} />
          </div>
          <div className=' flex justify-evenly'>
            <motion.div
              initial={{ opacity: 0, y: -50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true , amount:0.1 }} 
              transition={{type: 'spring', duration: 0.5, delay:0.6}}
            >
              <p> { lang ? 'Mon-Fri' : 'Hen-Pre'} </p>
              <p>08:00 22:00</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true , amount:0.1 }} 
              transition={{type: 'spring', duration: 0.5, delay:1.2}}
            >
              <p> { lang ? 'Sat-Sun' : 'Fundjave'} </p>
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