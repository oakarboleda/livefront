import { Meta, StoryFn } from '@storybook/react'
import SpellSection from './SpellSection'
import React from 'react'

export default {
  title: 'Organisms/SpellSection',
  component: SpellSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered full',
  },
  args: {},
} satisfies Meta<typeof SpellSection>

const Template: StoryFn<typeof SpellSection> = (args) => <SpellSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  prop: 'default value',
}
