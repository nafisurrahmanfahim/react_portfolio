import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'
import Container from '../Container'

const AboutMeMain = () => {
    return (
        <Container>
        <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1300px] mx-auto mt-[100px] justify-between items-center'>
            <div className="">
                <AboutMeText />
            </div>
            <div className="">
                <AboutMeImage />
            </div>
        </div>
        </Container>
    )
}

export default AboutMeMain