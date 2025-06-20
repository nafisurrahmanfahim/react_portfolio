import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import SingleSkills from './SingleSkills';

let skills = [
    {
        skill: 'HTML',
        icon: FaHtml5,
    },
    {
        skill: 'CSS',
        icon: FaCss3Alt,
    },
    {
        skill: 'JavaScript',
        icon: FaJs,
    },
    {
        skill: 'React',
        icon: FaReact,
    },
    {
        skill: 'Node.js',
        icon: FaNodeJs,
    },
    {
        skill: 'redux',
        icon: SiRedux,
    },
    {
        skill: 'Tailwind CSS',
        icon: RiTailwindCssFill, // Using the same icon for simplicity
    },
    {
        skill: 'Git',
        icon: FaGitAlt, // Using a placeholder icon for Git
    },
    {
        skill: 'Bootstrap',
        icon: FaBootstrap, // Using the same icon for simplicity
    },
    {
        skill: 'next.js',
        icon: RiNextjsFill, // Using the React icon as a placeholder
    }
];

const AllSkillsSm = () => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
            {skills.map((item, index)=> {
                return <div key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-orange'/>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </div>
            })}
        </div>
    )
}

export default AllSkillsSm