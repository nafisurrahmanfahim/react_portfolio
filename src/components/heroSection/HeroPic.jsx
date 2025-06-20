import React from 'react'
import Profile from '../../assets/profile.png'
import { FiHexagon } from "react-icons/fi";
const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src={Profile} alt="" className='max-h-[450px] w-auto rounded-full'/>
        <div className="absolute -z-10 flex justify-center items-center animate-pulse">
            <FiHexagon className='md:h-[90%] sm:h-[120%] min-h-[600px] sm:hidden md:w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </div>
  )
}

export default HeroPic