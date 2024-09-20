import React from 'react'
import { CardContent } from '../CardContent'
import { render } from '@testing-library/react'

describe('<CardCustom />', () => {
  const spell = {
    index: '1',
    name: 'name',
    level: 1,
    school: {
      name: 'school',
    },
    casting_time: 'casting_time',
    range: 'range',
    components: ['components'],
    duration: 'duration',
  }
  it('renders without crashing', async () => {
    render(<CardContent spell={spell} />)
  })
})
