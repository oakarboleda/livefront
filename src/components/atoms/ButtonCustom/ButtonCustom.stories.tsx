import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ButtonCustom, buttonCustomProps } from './ButtonCustom'

export default {
  title: 'Atoms/ButtonCustom',
  component: ButtonCustom,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

const Template: StoryFn<buttonCustomProps> = (args) => <ButtonCustom {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Secondary Button',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  size: 'medium',
  children: 'Danger Button',
}
