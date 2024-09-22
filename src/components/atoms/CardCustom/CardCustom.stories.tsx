import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CardCustom } from './CardCustom'

export default {
  title: 'Atoms/CardCustom',
  component: CardCustom,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof CardCustom>

const Template: StoryFn<typeof CardCustom> = (args) => <CardCustom {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
  title: 'Primary Card',
  children: 'This is a primary card',
  className: 'bg-indigo-400',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  title: 'Small Card',
  children: 'This is a small card',
  className: 'bg-indigo-400',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  title: 'Large Card',
  children: 'This is a large card',
  className: 'bg-indigo-400',
}
