import React from 'react'
import { NavBar } from '../NavBar'
import { render } from '@testing-library/react'

describe('<NavBar />', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div')
    render(<NavBar />)
  })
})
