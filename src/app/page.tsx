'use client'
import React, { Suspense, lazy } from 'react'

// Lazy load the components
const HeroSection = lazy(() => import('@/components/organisms/HeroSection/HeroSection'))
const SpellSection = lazy(() => import('@/components/organisms/SpellSection/SpellSection'))

/**
 * Home component
 *
 * This component represents the home page of the application. It sets up the page's metadata and lazy loads
 * the HeroSection and SpellSection components.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
export default function Home() {
  return (
    <>
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
