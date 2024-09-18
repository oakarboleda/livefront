import React, { useEffect, useState } from 'react'
import { SpellCard } from '@/components/molecules/SpellCard/SpellCard'
import { getAllSpells } from '@/api/api'

export type Spell = {
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
export type spellsProps = {
  spells?: Spell[]
}

export default function SpellSection({}: spellsProps) {
  const [spells, setSpells] = useState<Spell[]>([])

  useEffect(() => {
    getAllSpells().then((fetchedSpells) => {
      const shuffledSpells = fetchedSpells.sort(() => 0.5 - Math.random())
      setSpells(shuffledSpells.slice(0, 7))
    })
  }, [])

  return (
    <div className="flex w-2/4 gap-8 flex-wrap justify-center h-screen py-10">
      {spells.length === 0 && <span className="loading">Loading...</span>}
      {spells.map((spell) => (
        <SpellCard key={spell.index} />
      ))}
    </div>
  )
}
