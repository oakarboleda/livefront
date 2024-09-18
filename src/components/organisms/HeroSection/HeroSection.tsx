import React from 'react'
import styles from './HeroSection.module.css'
import { AvatarImage } from '@/components/molecules/AvatarImage'
import { BackgroundImage } from '@/components/molecules/BackgroundImage/BackgroundImage'

export interface heroSectionProps {
  prop?: string
}

export function HeroSection({ prop }: heroSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* <AvatarImage alt="Avatar" />
        <BackgroundImage alt="Background" /> */}
      </div>
    </section>
  )
}
