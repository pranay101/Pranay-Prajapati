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
                opacity:0,
            }, 0)
        }, [aboutImage1]);

        return () => ctx.revert(); // cleanup

    }, [])
    return (
        <section id ref={about} id='about' className='w-screen h-screen bg-gray-100 gap-5 grid grid-cols-2 grid-rows-1 overflow-hidden'>
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
            <div className='text-[#141414] mt-24 p-12 pl-5 overflow-hidden'>
                <h1 className='text-7xl font-light mb-5'>About</h1>
                <div ref={aboutMe} className='overflow-hidden h-full text-gray-500'>

                    <span className=''>
                        Lorem ipsu nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint nemo nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem? orem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint nemo nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem?
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea architecto inventore quis harum corrupti, tempore vero explicabo aut, velit labore ipsam! Ipsa eius veniam officiis corrupti odit! Harum, placeat inventore.
                    </span>
                </div>
            </div>
        </section>)
}

export default AboutSection