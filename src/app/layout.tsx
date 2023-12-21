import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iProfile',
  description: 'My Portfolio and profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black text-slate-100'>
        <div>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  )
}
