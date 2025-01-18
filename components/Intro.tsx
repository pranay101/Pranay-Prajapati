import Image from 'next/image'
import React from 'react'

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
    return (
        <section
            id="home"
            className="h-[80vh] w-full md:px-32 flex flex-col md:flex-row items-center relative"
        >
            <div className="px-5 md:px-0 md:col-span-2 flex flex-col text-center md:text-left place-content-center h-fit">
                <h2 className="text-xl md:text-3xl mb-3 md:mb-5 text-secondary">
                    👋 Hey there! I'm Pranay
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold mb-2 text-primary">
                    Building Digital Wonders, One Pixel at a Time
                </h1>
                <p className="text-base text-tertiary mb-5">
                    I'm that web developer who gets excited about pixels and
                    performance! Whether it's crafting beautiful interfaces or
                    solving complex problems, I'm always up for a coding
                    adventure. Ready to create some digital magic together? 🚀
                </p>
                <div className="text-sm space-x-10">
                    <button
                        className="bg-primary text-white px-5 py-2 border-none rounded-md transition-all hover:bg-opacity-90 hover:scale-105"
                        aria-label="View portfolio"
                    >
                        See My Work <span className="animate-pulse">✨</span>
                    </button>
                    <button
                        className="text-primary hover:underline transition-all hover:scale-105"
                        aria-label="Download resume"
                    >
                        Grab My Resume 📄
                    </button>
                </div>
            </div>
            <div className="hidden col-span-1 md:flex items-center p-6 max-w-sm">
                <Image
                    className="rounded-lg drop-shadow-xl bg-gray-500 object-cover"
                    alt="Profile photograph"
                    height={1920}
                    width={1080}
                    src="https://images.unsplash.com/photo-1501761095094-94d36f57edbb?q=80&w=1965&auto=format&fit=crop"
                    priority
                />
            </div>
        </section>
    )
}

export default Intro
