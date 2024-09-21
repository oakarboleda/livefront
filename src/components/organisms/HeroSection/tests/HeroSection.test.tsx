import React from 'react'
import HeroSection from '../HeroSection' //-
import { render, screen } from '@testing-library/react'

describe('<HeroSection />', () => {
  it('renders without crashing', () => {
    render(<HeroSection />)
  })

  it('displays the welcome message', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { name: /Welcome Adventurer!/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays the hero image', () => {
    render(<HeroSection />)
    const image = screen.getByAltText('Illustration of a hero character')
    expect(image).toBeInTheDocument()
  })
})
