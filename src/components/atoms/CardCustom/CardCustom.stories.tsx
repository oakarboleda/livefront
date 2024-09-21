import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CardCustom } from './CardCustom'
export default {
  title: 'Atoms/CardCustom',
  component: CardCustom,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'center',
  },
  args: {
    size: 'medium',
  },
} as Meta<typeof CardCustom>
const Template: StoryFn<typeof CardCustom> = (args) => <CardCustom {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}
