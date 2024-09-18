import React from 'react'

import { HeadingCustom } from '../HeadingCustom'
import { render } from '@testing-library/react'

describe('<HeadingCustom />', () => {
  it('renders without crashing', () => {
    render(<HeadingCustom />)
  })
})
