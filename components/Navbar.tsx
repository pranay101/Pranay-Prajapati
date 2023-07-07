import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between uppercase items-center px-10 pt-14 sticky top-0 left-0
    z-50'>
        <h1 className='font-poppins text-lg tracking-[2px] font-extralight cursor-pointer hover:opacity-60'>
            Home
        </h1>
        <ul className='font-poppins font-extralight tracking-[2px] flex gap-10 text-[.8rem] '>
            <li className='active px-3 py-1'>
                <Link href={""}>About</Link>
            </li>
            <li className=' px-3 py-1'>
                <Link href={""}>Experience</Link>
            </li>
            <li className=' px-3 py-1'>
                <Link href={""}>Projects</Link>
            </li>
            <li className=' px-3 py-1'>
                <Link href={""}>Blogs</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar