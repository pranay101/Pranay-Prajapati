'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const ProjectSection = (props: Props) => {

    const [currentBlog, setCurrentBlog] = useState(0)

    const projects = [
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ,
            name: "xyz",
            description: "sit amet consectetur adipisicing elit. Perferendis neque deserunt cum quisquam, nesciunt tempora iste ipsam asperiores incidunt rerum, eveniet in? Culpa consectetur hic ipsa placeat illum non id!"
        },
        {
            img: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            ,
            name: "xyz",
            description: "sit amet consectetur adipisicing elit. Perferendis neque deserunt cum quisquam, nesciunt tempora iste ipsam asperiores incidunt rerum, eveniet in? Culpa consectetur hic ipsa placeat illum non id!"
        },
        {
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            ,
            name: "xyz",
            description: "sit amet consectetur adipisicing elit. Perferendis neque deserunt cum quisquam, nesciunt tempora iste ipsam asperiores incidunt rerum, eveniet in? Culpa consectetur hic ipsa placeat illum non id!"
        },
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ,
            name: "xyz",
            description: "sit amet consectetur adipisicing elit. Perferendis neque deserunt cum quisquam, nesciunt tempora iste ipsam asperiores incidunt rerum, eveniet in? Culpa consectetur hic ipsa placeat illum non id!"
        },
    ]

    return (
        <div className='h-screen min-w-full bg-white'>
            <h1 className=' flex items-center font-light  text-[#141414] pt-10 pl-16 text-6xl gap-2'>Projects <div className='w-72 mt-4 border-b border-[#141414]' /></h1>
            <div className='w-[90%] h-[80%] px-10 mx-auto mt-10 flex justify-between items-center'>
                <div>
                    {/* display */}
                    <div className='group h-[60vh] w-[40vw] bg-gray-200 relative rounded-sm overflow-hidden'>
                        <span className='absolute z-40 hidden group-hover:flex h-full py-5 px-10 items-center justify-center text-white top-0 left-0'>
                            {projects[currentBlog].description}
                        </span>
                        <span className=' absolute hidden group-hover:flex bottom-5 py-2 justify-center items-center w-full gap-7 z-40'>

                            <a href='https://google.com' target='blank' className='text-white border-2 border-gray-200 py-2 px-5 rounded-full hover:bg-transparent hover:-translate-y-1 cursor-pointer z-20 '>Visit</a>
                            <a href='https://google.com' target='blank' className='text-white border-2 border-gray-200 py-2 px-5 rounded-full hover:bg-transparent hover:-translate-y-1  cursor-pointer z-20'>Github</a>
                        </span>
                        <div className='h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-50 ' />

                        <img className='h-full w-full object-cover' src={projects[currentBlog].img} alt="" />

                    </div>
                </div>
                <div className='text-right h-[60vh] overflow-y-scroll p-5'>
                    {
                        projects.map((project, index) => <div className='text-[#141414] w-[30vw] border-b-2 py-5 border-[#141414]'>
                            <h1 onMouseEnter={() => setCurrentBlog(index)} className='font-bold text-6xl  w-full cursor-pointer'>{project.name}</h1>
                        </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectSection