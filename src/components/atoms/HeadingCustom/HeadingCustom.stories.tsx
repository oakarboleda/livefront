import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { HeadingCustom, headingCustomProps } from './HeadingCustom'

export default {
  title: 'Atoms/HeadingCustom',
  component: HeadingCustom,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} as Meta<typeof HeadingCustom>

const Template: StoryFn<headingCustomProps> = (args) => <HeadingCustom {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Heading Title',
}
