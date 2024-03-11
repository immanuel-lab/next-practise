import { Inter,Big_Shoulders_Display } from 'next/font/google'
import './globals.css'

import Navbar from './Navbar'
import Footer from './Footer'

const inter = Big_Shoulders_Display({ subsets: ['latin']})

export const metadata = {
  title: 'shopping',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  )
}
