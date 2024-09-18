'use client'
import React from 'react'
import { HeroSection } from '@/components/organisms/HeroSection'
import SpellSection from '@/components/organisms/SpellSection/SpellSection'

export default function Home() {
  return (
    <>
      <section className="">
        <HeroSection />
      </section>
      <section className="h-screen flex items-center justify-center">
        <SpellSection spells={[]} />
      </section>
    </>
  )
}
