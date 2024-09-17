import { render } from '@testing-library/react'
import HeroImage from './avatar'

test('Should render the hero image with default props', () => {
  const { getByAltText } = render(<HeroImage />)
  const heroImage = getByAltText('hero')
  expect(heroImage).toBeInTheDocument()
})
