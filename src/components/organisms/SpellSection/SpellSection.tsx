import React, { useEffect, useState } from 'react'
import SpellCard from '@/components/molecules/SpellCard/SpellCard'
import { Spell } from '@/types/spell'
import { getAllSpells } from '@/api/api'

export interface spellsProps {
  spells?: Spell[]
}

const SpellSection: React.FC<spellsProps> = ({ spells }) => {
  const [spell, setSpell] = useState<Spell[]>([])

  useEffect(() => {
    const savedSpells = localStorage.getItem('spells')
    if (savedSpells) setSpell(JSON.parse(savedSpells))
    getAllSpells().then((fetchedSpells) => {
      setSpell(fetchedSpells)
      localStorage.setItem('spells', JSON.stringify(fetchedSpells))
    })
  }, [])

  return (
    <div className="grid grid-cols-5 gap-8 py-7 px-4">
      {spell.map((spell) => (
        <SpellCard key={spell.index} spell={spell}></SpellCard>
      ))}
    </div>
  )
}

export default SpellSection
