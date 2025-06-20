import React from 'react'
import Container from '../Container'

const HeroGradient = () => {
  return (
    <div>
      <Container>
        <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 -z-10 opacity-50 lg:animate-ping sm:animate-none"></div>
        <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50"></div>
      </Container>
    </div>
  )
}

export default HeroGradient