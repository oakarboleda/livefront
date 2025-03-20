import './globals.scss'
import React from 'react'
import { NavBar } from '@/components/molecules/NavBar/NavBar'
import { Footer } from '@/components/molecules/Footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
      <main>
        <NavBar />
        {children}
        <Analytics mode={'production'} />
        <SpeedInsights />
        <Footer />
      </main>
      </body>
    </html>
  )
}
