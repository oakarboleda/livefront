import React, { useEffect, useState } from 'react'
import { SpellCard } from '@/components/molecules/SpellCard/SpellCard'
import { getAllSpells } from '@/api/api' // Assuming getAllSpells is imported from an api file

interface Spell {
  index: string
  name: string
  level: number
  school: {
    name: string
  }
  casting_time: string
  range: string
  components: string[]
  duration: string
}

export interface spellsProps {
  spell?: Spell[]
}

export default function SpellSection({ spell }: spellsProps) {
  const [spells, setSpells] = useState<Spell[]>([])

  useEffect(() => {
    getAllSpells()
      .then((fetchedSpells) => {
        setSpells(fetchedSpells)
      })
      .catch((error) => {
        console.error('Error fetching spells:', error)
      })
  }, [])

  return (
    <div className="flex w-2/4 gap-8 flex-wrap justify-center h-screen py-10">
      {spells.length === 0 && <span className="loading">Loading...</span>}
      {spells.map((spell, index) => (
        <SpellCard key={spell.index} spell={spell} />
      ))}
    </div>
  )
}
