'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import MannoteLogo from '@/public/Mannotelogo.jpg'
import GoLogo from '@/public/GoLang.png'
import VocabookLogo from '@/public/Vocabook.png'
import { ProjectProps } from '@/typings'
import { AnimatePresence, motion } from 'framer-motion'

const projects: ProjectProps[] = [
    {
        name: 'MannNote',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            "Mann-Note is more than just a productivity tool; it's a commitment to helping you realize your full potential. Our mission is to empower individuals and teams to unlock their creativity, streamline their workflows, and achieve their goals with ease. We're here to simplify the complexities of modern life, making productivity a natural part of your daily routine",
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: MannoteLogo,
        date: 'Aug 2023',
        type: 'Personal',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    },
    {
        name: 'Go-Image-Shape-Transformer',
        description: 'Empower Your Productivity: Where Notes and Plans Unite!',
        longDescription:
            'This project is a web server built in Go that allows users to upload an image and then guides them through a selection process via a primitive Command-Line Interface (CLI). Users can interact with different modes and options for processing the uploaded image.',
        github: 'https://github.com/pranay101/Mannote',
        link: 'https://mannote.vercel.app/',
        image: GoLogo,
        date: 'Dec 2024',
        type: 'Personal',
        techStack: ['Go', 'CLI'],
    },
    {
        name: 'Block-QR-Code-Generator',
        description: "BlockQR: Your Vehicle's Data Guardian",
        longDescription:
            'The QR Code Generator for Vehicles is intended to be a user-friendly platform, accessible as either a web application or a mobile app. Its primary purpose is to allow vehicle owners to generate QR codes containing their vehicle information',
        date: 'Sept 2023',
        type: 'Personal',
        techStack: ['React', 'Solidity', 'hardhat'],
    },
    {
        name: 'Wordle',
        description: 'Wordle: A Word Game',
        longDescription:
            'Wordle is a word game where you have to guess the word in 6 tries. You can play with your friends or family.',
        github: 'https://github.com/pranay101/Wordle',
        link: 'https://wordle-theta-two.vercel.app/',
        date: 'Dec 2023',
        type: 'Personal',
        techStack: ['React', 'CSS'],
    },
    {
        name: 'Brain-Cancer-Detection',
        description: 'Brain Cancer Detection',
        longDescription:
            'This is a web application for classifying brain tumor images using deep learning models. The application provides an interface to upload an MRI image and predicts the type of brain tumor present in the image. The two supported models are ResNet and DenseNet.',
        github: 'https://github.com/pranay101/Brain-Cancer-Detection',
        link: 'https://brain-cancer-detection.vercel.app/',
        date: 'Jan 2023',
        type: 'Team',
        techStack: ['Pytorch', 'Flask'],
    },
    {
        name: 'Vocabook',
        description: 'Vocabook: Your Personal Vocabulary Trainer',
        longDescription:
            'Vocabook is a web application that allows users to create their own vocabulary books and add words to them. The application provides an interface to add words to the book and then the user can review the words in the book.',
        github: 'https://github.com/pranay101/Vocabook',
        link: '',
        image: VocabookLogo,
        date: 'Dec 2023',
        type: 'Personal',
        techStack: ['NodeJS', 'MongoDB', 'pug'],
    },
]

interface ProjectCardProps {
    project: ProjectProps
    isExpanded: boolean
    onToggle: () => void
}

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null)

    return (
        <section id="projects" className="w-full px-6 md:px-32 py-16">
            <div className="max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-secondary text-lg font-medium mb-2">
                        PROJECTS
                    </h2>
                    <h1 className="text-4xl font-bold text-primary">
                        My Creative Portfolio
                    </h1>
                </div>

                <div className="">
                    <ul className="space-y-6">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                isExpanded={expandedProject === project.name}
                                onToggle={() =>
                                    setExpandedProject(
                                        expandedProject === project.name
                                            ? null
                                            : project.name
                                    )
                                }
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project, isExpanded, onToggle }: ProjectCardProps) => {
    const borderColor = project.type === 'Personal' ? 'emerald-500' : 'blue-500'

    return (
        <motion.li
            layout="position"
            className={`relative before:content-[''] 
                 before:absolute before:-left-[9px] 
                before:rounded-full before:shadow-lg transition-all duration-300 hover:transform border-b pb-4 border-gray-100`}
        >
            <motion.div
                layout="position"
                className="cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                        {project.name}
                    </h3>
                    <span
                        className={`text-xs font-medium px-3 py-1 
                        ${
                            project.type === 'Personal'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-blue-100 text-blue-700'
                        } 
                        rounded-full`}
                    >
                        {project.type}
                    </span>
                </div>

                <div className="text-secondary text-sm mb-2">
                    {project.date}
                </div>

                <AnimatePresence mode="wait">
                    {isExpanded ? (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 overflow-hidden"
                        >
                            {project.image && (
                                <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="md:col-span-2">
                                <p className="text-tertiary mb-4">
                                    {project.longDescription}
                                </p>
                                <div className="flex space-x-4">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-opacity-90"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View on GitHub
                                        </motion.a>
                                    )}
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline text-sm flex items-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Live Demo →
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.p
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-tertiary"
                        >
                            {project.description}
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.li>
    )
}

export default Projects
