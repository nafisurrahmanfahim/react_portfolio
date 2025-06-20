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

const AllSkills = () => {
    return (
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                return <SingleSkills key={index} text={item.skill} imgSvg={<item.icon/>} />
            })}
        </div>
    )
}

export default AllSkills