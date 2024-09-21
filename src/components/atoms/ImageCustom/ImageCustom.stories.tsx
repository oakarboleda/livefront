import { Meta, StoryFn } from '@storybook/react'
import { ImageCustom } from './ImageCustom'
import React from 'react'

export default {
  title: 'Atoms/ImageCustom',
  component: ImageCustom,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof ImageCustom>

const Template: StoryFn<typeof ImageCustom> = (args) => <ImageCustom {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  prop: 'default value',
}
