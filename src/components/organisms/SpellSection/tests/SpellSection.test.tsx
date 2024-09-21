import React from 'react'
import { render, screen } from '@testing-library/react'
import SpellSection from '../SpellSection'

describe('SpellSection', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders without crashing', () => {
    render(<SpellSection />)
  })

  it('displays loading state initially', () => {
    render(<SpellSection />)
    expect(screen.getByText('Loading spells...')).toBeInTheDocument()
  })
})
