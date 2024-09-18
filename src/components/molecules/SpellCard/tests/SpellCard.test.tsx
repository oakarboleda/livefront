import React from 'react'
import { SpellCard } from '../SpellCard'
import { render } from '@testing-library/react'

describe('<SpellCard />', () => {
  it('renders without crashing', async () => {
    const container = document.createElement('div')
    render(<SpellCard />)
  })
})
