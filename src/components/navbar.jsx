import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { IoIosRestaurant } from "react-icons/io";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHamburgerHovered, setIsHamburgerHovered] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const hamburgerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY <= 50;
      setIsVisible(top);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerHover = (isHovered) => {
    setIsHamburgerHovered(isHovered);
  };

  const handleHamburgerToggle = () => {
    setIsHamburgerOpen((prevState) => !prevState);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className='fixed z-50 text-[#434b34] dark:text-[#f7f7ee] duration-500 ease-in-out w-full flex items-center justify-between px-10 py-7'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{ duration: 1 , delay: 2.5 }}
      >
        <Link className=" flex gap-2 items-center" to='/'>
          <IoIosRestaurant className=" sm:text-3xl text-4xl" />
          <p className={` font-[Italiana] font-bold text-3xl ${!isMobile ? "" : "hidden" } duration-200`}>RestoGrand</p>
        </Link>
      </motion.div>
      {!isMobile && (
      <div
        onMouseEnter={() => handleHamburgerHover(true)}
        onMouseLeave={() => handleHamburgerHover(false)}
        className={`group flex items-center text-[0.9rem] gap-5 font-normal`}>
        <div
          className={`flex gap-5 ${
            isVisible || isHamburgerHovered ? "opacity-100" : "opacity-0"
          } duration-300 navbar-item`}
        >
          <motion.div
            initial={{ opacity: 0, y: -75}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 , delay: 2.8 }}
          >
            <Link to='/aboutUs' className="cursor-pointer px-3 pb-1">ABOUT US</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -75}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 , delay: 3.1 }}
          >
            <Link to='/menu' className="cursor-pointer px-3 pb-1">MENU</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -75}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5 , delay: 3.4 }}
          >
            <Link to='/contact' className="cursor-pointer px-3 pb-1">CONTACT</Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ duration: 1 , delay: 2 }}
            className="flex px-6 pb-1 font-bold"
          >
            <p className="cursor-pointer hover:text-red-500">AL</p>/
            <p className="cursor-pointer hover:text-blue-500">EN</p>
          </motion.div>
        </div>
        <div
          ref={hamburgerRef}
          className={` flex flex-col items-end space-y-[4px] pb-1 cursor-pointer ${
            isVisible ? "opacity-0" : "opacity-100"
          } duration-300 navbar-item`}
        >
          <span className="block w-5 h-[1.3px] bg-[#272411] dark:bg-white group-hover:w-3 duration-300"></span>
          <span className="block w-5 h-[1.3px] bg-[#272411] dark:bg-white"></span>
          <span className="block w-5 h-[1.3px] bg-[#272411] dark:bg-white group-hover:w-3 duration-300"></span>
        </div>
        </div>
        )}
        {isMobile && (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{ duration: 1 , delay: 2 }}
          onClick={isMobile ? handleHamburgerToggle : undefined}
          className='group flex flex-col items-end space-y-[4px] pb-1 cursor-pointer duration-300 navbar-item'
        >
          <span className="block w-5 h-[1.3px] bg-[#272411] dark:bg-white group-hover:w-3 duration-300"></span>
          <span className="block w-5 h-[1.3px] bg-[#272411] dark:bg-white"></span>
          <span className="block w-5 h-[1.3px] bg-[#272411] dark:bg-white group-hover:w-3 duration-300"></span>
        </motion.div>
        )}
        {isMobile && (
            <div id={isHamburgerOpen ? '' : 'active'}  className='flex flex-col z-50 fixed top-0 right-0 bottom-0 w-full justify-center bg-[#151515] overflow-hidden duration-150 ease-out'>
              <div className=' absolute top-7 left-7 p-3' >
                <IoIosRestaurant className=" text-white text-3xl" />
              </div>
              <button onClick={handleHamburgerToggle} className=' absolute top-7 right-7 p-3' >
                <GrClose className=" invert text-xl" />
              </button>
              <motion.div 
                initial={{ opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false , amount:0.05 }} 
                transition={{ duration: 0.5  }}
                className="text-white text-xl pb-3 mb-8 pl-10"
              >
                <Link onClick={handleHamburgerToggle} to="/" >
                  HOME
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false , amount:0.05 }} 
                transition={{ duration: 0.5  }}
                className="text-white text-xl pb-3 mb-8 pl-10"
              >
                <Link onClick={handleHamburgerToggle} to="/aboutUs" >
                  ABOUT US
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false , amount:0.05 }} 
                transition={{ duration: 0.5 , delay: 0.3 }}
                className="text-white text-xl pb-3 mb-8 pl-10"
              >
                <Link onClick={handleHamburgerToggle} to="/menu" >
                  MENU
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false , amount:0.05 }} 
                transition={{ duration: 0.5 , delay: 0.6 }}
                className="text-white text-xl pb-3 mb-8 pl-10"
              >
                <Link onClick={handleHamburgerToggle} to="/contact">
                  CONTACT
                </Link>
              </motion.div>
              <div className="flex font-bold text-xl pl-10">
              <motion.p 
                initial={{ opacity: 0 , x: 0}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false , amount:0.05 }} 
                transition={{ duration: 0.5 , delay: 0.9 }} 
                onClick={handleHamburgerToggle} 
                className="text-white mr-4 cursor-pointer"
                >
                  AL
                </motion.p>/
                <motion.p 
                initial={{ opacity: 0 , x: 0}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false , amount:0.05 }} 
                transition={{ duration: 0.5 , delay: 1.2 }} 
                onClick={handleHamburgerToggle} 
                className="text-white ml-4 cursor-pointer"
                >
                  EN
                </motion.p>
              </div>
            </div>
          )}
    </div>
  );
};

export default Navbar;