import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { RxHamburgerMenu } from "react-icons/rx";
import Container from '../Container';

const NavbarMain = () => {
    let [menuOpen, setMenuOpen] = useState(false);
    let toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <Container>
        <nav className='py-4 md:max-w-[1300px] sm:max-w-[700px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
            <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0
            .5px] border-orange">
                <NavbarLogo />
                <div className={`${menuOpen ? 'sm:block': 'sm:hidden'} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div>
            <div className="flex lg:hidden p-6 sm:black items-center justify-center rounded-full border-[0.5px] border-lightBrown bg-black">
                <button className='text-2xl p-3 border-orange border-[1px] rounded-full text-white' onClick={toggleMenu}>
                    <RxHamburgerMenu />
                </button>
            </div>
        </nav>
        </Container>
    )
}

export default NavbarMain