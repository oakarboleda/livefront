import React from 'react'
import { SpellDetailItem } from '../SpellDetailItem'
import { render } from '@testing-library/react'
const mockContent = {
  title: 'title',
  content: 'content',
}
describe('SpellDetailItem', function () {
  it('should render without crashing', () => {
    render(<SpellDetailItem title={mockContent.title} content={mockContent.content} />)
  })

  it('should display the correct title', () => {
    const { getByText } = render(
      <SpellDetailItem title={mockContent.title} content={mockContent.content} />,
    )
    expect(getByText(`${mockContent.title}:`)).toBeTruthy()
  })

  it('should display the correct content', () => {
    const { getByText } = render(
      <SpellDetailItem title={mockContent.title} content={mockContent.content} />,
    )
    expect(getByText(mockContent.content)).toBeTruthy()
  })
})
