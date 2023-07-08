import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }

      };

    const handlescroll = (id) => {
        scrollToElement(id); // Scroll to the element with the ID 'targetElement'
      };

  return (
    <nav className='flex w-full justify-between uppercase items-center px-10 pt-14 absolute top-0
    z-50'>
        <h1 className='font-poppins text-lg tracking-[2px] font-extralight cursor-pointer hover:opacity-60'>
            Home
        </h1>
        <ul className='font-poppins font-extralight tracking-[2px] flex gap-10 text-[.8rem] '>
            <li className='active px-3 py-1'>
                <Link onClick={() => handlescroll("about")} href={""}>About</Link>
            </li>
            <li className=' px-3 py-1'>
                <Link onClick={() => handlescroll("experience")} href={""}>Experience</Link>
            </li>
            <li className=' px-3 py-1'>
                <Link onClick={() => handlescroll("projects")} href={""}>Projects</Link>
            </li>
            <li className=' px-3 py-1'>
                <Link onClick={() => handlescroll("")} href={""}>Blogs</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar