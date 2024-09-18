import React from 'react'
import { HeroSection } from '../HeroSection'
import { render } from '@testing-library/react'

describe('<HeroSection />', () => {
  it('renders without crashing', () => {
    render(<HeroSection />)
  })
})
