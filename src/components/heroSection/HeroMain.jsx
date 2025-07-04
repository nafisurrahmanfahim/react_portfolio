import React from 'react'
import HeroPic from './HeroPic'
import HeroText from './HeroText'
import HeroGradient from './HeroGradient'
import Container from '../Container'

const HeroMain = () => {
  return (
    <Container>
      <div className='pt-40 pb-16'>
        <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
          <HeroText />
          <HeroPic />
          <HeroGradient />
        </div>
      </div>
    </Container>
  )
}

export default HeroMain