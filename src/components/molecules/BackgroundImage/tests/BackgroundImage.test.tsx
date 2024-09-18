import React from 'react'
import { BackgroundImage } from '../BackgroundImage'
import { render } from '@testing-library/react'
describe('<BackgroundImage />', () => {
  it('renders without crashing', async () => {
    const container = document.createElement('div')
    render(<BackgroundImage />)
  })
})
