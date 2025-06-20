import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 justify-center md:text-left sm:text-center'>
        <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>Front-End Web Developer</h2>
        <h1 className='md:text-[2.4rem] lg:text-6xl sm:text-4xl font-bold font-josefin text-orange'>Nafisur Rahman</h1>
        <p className='text-lg mt-4 text-white'>Crafting Modern, Responsive & Scalable Web Experiences with <br/> 3+ Years of Passion-Driven Development
        </p>
    </div>
  )
}

export default HeroText