import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { CardCustom } from './CardCustom'

const meta = {
  title: 'Atoms/CardCustom',
  component: CardCustom,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof CardCustom>

export default meta
