'use client'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import HomeSection from '@/components/HomeSection'
import Navbar from '@/components/Navbar'
import ProjectSection from '@/components/ProjectSection'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function Home() {
    const [openContact, setOpenContact] = useState(false)

    const wrapper = useRef<HTMLVideoElement>(null);
    const experienceSection = useRef<HTMLVideoElement>(null);
    const projectSection = useRef<HTMLVideoElement>(null);
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [])


    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        let ctx = gsap.context(() => {

            gsap.from(projectSection.current, {
                scrollTrigger: {
                    trigger: experienceSection.current,
                    start: 'bottom-=200 bottom',
                    toggleActions: "play none none reverse",
                    pin: true,
                },
                x: +window.innerWidth,
                duration:0.1
            })


        }, []); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup

    }, [])
    useEffect(() => {

        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    return (
        <>
            {
                !openContact ? (<div title='Send Message' className='fixed text-3xl text-white z-50 bottom-5 left-5 '>
                    <svg onClick={() => setOpenContact(true)} className='fill-gray-600 hover:fill-gray-300 cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                </div>) : null
            }

            <ContactSection open={openContact} setOpen={setOpenContact} />
            <main className="min-h-screen bg-white relative no-scrollbar snap-mandatory">
                <Navbar />

                <HomeSection />
                <div className='!snap-center'>
                    <AboutSection />
                </div>
                <ExperienceSection />
                <div ref={projectSection}>

                    <ProjectSection />
                </div>
            </main>
            {/* <Footer /> */}
        </>

    )
}
