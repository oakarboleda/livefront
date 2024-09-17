'use client'

import { FC } from 'react'
import Image from 'next/image'

const HeroImage: FC = () => {
  return (
    <div className="">
      <Image src="/hero.png" alt="Hero" width={300} height={300} />
    </div>
  )
}

export default HeroImage
