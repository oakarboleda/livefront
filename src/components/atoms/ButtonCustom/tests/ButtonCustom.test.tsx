import React from 'react'
import { ButtonCustom } from '../ButtonCustom'
import { render } from '@testing-library/react'

describe('<ButtonCustom />', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<ButtonCustom>Click me</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-blue-900 text-white px-4 py-2 text-sm')
    expect(button).toHaveTextContent('Click me')
  })

  it('renders with primary variant', () => {
    const { getByRole } = render(<ButtonCustom variant="primary">Primary</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-blue-900 text-white')
  })

  it('renders with secondary variant', () => {
    const { getByRole } = render(<ButtonCustom variant="secondary">Secondary</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-gray-100 text-gray-800')
  })

  it('renders with danger variant', () => {
    const { getByRole } = render(<ButtonCustom variant="danger">Danger</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-red-600 text-white')
  })

  it('renders with small size', () => {
    const { getByRole } = render(<ButtonCustom size="small">Small</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('px-2 py-1 text-xs')
  })

  it('renders with large size', () => {
    const { getByRole } = render(<ButtonCustom size="large">Large</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('px-6 py-3 text-lg')
  })
})
