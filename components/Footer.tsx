import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <section className="h-[30vh] w-full md:px-32 pt-10 mt-10 text-center">
                <h1 className="text-2xl mb-5">Socials</h1>
                <div className="flex justify-center items-center space-x-5">
                    <SocialIcon url="www.behance.com" />
                    <SocialIcon url="www.twitter.com" />
                    <SocialIcon url="www.github.com" />
                    <SocialIcon url="www.linkedin.com" />
                    <SocialIcon url="www.pinterest.com" />
                    <SocialIcon url="mailto:" />
                </div>
            </section>
            <section className="bg-dark h-[30vh] -px-32 rounded-b-lg text-extraLight flex items-center justify-center">
                <Link href={""}>Made with ❤️, Stress and Anxiety</Link>
            </section>
        </>
    )
}

export default Footer
