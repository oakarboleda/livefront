import { render } from '@testing-library/react'
import HeroImage from './avatar'

test('Should render the hero image with default props', () => {
  const { container } = render(<HeroImage />)
  expect(container.querySelector('Img'))
})
