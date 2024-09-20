import React from 'react'

import { CardContent } from '../CardContent'
import { render } from '@testing-library/react'

describe('<CardCustom />', () => {
  it('renders without crashing', async () => {
    const container = document.createElement('div')
    render(<CardContent spell={spell} />)
  })
})
