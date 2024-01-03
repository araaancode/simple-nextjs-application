import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'فروشگاه',
  description: 'Shopping App',
  icons:"https://cdn-icons-png.flaticon.com/128/5337/5337564.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir='rtl' lang="fa">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
