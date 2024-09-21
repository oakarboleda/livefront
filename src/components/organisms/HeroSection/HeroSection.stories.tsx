import { Meta, StoryFn } from '@storybook/react'
import HeroSection from './HeroSection'
import React from 'react'

export default {
  title: 'Organisms/NavBar',
  component: HeroSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered full',
  },
  args: {},
} satisfies Meta<typeof HeroSection>

const Template: StoryFn<typeof HeroSection> = (args) => <HeroSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // This is the default prop value for the component
  prop: 'default value',
}
