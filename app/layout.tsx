import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pranay Prajapait',
    description: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
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
