import React from 'react'

const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
    return (
        <ul className='flex flex-col lg:flex-row gap-4 lg:gap-6 text-white text-lg font-medium items-center'>
            {links.map((item, index) => (
                <li key={index} className='group'>
                    <a href={`#${item.section}`} className='hover:text-cyan transition-colors'>
                        {item.link}
                    </a>
                    <div className="h-[1px] w-0 bg-cyan group-hover:w-full transition-all duration-500 mx-auto"></div>
                </li>
            ))}
        </ul>
    )
}

export default NavbarLinks
