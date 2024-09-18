import React from 'react'
import Spells, { SpellsProps } from './SpellSection'

export default {
  title: 'Spells',
  component: Spells,
}

export const Default = ({ spells }: SpellsProps) => <Spells spells={spells} />
