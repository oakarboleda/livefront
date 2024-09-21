import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CardContent, cardContentProps } from './CardContent'

export default {
  title: 'Atoms/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      control: {
        type: 'select',
        options: ['front', 'back'],
      },
    },
  },
} as Meta

const Template: StoryFn<cardContentProps> = (args) => <CardContent {...args} />

export const FrontSide = Template.bind({})
FrontSide.args = {
  side: 'front',
  children: 'This is the front side content',
}

export const BackSide = Template.bind({})
BackSide.args = {
  side: 'back',
  children: 'This is the back side content',
}
