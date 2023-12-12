'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import MannoteLogo from '@/public/Mannotelogo.jpg'
import { ProjectProps } from '@/typings'

type Props = {}

const projects: ProjectProps[] = [
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription: "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription: "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription: "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription: "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    }  ,
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription: "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    }  ,
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription: "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    }  
]

const Projects = (props: Props) => {
    const [selectedProject, setSelectedProjet] = useState(-1)
    
    return (
        <section id='projects' className="min-h-[70vh] w-full md:px-32 pb-10">
            <div>
                <h1 className="text-dark text-3xl">
                    These are some of my Project
                </h1>
            </div>
            {selectedProject !== -1 && (
                <ProjectViewer
                    project={projects[selectedProject]}
                    closehandler={setSelectedProjet}
                />
            )}
            <div className="projectContainer mt-10">
                {projects.map((project,index) => (
                    <Project
                        index={index}
                        project={project}
                        projectSelectHandler={setSelectedProjet}
                    />
                ))}
            </div>
        </section>
    )
}

const ProjectViewer = (props: {project :ProjectProps, closehandler:Function}) => {
    return (
        <section className="w-full bg-extraLight h-[50vh] mt-5 grid grid-cols-3 p-8 gap-5 relative">
            <button className='absolute top-5 right-5' onClick={() => props.closehandler(-1)}>Close</button>
            <div className="flex items-center">
                <Image
                    className=""
                    src={props.project.image}
                    width={400}
                    height={400}
                    alt={props.project.name}
                />
            </div>
            <div className='flex flex-col justify-center ml-5 col-span-2'>
            <h2 className='text-xl md:text-2xl mb-2 md:mb-2 text-dark-secondary'>Personal</h2>
            <h1 className='text-3xl md:text-5xl font-bold mb-2'>{props.project.name}</h1>
            <p className='text-sm text-light-secondary mb-5'>{props.project.longDescription}</p>
            <div className='text-sm space-x-10'>
                <button className='bg-dark text-white px-5 py-2 border-none rounded-md'>Github</button>
                <button className='text-dark '>Visit</button>
            </div>
            </div>
        </section>
    )
}

const Project = (props: {project:ProjectProps, projectSelectHandler:Function ,index:number}) => {
    return (
        <div onClick={() => props.projectSelectHandler(props.index)} className="group h-full w-full border border-gray-200 rounded-md text-dark relative cursor-pointer">
            <div className="hidden group-hover:flex h-full w-full absolute z-10 bg-light opacity-10" />
            <div className="bg-white m-3">
                <Image
                    className=""
                    src={props.project.image}
                    width={300}
                    height={300}
                    alt={props.project.name}
                />
            </div>
            <div className="text-dark px-5 py-2 flex justify-between items-center">
                <h1 className="text-base font-medium">{props.project.name}</h1>
                <span className="text-[10px] text-light-secondary px-2 py-1 rounded-full font-medium inline-flex gap-5">
                    Aug` 23
                </span>
            </div>
        </div>
    )
}
export default Projects
