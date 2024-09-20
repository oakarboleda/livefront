import './globals.scss'
import React from 'react'
import { NavBar } from '@/components/molecules/NavBar/NavBar'
import { Footer } from '@/components/molecules/Footer/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
