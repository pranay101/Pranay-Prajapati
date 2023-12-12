import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen py-5 md:py-16 md:px-[5vw]  bg-gray-100 text-dark">
      <section className='bg-white min-h-screen w-[90%] md:w-[80vw] md:rounded-lg shadow-lg mx-auto'>
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </section>
    </main>
  )
}
