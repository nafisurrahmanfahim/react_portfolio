import React from 'react'

const SingleExperience = ({ experience }) => {
  return (
    <div className='md:h-[350px] md:w-[240] sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGray'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>
        })}
      </ul>
    </div>
  )
}

export default SingleExperience