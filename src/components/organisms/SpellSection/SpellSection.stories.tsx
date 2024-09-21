import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SpellSection from './SpellSection'

const meta: Meta<typeof SpellSection> = {
  component: SpellSection,
}

export default meta

type Story = StoryObj<typeof SpellSection>

export const Basic: Story = { args: {} }
