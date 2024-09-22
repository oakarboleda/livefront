import React from 'react'
import { ButtonCustom, buttonCustomProps } from '../ButtonCustom'
import { render } from '@testing-library/react'

describe('<ButtonCustom />', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<ButtonCustom>Click me</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass(
      'inline-flex full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md transition duration-300 ease-in-out transform hover:scale-110 px-4 py-2 text-sm',
    )
  })

  it('renders with primary variant', () => {
    const { getByRole } = render(<ButtonCustom variant="primary">Primary</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass(
      'text-purple-700 dark:text-purple-700 bg-purple-100 hover:bg-purple-50 hover:text-purple-600 focus:ring ring-offset-2 ring-purple-100 focus:outline-none',
    )
  })

  it('renders with secondary variant', () => {
    const { getByRole } = render(<ButtonCustom variant="secondary">Secondary</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-gray-100 text-gray-800 hover:bg-gray-200')
  })

  it('renders with danger variant', () => {
    const { getByRole } = render(<ButtonCustom variant="danger">Danger</ButtonCustom>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-red-600 text-white hover:bg-red-700')
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
