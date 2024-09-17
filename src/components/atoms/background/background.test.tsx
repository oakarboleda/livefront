// background.test.tsx
import { render } from '@testing-library/react'
import BackgroundImage from './background'

test('Should not render anything when the component is not used', () => {
  const { container } = render(<BackgroundImage />)
  expect(container.querySelector('background-image')).toBeNull()
})
