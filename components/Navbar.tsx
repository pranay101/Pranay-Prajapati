'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <motion.section
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            className="flex items-center justify-between container text-primary px-10 py-5 md:px-32 border-b"
        >
            <motion.h1
                className="text-lg font-semibold text-primary"
                whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    transition: {
                        duration: 0.5
                    }
                }}
                whileTap={{ scale: 0.9 }}
            >
                Pranay
            </motion.h1>
            <ul className="hidden md:flex text-sm space-x-10 text-seondary">
                {['home', 'about', 'projects', 'experience'].map((item, i) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{ 
                            scale: 1.1,
                            color: "#1b4242",
                            transition: {
                                duration: 0.2
                            }
                        }}
                    >
                        <Link
                            href={`#${item}`}
                            className="hover:text-primary transition-colors"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    </motion.li>
                ))}
                <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0px 5px 15px rgba(27, 66, 66, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link
                        href=""
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
                    >
                        Hire Me
                    </Link>
                </motion.li>
            </ul>
        </motion.section>
    )
}

export default Navbar
