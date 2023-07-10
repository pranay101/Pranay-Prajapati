import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'



type Props = {}


const AboutSection = (props: Props) => {

    const about = useRef<HTMLVideoElement>(null);
    const aboutImage1 = useRef<HTMLVideoElement>(null);
    const aboutImage2 = useRef<HTMLVideoElement>(null);
    const aboutMe = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        let ctx = gsap.context(() => {
            const mainTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: about.current,
                    start: "center center+=200",
                    toggleActions: "play none none reverse"
                }
            })

            mainTimeLine.from(aboutImage1.current, {
                x: -50,
                ease: 'ease-out',
                opacity: 0,
            }).from(aboutImage2.current, {
                y: 5,
                ease: 'ease-out',
                opacity: 0,
            }, 0).from(aboutMe.current, {
                xPercent: 100,
                ease: 'ease-out',
                opacity: 0,
            }, 0).to(about.current, {
                y: gsap.utils.snap(100)
            })
        }, [aboutImage1]);

        return () => ctx.revert(); // cleanup

    }, [])
    return (
        <section ref={about} id='about' className='w-screen h-screen bg-gray-100 gap-5 grid grid-cols-2 grid-rows-1 overflow-hidden'>
            <div className='mt-24 ml-24'>
                <Image
                    ref={aboutImage1}
                    id='aboutImage1'
                    className=''
                    src={'/aboutImage.webp'}
                    alt='About Image'
                    objectFit='contain'
                    width={600}
                    height={400}
                />

                <Image
                    ref={aboutImage2}
                    className='-translate-y-64 translate-x-[110%]'
                    src={'/aboutImage2.webp'}
                    alt='About Image'
                    objectFit='contain'
                    height={100}
                    width={300}
                />
            </div>
            <div className='text-[#141414] mt-24 p-12 px-36 pl-5 overflow-hidden'>
                <h1 className='text-7xl font-light mb-5'>About</h1>
                <div ref={aboutMe} className='overflow-hidden h-full text-gray-500'>

                    <span className='text-sm font-light'>
                        Hi, I'm Pranay Prajapati, a passionate software developer specializing in frontend development with a strong focus on React and Next.js. I thrive on creating visually stunning and user-friendly interfaces that bring ideas to life.
                        <br />
                        <br />

                        I excel at building dynamic and responsive web applications. I leverage the power of React and Next.js to deliver high-performance projects, implementing features like server-side rendering and code splitting for optimal user experiences.
                        <br />
                        While my heart lies in frontend development, I also possess excellent skills in backend technologies such as Node.js. This allows me to seamlessly integrate server-side components and APIs into my projects, creating robust and scalable solutions.
                        <br />
                        <br />
                        If you're looking for a dedicated software developer with a knack for creating impressive interfaces using React and Next.js, let's collaborate and bring your ideas to the digital world in style!
                    </span>
                </div>
            </div>
        </section>)
}

export default AboutSection