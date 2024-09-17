// button.test.tsx
import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('Should render the button component with the correct class name', () => {
  const { container } = render(<Button />)
  expect(container.querySelector('button'))
})
