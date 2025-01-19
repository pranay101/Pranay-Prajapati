import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pranay Prajapati',
    description: "Pranay's Portfolio",
    keywords: [
        'Full Stack Developer',
        'Web Developer',
        'React Developer',
        'Next.js Developer',
        'Software Engineer',
    ],
    authors: [{ name: 'Pranay Prajapati' }],
    creator: 'Pranay Prajapati',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://pranayprajapati.com',
        title: 'Pranay Prajapati - Full Stack Developer',
        description:
            'Full Stack Developer Portfolio showcasing projects and experience in web development',
        siteName: 'Pranay Prajapati Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pranay Prajapati - Full Stack Developer',
        description: "Pranay's Portfolio",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={cn('bg-gray-200', inter.className)}>
                <main className="text-dark max-w-[1440px] mx-auto w-full bg-white md:my-6 md:rounded-xl shadow-lg">
                    {children}
                </main>
            </body>
        </html>
    )
}
