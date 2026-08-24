import React from 'react'
import logo from '../assets/images/logo.svg'
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        {/* This is the logo  */}
        <img src={logo} alt="Logo" className='inline-block' />

        <div>
            <div className='flex text-white items-center cursor-pointer '>
                <CiSettings />
                <p>Units</p>
                <IoIosArrowDown />
            </div>
        </div>
    </div>
  )
}

export default Header
