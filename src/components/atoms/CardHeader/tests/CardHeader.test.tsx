import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardHeader } from '../CardHeader'

describe('CardHeader', () => {
  test('renders without crashing', () => {
    render(<CardHeader />)
    const headerElement = screen.getByRole('heading', { level: 2 })
    expect(headerElement).toBeInTheDocument()
  })

  test('renders children correctly', () => {
    const childText = 'Test Header'
    render(<CardHeader>{childText}</CardHeader>)
    const headerElement = screen.getByRole('heading', { level: 2 })
    expect(headerElement).toHaveTextContent(childText)
  })
})
