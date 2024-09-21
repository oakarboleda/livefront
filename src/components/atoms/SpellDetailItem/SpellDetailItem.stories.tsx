import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { SpellDetailItem } from './SpellDetailItem'

export default {
  title: 'Atoms/SpellDetailItem',
  component: SpellDetailItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Spell Title',
    content: 'Spell content goes here.',
  },
} as Meta<typeof SpellDetailItem>

const Template: StoryFn<typeof SpellDetailItem> = (args) => <SpellDetailItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Spell Title',
  content: 'Spell content goes here.',
}
