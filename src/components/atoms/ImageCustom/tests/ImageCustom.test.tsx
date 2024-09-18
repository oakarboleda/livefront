import React from 'react'
import { ImageCustom } from '../ImageCustom'
import { render } from '@testing-library/react'

describe('<ImageCustom />', () => {
  it('renders without crashing', () => {
    render(<ImageCustom src="example.jpg" alt="Example" />)
  })
})
