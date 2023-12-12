import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section id='about' className='h-[80vh] w-full md:px-32 grid md:grid-cols-3 gap-10'>
         <div className='hidden col-span-1 md:flex items-center'>
            <Image
                className='rounded-lg drop-shadow-xl bg-gray-500'
                alt='Some random Image'
                height={1920}
                width={1080}
                src={"https://images.unsplash.com/photo-1542235222-30e843cb43a1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
            />
        </div>
        <div className='px-5 md:px-0 md:col-span-2 flex flex-col text-centr md:text-left place-content-center ml-5' >
            <h2 className='text-xl md:text-3xl mb-3 md:mb-5 text-dark-secondary'>About Me</h2>
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>Crafting every exceptional design begins within, shaping an even better story.</h1>
            <p className='text-sm text-light-secondary mb-5'>A passionate Creative Web Developer dedicated to building and optimizing user-centric, high-impact websites. With a background in both design and development, I bring a unique blend of skills to create seamless user interfaces, conduct rigorous testing, and debug websites for optimal performance.</p>
            <div className='text-sm space-x-10'>
                <button className='bg-dark text-white px-5 py-2 border-none rounded-md'>Read More</button>
            </div>
        </div>
       
    </section>
    )
}

export default About