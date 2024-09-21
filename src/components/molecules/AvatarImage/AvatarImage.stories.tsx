import { Meta, StoryFn } from '@storybook/react'
import { AvatarImage } from './AvatarImage'
import React from 'react'

export default {
  title: 'Molecules/ImageCustom',
  component: AvatarImage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof AvatarImage>

const Template: StoryFn<typeof AvatarImage> = (args) => <AvatarImage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  prop: 'default value',
}
