import React from 'react'
import Logo from '../assets/img/anipahe_logo.svg'
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <header className='w-full py-2'>
            {/* Logo and Navlinks */}
            <div className='flex md:flex-row flex-col justify-between gap-3 lg:gap-0 space-y-2.5'>
            <div className='flex gap-5 items-center'>
            {/* img */}
            <div>
                <img src={Logo} alt="anipahe_logo" className='max-w-[150px]' />
            </div>
            <ul className='text-white flex space-x-3'>
                <li className='lowercase cursor-pointer hover:bg-red-500 px-2 py-1'>Home</li>
                <li className='lowercase cursor-pointer hover:bg-red-500 px-2 py-1'>Anime</li>
                <li className='lowercase cursor-pointer hover:bg-red-500 px-2 py-1'>Queue</li>
            </ul>
            </div>
            {/* Search Bar */}
            <div className="w-full md:max-w-[250px] group focus-within:md:max-w-[400px] transition-all duration-300 relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-amber-50 w-full py-1 pl-8 outline-none ring focus:ring-red-500 "/>
                    <span className='text-gray-600 text-xl absolute top-1.5 left-2'><IoIosSearch/></span>
            </div>
            </div>
    </header>
  )
}

export default Header
