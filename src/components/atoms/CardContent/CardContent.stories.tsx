import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { CardContent } from './CardContent'

const meta: Meta<typeof CardContent> = {
  component: CardContent,
}

export default meta

type Story = StoryObj<typeof CardContent>

export const Basic: Story = { args: {} }
