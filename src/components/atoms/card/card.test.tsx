import { fireEvent, render } from '@testing-library/react'
import SkillCard, { CardProps } from './card'

const mockSpell: CardProps['spell'] = {
  name: 'Test Spell',
  level: 1,
  school: { name: 'Test School' },
  casting_time: '1 action',
  range: 'Self',
  components: ['V', 'S', 'M'],
  duration: 'Instantaneous',
  index: '',
}

test('renders the front of the card when initially loaded', () => {
  const { getByText } = render(<SkillCard spell={mockSpell} />)
  const spellNameElement = getByText(/Test Spell/i)
  const spellLevelElement = getByText(/Level 1 Test School/i)

  expect(spellNameElement).toBeInTheDocument()
  expect(spellLevelElement).toBeInTheDocument()
})
test('flips the card when the front is clicked', () => {
  const { getByText } = render(<SkillCard spell={mockSpell} />)
  const frontElement = getByText(/Test Spell/i)

  fireEvent.click(frontElement)

  const backElement = getByText(/Casting Time/i)
  expect(backElement).toBeInTheDocument()
})

test('displays the spell name and level correctly', () => {
  const { getByText } = render(<SkillCard spell={mockSpell} />)
  const spellNameElement = getByText(/Test Spell/i)
  const spellLevelElement = getByText(/Level 1 Test School/i)

  expect(spellNameElement).toBeInTheDocument()
  expect(spellLevelElement).toBeInTheDocument()
})
