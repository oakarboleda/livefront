import React from 'react'
import { CardContent } from '../CardContent'
import { render } from '@testing-library/react'

describe('<CardContent />', () => {
  it('renders front side content', () => {
    const { getByText } = render(<CardContent side="front">Front Content</CardContent>)
    expect(getByText('Front Content')).toBeInTheDocument()
  })

  it('renders back side content', () => {
    const { getByText } = render(<CardContent side="back">Back Content</CardContent>)
    expect(getByText('Back Content')).toBeInTheDocument()
  })
})
