import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SpellCard from './SpellCard'

const meta: Meta<typeof SpellCard> = {
  component: SpellCard,
}

export default meta

type Story = StoryObj<typeof SpellCard>

export const Basic: Story = { args: {} }
