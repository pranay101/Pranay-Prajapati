import About from '@/components/About'
import Divider from '@/components/Elements/Divider'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Navbar />
            <Intro />
            <Divider />

            <Experience />
            <Divider />
            <Projects />
            <Divider />
            <About />
            <Footer />
        </>
    )
}
