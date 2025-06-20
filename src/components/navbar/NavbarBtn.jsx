import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <div>
        <button className='px-4 py-2 rounded-full md:text-xl sm:text-[16px] font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:shadow-cyanShadow hover:border-orange hover:scale-110 transition-all duration-500'>Hire Me 
          <div className="sm:hidden md:block">
            <FiArrowDownRight/>
          </div>
        </button>
    </div>
  )
}

export default NavbarBtn