'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ExperienceItem {
    title: string
    company: string
    location: string
    date: string
    description: string[] | string
    type: 'work' | 'internship' | 'education'
    isPresent?: boolean
}

const experienceData: ExperienceItem[] = [
    {
        title: 'Software Developer Engineer',
        company: 'Zostel, The Zo World',
        location: 'Bengaluru & Gurugram, India',
        date: 'Present',
        description: [
            'Built and maintained admin dashboard with Next.js, React and Tailwind CSS for content management',
            'Developed responsive website frontend using Next.js 13 App Router with TypeScript and Tailwind CSS',
            'Implemented user authentication, role-based access control and content moderation using Next.js middleware',
        ],
        type: 'work',
        isPresent: true,
    },
    {
        title: 'Software Developer Engineer',
        company: 'Capitsign',
        location: 'Noida, India',
        date: 'Dec 2023',
        description: [
            'Built automated trading tools using Apache Flink, Go, and Next.js to automate FnO trading strategies',
            'Revamped user onboarding with real-time strategy recommendations using NodeJS, Lambda, and MongoDB',
            'Implemented comprehensive payment and subscription management system',
        ],
        type: 'work',
    },
    {
        title: 'Software Developer Intern',
        company: 'Capitsign',
        location: 'Noida, India',
        date: 'Sept 2022',
        description:
            'Developed options analytics tools for market trend analysis and strategy visualization',
        type: 'internship',
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Pylon Tech',
        location: 'Remote',
        date: 'Jan 2022',
        description:
            "Built government website focused on women's safety and crime prevention",
        type: 'internship',
    },
    {
        title: 'Software Developer Intern',
        company: 'Klimb.io',
        location: 'Mumbai, India',
        date: 'June 2022',
        description:
            'Developed cloud-based recruitment management solution for streamlined hiring processes',
        type: 'internship',
    },
    {
        title: 'Software Developer Intern',
        company: 'Beasenest',
        location: 'West Bengal, India',
        date: 'Oct 2021',
        description:
            'Led UI development for e-commerce platform specializing in daily necessities',
        type: 'internship',
    },
]

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
    const borderColor =
        item.type === 'internship'
            ? 'border-emerald-400 before:bg-emerald-400 after:bg-emerald-200'
            : item.isPresent
            ? 'border-indigo-500 before:bg-indigo-500 after:bg-indigo-200'
            : 'border-violet-400 before:bg-violet-400 after:bg-violet-200'

    return (
        <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`pb-8 border-l-2 ${borderColor} pl-6 ml-6 last:border-0 last:pb-0 relative before:content-[''] before:w-4 before:h-4 before:absolute before:-left-[9px] before:rounded-full before:shadow-lg after:content-[''] after:absolute after:-left-[5.5px] after:top-[4px] after:rounded-full after:shadow-md`}
        >
            <div className="text-primary font-semibold text-lg flex justify-start gap-6 items-center">
                {item.title}
                {item.isPresent && (
                    <span className="text-xs font-medium px-3 py-1 bg-indigo-500 bg-opacity-20 text-indigo-800 rounded-full animate-pulse">
                        Present
                    </span>
                )}
            </div>
            <div className="text-secondary text-sm mb-2 mt-2">
                {item.company} • {item.location}{' '}
                {!item.isPresent && `• ${item.date}`}
            </div>
            {Array.isArray(item.description) ? (
                <ul className="text-sm space-y-2 text-tertiary list-disc pl-4">
                    {item.description.map((desc, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                            {desc}
                        </motion.li>
                    ))}
                </ul>
            ) : (
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-sm text-tertiary"
                >
                    {item.description}
                </motion.p>
            )}
        </motion.li>
    )
}

const Experience = () => {
    return (
        <section id="experience" className="w-full px-6 md:px-32 py-16">
            <div className="max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-secondary text-lg font-medium mb-2">
                        EXPERIENCE
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">
                        My Professional Journey
                    </h1>
                </motion.div>

                <div className="flex justify-start items-center">
                    <div className="w-full">
                        <ul className="relative">
                            {experienceData.map((item, index) => (
                                <ExperienceCard key={index} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
