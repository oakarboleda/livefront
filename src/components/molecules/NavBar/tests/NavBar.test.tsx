import React from 'react'
import { render, screen } from '@testing-library/react'
import { NavBar } from '@/components/molecules/NavBar/NavBar'

describe('NavBar', () => {
  test('renders the logo with correct text', () => {
    render(<NavBar />)
    const logoElement = screen.getByText(/RollWithIt: Your D&D companion./i)
    expect(logoElement).toBeInTheDocument()
  })

  test('renders navigation links', () => {
    render(<NavBar />)
    const homeLink = screen.getByText(/Home/i)
    const profileLink = screen.getByText(/Profile/i)
    expect(homeLink).toBeInTheDocument()
    expect(profileLink).toBeInTheDocument()
  })

  test('renders mobile menu button', () => {
    render(<NavBar />)
    const mobileMenuButton = screen.getByRole('button')
    expect(mobileMenuButton).toBeInTheDocument()
  })
})
