import React from 'react'
import laptop from '../../assets/subSkills.jpg'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-lightGray relative'>
        <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full'></div>
        <img src={laptop} alt="sub skills img" />
    </div>
  )
}

export default SubSkills