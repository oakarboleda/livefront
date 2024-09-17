import React, { FC, useEffect } from 'react'

import HeroImage from '../../atoms/avatar/avatar'
import BackgroundImage from '../../atoms/background/background'

const Hero: FC = () => {
  return (
    <section className="hero">
      <BackgroundImage />
      <HeroImage />
    </section>
  )
}

export default Hero
