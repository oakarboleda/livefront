'use client'
import React from 'react'
import Hero from '@/components/organisms/hero/hero'
import Skills from '@/components/organisms/skills/skills'

export default function Home() {
  return (
    <>
      <section className=''>
        <Hero />
      </section>
      <section className=''>
        <Skills />
      </section>
    </>
  )
}
