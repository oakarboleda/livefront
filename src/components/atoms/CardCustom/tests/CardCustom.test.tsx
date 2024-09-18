import React from 'react'

import { CardCustom } from '../CardCustom'
import { render } from '@testing-library/react'

describe('<CardCustom />', () => {
  it('renders without crashing', async () => {
    const container = document.createElement('div')
    render(<CardCustom />)
  })
})
