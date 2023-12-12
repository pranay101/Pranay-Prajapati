import Image from 'next/image'
import React from 'react'

type Props = {}

const Intro = (props: Props) => {
  return (
    <section id='home' className='h-[80vh] w-full md:px-32 grid md:grid-cols-3'>
        <div className='px-5 md:px-0 md:col-span-2 flex flex-col text-centr md:text-left place-content-center' >
            <h2 className='text-xl md:text-3xl mb-3 md:mb-5 text-dark-secondary'>Hi!, I am Pranay,</h2>
            <h1 className='text-3xl md:text-5xl font-bold mb-2'>I like to craft what inspires and Innovates.</h1>
            <p className='text-base text-light-secondary mb-5'>Dreamt about any Crazy project idea? Count me in</p>
            <div className='text-sm space-x-10'>
                <button className='bg-dark text-white px-5 py-2 border-none rounded-md'>View My Work ➜</button>
                <button className='text-dark '>DownLoad CV</button>
            </div>
        </div>
        <div className='hidden col-span-1 md:flex items-center p-5 '>
            <Image
                className='rounded-lg drop-shadow-xl bg-gray-500'
                alt='Some random Image'
                height={1920}
                width={1080}
                src={"https://images.unsplash.com/photo-1501761095094-94d36f57edbb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
            />
        </div>
    </section>
    )
}

export default Intro