import React from 'react'
import SpellSection, { spellsProps } from './SpellSection'

export default {
  title: 'SpellSection',
  component: SpellSection,
}

export const Default = ({ spells }: spellsProps) => <SpellSection spells={spells} />
