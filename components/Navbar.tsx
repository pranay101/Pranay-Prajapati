import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <section className='flex items-center justify-between container text-dark px-10 py-5 md:px-32 border-b'>
        <h1 className='text-lg font-semibold'>Pranay</h1>
        <ul className='hidden md:flex text-sm space-x-10'>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="">Hire Me</Link></li>
        </ul>
    </section>
  )
}

export default Navbar