import { Link } from "react-router-dom"
import logoImg from "../../public/images/logoImg.png"
import { useLang } from './langContext';

const Footer = () => {

  const { lang, toggleEng , toggleAlb } = useLang();

  return (
    <div className="relative h-screen bg-[#151515] flex flex-col justify-between pt-32 pb-3 sm:pb-0 text-white">
      <p className=" sm:h-[80%] w-full font-[Italiana] flex items-center justify-center sm:p-20">
        <img src={logoImg}/>
      </p>
      <div className=" sm:h-[15%] sm:flex items-center border-t-[1px] border-gray-700 mx-5 sm:mx-10 justify-around">
        <div className=' flex sm:flex-row flex-col items-center text-[0.9rem] gap-5 py-5 font-normal'>
        <Link to='/' className=" cursor-pointer px-3 pb-1">{lang ? 'HOME' : 'KREU'}</Link>
          <Link to='/aboutUs' className=" cursor-pointer px-3 pb-1">{lang ? 'ABOUT US' : 'RRETH NESH'}</Link>
          <Link to='/menu' className=" cursor-pointer px-3 pb-1">MENU</Link>
          <Link to='/contact' className=" cursor-pointer px-3 pb-1">{lang ? 'CONTACT' : 'KONTAKT'}</Link>
          <div className=" flex px-6 pb-1 font-bold">
            <p onClick={toggleAlb} className=" cursor-pointer hover:text-red-500 transition-[.3s]">AL</p>/
            <p onClick={toggleEng} className=" cursor-pointer hover:text-blue-500 transition-[.3s]">EN</p>
          </div>
        </div>
        <div className=" sm:flex sm:items-center sm:justify-between">
          <span className="text-sm pr-3 text-gray-500 sm:text-center">© 2023 RestoGrand™. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <p href="" className="text-gray-500 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
                  <span className="sr-only">Facebook page</span>
              </p>
              <a href="https://www.instagram.com/julbici/" className="text-gray-500 pb-2 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <p href="" className="text-gray-500 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
                  <span className="sr-only">TikTok page</span>
              </p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Footer