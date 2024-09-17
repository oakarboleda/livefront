'use client'

import { FC, useRef } from 'react'

const HeroImage: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className=''>
      <img src='./avatar.png' alt='hero' />
    </div>
  )
}

export default HeroImage
