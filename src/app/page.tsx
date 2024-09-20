'use client'
import React, { Suspense, lazy } from 'react'
import Head from 'next/head'

// Lazy load the components
const HeroSection = lazy(() => import('@/components/organisms/HeroSection/HeroSection'))
const SpellSection = lazy(() => import('@/components/organisms/SpellSection/SpellSection'))

/**
 * Props for the Home component
 */
type pageProps = {
  /** Title of the page */
  title?: string
  /** Description of the page */
  desc?: string
  /** Optional children elements to be rendered inside the page */
  children?: React.ReactNode
}

/**
 * Home component
 *
 * This component represents the home page of the application. It sets up the page's metadata and lazy loads
 * the HeroSection and SpellSection components.
 *
 * @param {pageProps} props - The props for the component.
 * @param {string} props.title - The title of the page.
 * @param {string} props.desc - The description of the page.
 * @param {React.ReactNode} [props.children] - Optional children elements to be rendered inside the page.
 * @returns {JSX.Element} The rendered home page component.
 */
const Home: React.FC<pageProps> = ({ title, desc }) => {
  const pageTitle = `${title === 'Home | RollWithIt' ? '' : `${title} - `}`
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://.vercel.app/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/oak.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://.vercel.app/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="" />
        <meta
          name="description"
          content="Explore powerful spells and more in our Dungeons and Dragons app."
        />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div>Loading Hero...</div>}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div>Loading Spells...</div>}>
          <SpellSection />
        </Suspense>
      </div>
    </>
  )
}
export default Home
