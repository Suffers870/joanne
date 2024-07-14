import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from './components/Navbar'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body 
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}