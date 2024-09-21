import React from 'react'
import { ImageCustom } from '../ImageCustom'
import { render } from '@testing-library/react'

describe('<ImageCustom />', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<ImageCustom />)
    expect(getByText('ImageCustom default value')).toBeInTheDocument()
  })

  it('renders with the provided prop', () => {
    const { getByText } = render(<ImageCustom prop="custom value" />)
    expect(getByText('ImageCustom custom value')).toBeInTheDocument()
  })

  it('renders with the default prop value when no prop is provided', () => {
    const { getByText } = render(<ImageCustom />)
    expect(getByText('ImageCustom default value')).toBeInTheDocument()
  })
})
