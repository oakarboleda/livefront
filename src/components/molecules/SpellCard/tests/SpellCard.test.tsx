import React from 'react'
import { SpellCard } from '../SpellCard'
import { render, fireEvent } from '@testing-library/react'
import { Spell } from '@/types/spell'
import { mock } from 'node:test'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

const mockSpell: Spell = {
  area_of_effect: { size: 0, type: '' },
  attack_type: '',
  classes: { index: '', level: 0, name: '', url: '' },
  concentration: false,
  desc: [],
  higher_level: '',
  material: '',
  ritual: false,
  index: '1',
  name: 'Magic Missile',
  level: 1,
  school: {
    name: 'Evocation',
    level: 0,
  },
  casting_time: '1 action',
  range: '120 feet',
  components: ['V', 'S'],
  duration: 'Instantaneous',
}

describe('<SpellCard />', () => {
  it('renders spell name and level', () => {
    const { getByText } = render(<SpellCard spell={mockSpell} />)
    expect(getByText('Magic Missile')).toBeInTheDocument()
    expect(getByText('Level 1')).toBeInTheDocument()
  })

  it('renders spell school', () => {
    const { getByText } = render(<SpellCard spell={mockSpell} />)
    expect(getByText('Evocation')).toBeInTheDocument()
  })

  it('flips back to show front side on click', () => {
    const { getByRole, getByText } = render(<SpellCard spell={mockSpell} />)
    const frontSide = getByRole('button', { name: 'Show spell details' })
    fireEvent.click(frontSide)
    const backSide = getByRole('button', { name: 'Hide spell details' })
    fireEvent.click(backSide)
    expect(getByText('Magic Missile')).toBeInTheDocument()
  })
})
