import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'

let projects = [
    {
        name: 'Vacations of Africa',
        year: '2023',
        align: 'right',
        image: '../public/website-img-1.jpg',
        link: '#',
    },
    {
        name: 'Moola App',
        year: '2023',
        align: 'left',
        image: '../public/website-img-2.webp',
        link: '#',
    },
    {
        name: 'Tourzania',
        year: '2024',
        align: 'right',
        image: '../public/website-img-3.jpg',
        link: '#',
    },
    {
        name: 'Bank of Luck',
        year: '2025',
        align: 'left',
        image: '../../public/website-img-4.jpg',
        link: '#',
    },
]

const ProjectsMain = () => {
    return (
        <div id='projects' className='max-w-[1200px] mx-auto px-4'>
            <ProjectsText />
            <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
                {projects.map((item, index)=> {
                    return <SingleProjects key={index} name={item.name} year={item.year} align={item.align} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default ProjectsMain