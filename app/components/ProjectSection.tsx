'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'

type Props = {}

const ProjectSection = (props: Props) => {

    const title = useRef<HTMLHeadingElement>(null);
    const project = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        
        const mainTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger: project.current,
                start: "center center+=500",
                end:"top top-=300",
                toggleActions: "play none none reverse",
                scrub:true,
            }
        })


        mainTimeLine.from(project.current?.children || "",{
            opacity:0,
            y:30,
            stagger:{
                each:.05
            },
            delay:0

        })

    }, [])

    const [currentBlog, setCurrentBlog] = useState(0)

    const projects = [
        {
            img: "brainCancerDetection.webp",
            name: "Traces Of Brain Tumour",
            description: "Our project uses deep learning to detect early brain cancer traces in MRI scans, improving early diagnosis and treatment outcomes. With a trained model and advanced pattern recognition, we identify subtle indications of cancerous growths, aiding in timely intervention."
            ,visitLink:"",
            githubLink:"https://github.com/pranay101/Brain-Cancer-Detection"
        },
        {
            img: "attendanceSystem.webp",
            name: "Attendance System",
            description: "Our Attendance System for Government-Aided Schools automates attendance tracking using biometrics or RFID tags. It provides real-time data, trend analysis, and reporting for proactive measures. This efficient system reduces administrative burdens, enhances transparency, and improves accountability, benefiting teachers, administrators, and parents.",
            visitLink:"https://attendance-system-murex.vercel.app/",
            githubLink:"https://github.com/pranay101/Attendance-System"
        },
        {
            img: "instagramClone.png",
            name: "Instagram Clone",
            description: "Instagram clone built using nextjs and tailwind.",
            visitLink:"https://instagram-clone-ten-xi.vercel.app/",
            githubLink:"https://github.com/pranay101/Instagram-Clone"
        },
        {
            img: "spotifyClone.webp",
            name: "Spotify-Clone",
            description: "Spotify web Player clone built using next js, tailwind css, recoiljs, nextauth and nextMiddlwware. You'll need a spotify premium account inorder to play music, if you dont have one you can only list out your playlists",
            visitLink:"https://spotify-webplayer-clone.vercel.app/",
            githubLink:"https://github.com/pranay101/Spotify-Clone"
        },
        {
            img: "burgerBuilder.webp",
            name: "Burger Builder",
            description: "A react app that dynamically generates your burger depending on the ingredients you want. obviously you cant order a actual one but its fun to play with",
            visitLink:"https://pranay101.github.io/Burger-Builder/#/",
            githubLink:"https://github.com/pranay101/Burger-Builder"
        },
        
    ]

    return (
        <div ref={project} id='projects' className='h-screen min-w-full'>
            <h1 ref={title} className=' flex items-center font-light justify-center text-center  text-[#141414] pt-10 text-6xl w-full'>Projects</h1>
            <div className='w-[90%] h-[80%] px-10 mx-auto mt-10 flex justify-between items-center'>
                <div>
                    {/* display */}
                    <div className='group h-[60vh] w-[40vw] bg-gray-200 relative rounded-sm overflow-hidden'>
                        <span className='absolute z-40 hidden group-hover:flex h-full py-5 px-10 items-center justify-center text-white top-0 left-0'>
                            {projects[currentBlog].description}
                        </span>
                        <span className=' absolute hidden group-hover:flex bottom-5 py-2 justify-center items-center w-full gap-7 z-40'>

                            <a href={projects[currentBlog].visitLink} target='blank' className='text-white border-2 border-gray-200 py-2 px-5 rounded-full hover:bg-transparent hover:-translate-y-1 cursor-pointer z-20 '>Visit</a>
                            <a href={projects[currentBlog].githubLink} target='blank' className='text-white border-2 border-gray-200 py-2 px-5 rounded-full hover:bg-transparent hover:-translate-y-1  cursor-pointer z-20'>Github</a>
                        </span>
                        <div className='h-full w-full absolute z-10 bg-black opacity-0 group-hover:opacity-50 ' />

                        <Image className='h-full w-full object-cover' src={`/${projects[currentBlog].img}`} alt={projects[currentBlog].name} width={1920} height={1080}  />

                    </div>
                </div>
                <div className='text-right h-[60vh] overflow-y-scroll p-5'>
                    {
                        projects.map((project, index) => <div key={index} className='text-[#141414] w-[30vw] border-b-2 py-5 border-[#141414]'>
                            <h1 onMouseEnter={() => setCurrentBlog(index)} className='font-bold text-4xl whitespace-nowrap  w-full cursor-pointer'>{project.name}</h1>
                        </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectSection