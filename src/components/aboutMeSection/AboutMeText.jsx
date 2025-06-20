import React from 'react'

const AboutMeText = () => {
    return (
        <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
            <h2 className='text-6xl text-cyan md-10'>About Me </h2>
            <p className='text-white'>I’m Nafisur Rahman, a frontend web developer with a passion for clean code and creative interfaces. I specialize in React and modern frontend tools like Tailwind CSS to build responsive, high-performance websites.
                With 3+ years of experience, I’ve helped clients turn design files into fully functional, SEO-friendly, and user-focused websites. I love staying up-to-date with the latest tech and continuously improving my craft to deliver better solutions.</p>
                <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black'>My Projects</button>
        </div>
    )
}

export default AboutMeText