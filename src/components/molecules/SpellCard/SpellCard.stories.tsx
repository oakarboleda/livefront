import { Meta, StoryFn } from '@storybook/react'
import { SpellCard } from './SpellCard'
import React from 'react'

export default {
  title: 'Molecules/SpellCard',
  component: SpellCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof SpellCard>

const Template: StoryFn<typeof SpellCard> = (args) => <SpellCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
