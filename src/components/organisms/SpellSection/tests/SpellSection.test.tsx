import React from 'react'
import { render } from '@testing-library/react'
import SpellSection from '../SpellSection'

describe('<SpellSection />', () => {
  it('renders without crashing', async () => {
    render(<SpellSection />)
  })
})
