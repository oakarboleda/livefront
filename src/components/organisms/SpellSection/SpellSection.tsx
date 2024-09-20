import React, { useEffect, useState } from 'react'
import SpellCard from '@/components/molecules/SpellCard/SpellCard'
import { Spell } from '@/types/spell'
import { getAllSpells } from '@/api/api'

export interface spellsProps {
  spells?: Spell[]
}

export const SpellSection: React.FC<spellsProps> = ({ spells }) => {
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
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Spells</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {spell.map((spell) => (
            <SpellCard key={spell.index} spell={spell}></SpellCard>
          ))}
        </div>
      </div>
    </section>
  )
}
