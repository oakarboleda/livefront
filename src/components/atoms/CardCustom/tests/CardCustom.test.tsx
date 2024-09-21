import React from 'react'
import { CardCustom } from '../CardCustom'
import { render, screen } from '@testing-library/react'

describe('<CardCustom />', () => {
  it('renders without crashing', () => {
    render(<CardCustom />)
  })
  it('renders children correctly', () => {
    render(<CardCustom>Test Content</CardCustom>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
