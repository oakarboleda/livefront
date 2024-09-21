import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import HeroSection from './HeroSection'

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
}

export default meta

type Story = StoryObj<typeof HeroSection>

export const Basic: Story = { args: {} }
