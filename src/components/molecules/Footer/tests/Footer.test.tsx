import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/molecules/Footer/Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })

  it('renders the logo or brand correctly', () => {
    render(<Footer />)
    expect(screen.getByLabelText('RollWithIt Home')).toBeInTheDocument()
  })

  it('renders navigation links correctly', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Home')).toBeInTheDocument()
    expect(screen.getByLabelText('Profile')).toBeInTheDocument()
  })

  it('renders the correct copyright text', () => {
    render(<Footer />)
    expect(
      screen.getByText(`© ${new Date().getFullYear()} RollWithIt. All rights reserved.`),
    ).toBeInTheDocument()
  })
})
