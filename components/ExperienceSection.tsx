'use client'
import { gsap } from 'gsap';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
type Props = {}

function ExperienceSection({ }: Props) {
    const education = useRef<HTMLVideoElement>(null);
    const experience = useRef<HTMLVideoElement>(null);
    const experienceSection = useRef<HTMLVideoElement>(null);
    const timeline = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger)
        const educationArray = gsap.utils.toArray(education.current)
        const mainTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger:experienceSection.current,
                start:"top center-=100",
                toggleActions:"play none none reverse",
            }
        });

        mainTimeLine.from(education.current?.children,
        {
            x:-100,
            opacity:0,
            stagger:{
                each:.05,
                amount:.8
            },
            delay:.5,
            duration:.6
        }).from(experience.current?.children,
        {
            x:100,
            opacity:0,
            stagger:{
                each:.05,
                amount:.8
            },
            delay:.5,
            duration:.6
        },0)
    },[])
    return (
        <section id='experience' ref={experienceSection} className='h-screen min-w-full bg-gray-50 relative flex justify-center items-center  snap-center font-poppins'>
            <div className='flex items-center px-20 w-full justify-around overflow-hidden'>

                <div ref={education} className=' flex flex-col text-[#141414] gap-5 items-start'>
                    <h1 className='font-light top-0  text-[#141414] text-6xl'>Experience</h1>

                    <div className='w-[35vw] bg-gray-200 p-5 rounded-md shadow-lg '>
                        <h2 className='text-2xl font-medium text-blue-950'>Capitsign</h2>
                        <p className='text-sm  text-gray-500'>Software Developer</p>
                        <span className='text-sm font-rob'>Worked on the full stack project using React and Python to Develop Stock trading Tools </span>
                        <div className='flex text-xs italic justify-between text-gray-400 mt-2 pr-5'>
                            <span>09-2022-present</span>

                            <span>Raipur, Chhattisgarh</span></div>
                    </div>
                    <div className='w-[35vw] bg-gray-200 p-5 rounded-md shadow-lg '>
                        <h2 className='text-2xl font-medium text-blue-950'>Capitsign</h2>
                        <p className='text-sm  text-gray-500'>Software Developer</p>
                        <span className='text-sm font-rob'>Worked on the full stack project using React and Python to Develop Stock trading Tools </span>
                        <div className='flex text-xs italic justify-between text-gray-400 mt-2 pr-5'>
                            <span>09-2022-present</span>

                            <span>Raipur, Chhattisgarh</span></div>
                    </div>
                    <div className='w-[35vw] bg-gray-200 p-5 rounded-md shadow-lg '>
                        <h2 className='text-2xl font-medium text-blue-950'>Capitsign</h2>
                        <p className='text-sm  text-gray-500'>Software Developer</p>
                        <span className='text-sm font-rob'>Worked on the full stack project using React and Python to Develop Stock trading Tools </span>
                        <div className='flex text-xs italic justify-between text-gray-400 mt-2 pr-5'>
                            <span>09-2022-present</span>

                            <span>Raipur, Chhattisgarh</span></div>
                    </div>

                </div>
                <div ref={experience} className=' flex flex-col text-[#141414] gap-5 items-end'>
                    <h1 className='font-light top-0  text-[#141414] text-6xl'>Experience</h1>

                    <div className='w-[35vw] bg-gray-200 p-5 rounded-md shadow-lg '>
                        <h2 className='text-2xl font-medium text-blue-950'>Capitsign</h2>
                        <p className='text-sm  text-gray-500'>Software Developer</p>
                        <span className='text-sm font-rob'>Worked on the full stack project using React and Python to Develop Stock trading Tools </span>
                        <div className='flex text-xs italic justify-between text-gray-400 mt-2 pr-5'>
                            <span>09-2022-present</span>

                            <span>Raipur, Chhattisgarh</span></div>
                    </div>
                    <div className='w-[35vw] bg-gray-200 p-5 rounded-md shadow-lg '>
                        <h2 className='text-2xl font-medium text-blue-950'>Capitsign</h2>
                        <p className='text-sm  text-gray-500'>Software Developer</p>
                        <span className='text-sm font-rob'>Worked on the full stack project using React and Python to Develop Stock trading Tools </span>
                        <div className='flex text-xs italic justify-between text-gray-400 mt-2 pr-5'>
                            <span>09-2022-present</span>

                            <span>Raipur, Chhattisgarh</span></div>
                    </div>
                    <div className='w-[35vw] bg-gray-200 p-5 rounded-md shadow-lg '>
                        <h2 className='text-2xl font-medium text-blue-950'>Capitsign</h2>
                        <p className='text-sm  text-gray-500'>Software Developer</p>
                        <span className='text-sm font-rob'>Worked on the full stack project using React and Python to Develop Stock trading Tools </span>
                        <div className='flex text-xs italic justify-between text-gray-400 mt-2 pr-5'>
                            <span>09-2022-present</span>

                            <span>Raipur, Chhattisgarh</span></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ExperienceSection