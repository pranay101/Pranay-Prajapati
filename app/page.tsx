import HomeSection from '@/components/HomeSection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen bg-[#141414] relative no-scrollbar">
            <Navbar />
            <HomeSection />
        </main>
    )
}
