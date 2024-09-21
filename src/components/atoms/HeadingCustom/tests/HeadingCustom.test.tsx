import React from 'react'
import { HeadingCustom } from '../HeadingCustom'
import { render, screen } from '@testing-library/react'

describe('<HeadingCustom />', () => {
  it('renders without crashing', () => {
    render(<HeadingCustom />)
  })

  it('displays the default prop value when no prop is provided', () => {
    render(<HeadingCustom />)
    expect(screen.getByText('HeadingCustom default value')).toBeInTheDocument()
  })

  it('displays the provided prop value', () => {
    const customProp = 'custom value'
    render(<HeadingCustom prop={customProp} />)
    expect(screen.getByText(`HeadingCustom ${customProp}`)).toBeInTheDocument()
  })
})
