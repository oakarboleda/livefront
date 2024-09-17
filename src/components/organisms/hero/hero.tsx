import React, { FC, useEffect } from 'react'

import BackgroundImage from '@/components/atoms/background/background'
import Avatar from '@/components/atoms/avatar/avatar'

const Hero: FC = () => {
  return (
    <section className='hero'>
      <BackgroundImage />
      <Avatar />
    </section>
  )
}

export default Hero
