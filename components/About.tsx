import Image from 'next/image'

const aboutData = {
    interests: [
        'Full Stack Development',
        'UI/UX Design',
        'Cloud Computing',
        'Machine Learning',
        'Open Source'
    ],
    contact: {
        email: 'pranay.thakur@example.com',
        github: 'https://github.com/pranay101',
        linkedin: 'https://linkedin.com/in/pranay-thakur',
        twitter: 'https://twitter.com/pranay_thakur'
    },
    description: `A passionate Creative Web Developer dedicated to building and optimizing user-centric, high-impact websites. With a background in both design and development, I bring a unique blend of skills to create seamless user interfaces, conduct rigorous testing, and debug websites for optimal performance.`
}

function About() {
    return (
        <section
            id="about"
            className="min-h-screen w-full md:px-32 grid md:grid-cols-3 gap-10 relative overflow-hidden py-16"
        >
            <div className="hidden col-span-1 md:flex items-center">
                <Image
                    className="rounded-lg drop-shadow-xl bg-gray-500"
                    alt="Profile Image"
                    height={1920}
                    width={1080}
                    src={
                        'https://images.unsplash.com/photo-1542235222-30e843cb43a1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                />
            </div>

            <div className="px-5 md:px-0 md:col-span-2 flex flex-col text-center md:text-left place-content-center ml-5 z-10">
                <div className="mb-8">
                    <h2 className="text-xl md:text-3xl mb-3 md:mb-5 text-dark-secondary">
                        About Me
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Every exceptional design begins within.
                    </h1>
                    <p className="text-sm text-light-secondary mb-8">
                        {aboutData.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-dark">What I Love</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {aboutData.interests.map((interest, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 px-4 py-2 rounded-lg text-dark-secondary text-sm hover:bg-gray-100 transition-colors"
                            >
                                {interest}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-sm">
                    <h3 className="text-lg font-semibold mb-4 text-dark">Let's Connect</h3>
                    <div className="flex flex-wrap gap-6">
                        <a 
                            href={`mailto:${aboutData.contact.email}`}
                            className="text-dark-secondary hover:text-dark transition-colors"
                        >
                            Email →
                        </a>
                        <a 
                            href={aboutData.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-secondary hover:text-dark transition-colors"
                        >
                            GitHub →
                        </a>
                        <a 
                            href={aboutData.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-secondary hover:text-dark transition-colors"
                        >
                            LinkedIn →
                        </a>
                        <a 
                            href={aboutData.contact.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-secondary hover:text-dark transition-colors"
                        >
                            Twitter →
                        </a>
                    </div>
                </div>
            </div>

            <svg
                width="1441"
                height="813"
                viewBox="0 0 1441 813"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-[0] opacity-10 h-[60vh] max-w-fit top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
                <path
                    d="M1440.5 3.5C1275.83 26.1667 1023.97 38.4203 741 410C501.5 724.5 178.833 790.5 0.5 810"
                    stroke="#9EC8B9"
                    strokeWidth="100"
                />
            </svg>
        </section>
    )
}

export default About