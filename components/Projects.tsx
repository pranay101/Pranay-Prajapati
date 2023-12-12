'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import MannoteLogo from '@/public/Mannotelogo.jpg'
import { ProjectProps } from '@/typings'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {}

const projects: ProjectProps[] = [
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'BeatLedger',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
    },
]

// Props for Project component
interface ProjectComponentProps {
    project: ProjectProps
    index: number
    projectSelectHandler: (index: number) => void
}

// Props for ProjectViewer component
interface ProjectViewerComponentProps {
    project: ProjectProps
    closeHandler: () => void
}

const Projects = (props: Props) => {
    const [selectedProject, setSelectedProject] = useState(-1)

    const handleProjectSelect = (index: number) => {
        setSelectedProject(index)
    }

    return (
        <motion.section
            id="projects"
            className="min-h-[70vh] w-full md:px-32 pb-10"
        >
            <motion.h1
                className="text-dark text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                These are some of my Projects
            </motion.h1>
            {selectedProject !== -1 && (
                <AnimatePresence>
                    <motion.div
                       
                        
                    >
                        <ProjectViewer
                            key={projects[selectedProject].name}
                            project={projects[selectedProject]}
                            closeHandler={() => setSelectedProject(-1)}
                        />
                    </motion.div>
                </AnimatePresence>
            )}
            <motion.div className="projectContainer mt-10">
                {projects.map((project, index) => (
                    <Project
                        key={project.name + index}
                        project={project}
                        index={index}
                        projectSelectHandler={handleProjectSelect}
                    />
                ))}
            </motion.div>
        </motion.section>
    )
}

const ProjectViewer = ({
    project,
    closeHandler,
}: ProjectViewerComponentProps) => {
    return (
        <motion.section
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1 ,y:0}}
        // exit={{ opacity: 0 , y: 100}}
        // transition={{duration: 1}}
            variants={{
                open: { opacity: 1},
                closed: { opacity: 0, y: 20 },
            }}
            
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            className="w-full bg-extraLight h-[50vh] mt-5 grid grid-cols-3 p-8 gap-5 relative"
        >
            <motion.button
                variants={{
                    hover: { scale: 1.1 },
                    tap: { scale: 0.9 },
                }}
                whileHover="hover"
                whileTap="tap"
                className="absolute top-5 right-5"
                onClick={closeHandler}
            >
                Close
            </motion.button>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex items-center"
            >
                <Image
                    className=""
                    src={project.image}
                    width={400}
                    height={400}
                    alt={project.name}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                className="flex flex-col justify-center ml-5 col-span-2"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-xl md:text-2xl mb-2 md:mb-2 text-dark-secondary"
                >
                    Personal
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-3xl md:text-5xl font-bold mb-2"
                >
                    {project.name}
                </motion.h1>
                <p className="text-sm text-light-secondary mb-5">
                    {project.longDescription}
                </p>
                <div className="text-sm space-x-10">
                    <button className="bg-dark text-white px-5 py-2 border-none rounded-md">
                        Github
                    </button>
                    <button className="text-dark ">Visit</button>
                </div>
            </motion.div>
        </motion.section>
    )
}

const Project = ({
    project,
    index,
    projectSelectHandler,
}: ProjectComponentProps) => {
    return (
        <motion.div
            onClick={() => projectSelectHandler(index)}
            key={project.name + index}
            variants={{
                hover: { scale: 1.1, opacity: 1 },
                rest: { scale: 1, opacity: 0.7 },
            }}
            whileHover="hover"
            className="group h-full w-full border border-gray-200 rounded-md text-dark relative cursor-pointer"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="hidden group-hover:flex h-full w-full absolute z-10 bg-light"
            />
            <div className="bg-white m-3">
                <Image
                    className=""
                    src={project.image}
                    width={300}
                    height={300}
                    alt={project.name}
                />
            </div>
            <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="text-dark px-5 py-2 flex justify-between items-center"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-base font-medium"
                >
                    {project.name}
                </motion.h1>
                <span className="text-[10px] text-light-secondary px-2 py-1 rounded-full font-medium inline-flex gap-5">
                    Aug` 23
                </span>
            </motion.div>
        </motion.div>
    )
}

export default Projects
