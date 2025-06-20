import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa6";

let experience = [
  {
    job: 'Front-End Developer',
    company: 'Alex Apps',
    date: '2023 - Present',
    responsibilities: [
      'Implementing reusable components', 'Participating in large scale application', 'Generating new ideas for better user experience',
    ],
  },
  {
    job: 'Courses Instructor',
    company: 'Creative It',
    date: '2023 - Present',
    responsibilities: [
      'Teaching HTML, CSS, JavaScript and React', 'Help students wite their assignments and grade them weekly', 'Providing support for students through learning journey',
    ],
  },
  {
    job: 'Freelance Developer',
    company: 'Upwork',
    date: 'present',
    responsibilities: [
      'Building websites for clients', 'Creating custom components and features', 'Ensuring high quality code and performance',
    ],
  }
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between gap-6 mt-12'>
      {experience.map((experience, index) => {
        return (
        <>
         <SingleExperience key={index} experience={experience} />
          {index < 2 ? (<FaArrowRight className='text-9xl text-orange lg:block sm:hidden'/>) : ('')}
        </>
        )
      })}
    </div>
  )
}

export default AllExperience