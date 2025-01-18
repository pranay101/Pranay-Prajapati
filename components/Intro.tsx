import Image from 'next/image'
import React from 'react'

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
    return (
        <section
            id="home"
            className="min-h-screen w-full px-4 md:px-32 py-16 flex flex-col-reverse md:flex-row items-center justify-center gap-12"
        >
            <div className="w-full md:w-3/5 flex flex-col text-center md:text-left">
                <h2 className="text-2xl md:text-3xl mb-3 md:mb-5 text-secondary">
                    👋 Hey there! I'm Pranay
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-primary leading-tight">
                    Building Digital Wonders, One Pixel at a Time
                </h1>
                <p className="w-full text-base md:text-lg text-tertiary mb-8 max-w-2xl mx-auto md:mx-0">
                    I'm that web developer who gets excited about pixels and
                    performance! Whether it's crafting beautiful interfaces or
                    solving complex problems, I'm always up for a coding
                    adventure. Ready to create some digital magic together? 🚀
                </p>
                <div className="flex items-center justify-center md:justify-start gap-6 px-10 md:px-0">
                    <button
                        className="w-full sm:w-auto bg-primary text-white px-8 py-3 border-none rounded-md transition-all hover:bg-opacity-90 hover:scale-105 shadow-md"
                        aria-label="View portfolio"
                    >
                        See My Work <span className="animate-pulse">✨</span>
                    </button>
                    <button
                        className="w-full sm:w-auto text-primary hover:underline transition-all hover:scale-105"
                        aria-label="Download resume"
                    >
                        Grab My Resume 📄
                    </button>
                </div>
            </div>
            <div className="w-3/5 md:w-2/5 max-w-md px-4 md:px-0">
                <div className="relative aspect-[4/5] w-full">
                    <Image
                        className="rounded-2xl shadow-xl object-cover"
                        alt="Profile photograph"
                        src="https://images.unsplash.com/photo-1501761095094-94d36f57edbb?q=80&w=1965&auto=format&fit=crop"
                        fill
                        sizes="(max-width: 768px) 90vw, 40vw"
                        priority
                        quality={90}
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro
