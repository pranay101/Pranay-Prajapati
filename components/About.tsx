'use client'

import { motion } from 'framer-motion'

interface InterestCardProps {
    icon: string
    iconColor: string
    title: string
    description: string
    link?: {
        url: string
        text: string
        icon: string
        bgColor: string
        textColor: string
    }
}

const interests: InterestCardProps[] = [
    {
        icon: 'fa-solid fa-music',
        iconColor: 'text-green-500',
        title: 'Music',
        description:
            "Can't function properly without music! Currently vibing to indie rock and lo-fi beats while coding 🎵",
        link: {
            url: 'https://open.spotify.com/user/ud0dps2s5wxn1cgrvls3gub8a?si=99069f85f32b48b6',
            text: 'Checkout my Spotify',
            icon: 'fa-brands fa-spotify',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700',
        },
    },
    {
        icon: 'fa-solid fa-coffee',
        iconColor: 'text-amber-800',
        title: 'Coffee',
        description: 'Getting curious about coffee and brewing methods.',
    },
    {
        icon: 'fa-solid fa-guitar',
        iconColor: 'text-orange-500',
        title: 'Guitar',
        description:
            'Recently started learning guitar. Still figuring out the basics but enjoying every chord! 🎸',
    },
    {
        icon: 'fa-brands fa-pinterest',
        iconColor: 'text-red-600',
        title: 'Pinterest',
        description:
            'My digital mood board paradise! Collecting inspiration for everything from UI designs to aesthetics ✨',
        link: {
            url: 'https://in.pinterest.com/pranay267/',
            text: 'Follow my boards',
            icon: 'fa-brands fa-pinterest',
            bgColor: 'bg-red-50',
            textColor: 'text-red-600',
        },
    },
    {
        icon: 'fa-solid fa-book',
        iconColor: 'text-blue-600',
        title: 'Reading',
        description:
            'Currently diving into "Man\'s Search for Meaning" and exploring novels to improve focus.',
        link: {
            url: 'https://www.goodreads.com/',
            text: 'My Reading List',
            icon: 'fa-solid fa-book-open',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
        },
    },
    {
        icon: 'fa-solid fa-dumbbell',
        iconColor: 'text-green-600',
        title: 'Fitness',
        description:
            'Passionate about staying active through cycling and calisthenics.',
    },
    {
        icon: 'fa-solid fa-user',
        iconColor: 'text-purple-600',
        title: 'Inspiration',
        description:
            "Deeply inspired by Andrej Karpathy's work in AI and his ability to explain complex concepts simply.",
    },
    {
        icon: 'fa-solid fa-ellipsis',
        iconColor: 'text-gray-600',
        title: 'More to Explore...',
        description:
            'Always exploring new interests and hobbies. Stay tuned for more updates! 🚀',
    },
]

const InterestCard = ({
    icon,
    iconColor,
    title,
    description,
    link,
}: InterestCardProps) => {
    return (
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-all group">
            <motion.div
                className="flex items-center gap-2 mb-2"
                whileHover={{ scale: 1.02 }}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                }}
            >
                <i
                    className={`${icon} w-6 h-6 ${iconColor} group-hover:scale-110 transition-transform`}
                ></i>
                <h4 className="text-lg font-bold text-primary">{title}</h4>
            </motion.div>
            <motion.p
                className="text-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                {description}
            </motion.p>
            {link && (
                <motion.div
                    className="flex gap-2 mt-2 text-xs text-tertiary"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    <span
                        className={`px-4 py-2 ${link.bgColor} ${link.textColor} rounded-full`}
                    >
                        <a
                            href={link.url}
                            target="_blank"
                            className="hover:underline flex items-center gap-1"
                        >
                            <i className={link.icon}></i>
                            {link.text}
                        </a>
                    </span>
                </motion.div>
            )}
        </div>
    )
}

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}

function About() {
    return (
        <section
            id="about"
            className="w-full py-24 px-6 md:px-32 bg-gradient-to-tr relative"
        >
            <motion.div
                className="flex flex-col md:flex-row gap-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    variants={itemVariants}
                    className="md:w-1/3 md:sticky md:top-24 md:self-start"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                        Interests and Hobbies
                    </h1>
                </motion.div>

                <div className="md:w-2/3 min-h-screen px-4">
                    {interests.map((interest, index) => (
                        <InterestCard key={index} {...interest} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default About
