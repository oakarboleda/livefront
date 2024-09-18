import React from 'react'

import { AvatarImage } from '../AvatarImage'
import { render } from '@testing-library/react'

describe('<AvatarImage />', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div')
    render(<AvatarImage />)
  })
})
