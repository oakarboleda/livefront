'use client'
import React from 'react'
import { HeroSection } from '@/components/organisms/HeroSection'
import SpellSection from '@/components/organisms/SpellSection/SpellSection'

export default function Home() {
  return (
    <>
      <section className="h-1/4 w-full py-6">
        <HeroSection />
      </section>
      <section className="h-screen flex items-center justify-center my-14">
        <SpellSection spells={[]} />
      </section>
    </>
  )
}
