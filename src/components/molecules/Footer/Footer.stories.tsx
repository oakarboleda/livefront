import { Meta, StoryFn } from '@storybook/react'
import { Footer } from './Footer'
import React from 'react'

export default {
  title: 'Molecules/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered full',
  },
  args: {},
} satisfies Meta<typeof Footer>

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  prop: 'default value',
}
