import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CardHeader } from './CardHeader'
export default {
  title: 'Atoms/CardHeader',
  component: CardHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'center',
  },
  args: {
    children: 'Card Header',
  },
} as Meta<typeof CardHeader>
const Template: StoryFn<typeof CardHeader> = (args) => <CardHeader {...args} />
export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  children: 'Card Header',
}
