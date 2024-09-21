import { Meta, StoryFn } from '@storybook/react'
import { BackgroundImage } from './BackgroundImage'
import React from 'react'

export default {
  title: 'Molecules/BackgroundImage',
  component: BackgroundImage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof BackgroundImage>

const Template: StoryFn<typeof BackgroundImage> = (args) => <BackgroundImage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  prop: 'default value',
}
