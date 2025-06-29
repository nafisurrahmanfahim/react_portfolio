import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1300px] z-50 px-2'>
            <div className="flex items-center justify-between bg-black rounded-full border border-orange py-3 px-6 shadow-md w-full relative">
                
                {/* Left: Logo */}
                <NavbarLogo />

                {/* Center: Links */}
                <div className={`hidden lg:flex items-center gap-6`}>
                    <NavbarLinks />
                </div>

                {/* Right: CTA Button */}
                <div className="hidden lg:block">
                    <NavbarBtn />
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden text-white border border-orange p-2 rounded-full ml-2'>
                    <RxHamburgerMenu size={24} />
                </button>

                {/* Mobile Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90%] max-w-[400px] 
                bg-black/80 backdrop-blur-md rounded-xl p-4 ${menuOpen ? 'block' : 'hidden'}`}>
                    <NavbarLinks />
                </div>

            </div>
        </nav>
    )
}

export default NavbarMain
