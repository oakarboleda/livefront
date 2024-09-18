import React from 'react'
import ButtonCustom from '../ButtonCustom'
import { render } from '@testing-library/react'

describe('<ButtonCustom />', () => {
  it('renders without crashing', async () => {
    const container = document.createElement('div')
    render(<ButtonCustom />)
  })
})
