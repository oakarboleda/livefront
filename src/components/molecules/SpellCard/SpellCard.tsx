import React, { useEffect, useState } from 'react'
import styles from './SpellCard.module.css'
import { CardCustom } from '@/components/atoms/CardCustom'
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
export interface spellCardProps {
  spells?: Spell[]
  index?: string
  spell?: Spell
}

export function SpellCard({}: spellCardProps) {
  const [spells, setSpells] = useState<Spell[]>([])
  useEffect(() => {
    getAllSpells().then((fetchedSpells) => {
      const shuffledSpells = fetchedSpells.sort(() => 0.5 - Math.random())
      setSpells(shuffledSpells.slice(0, 7))
    })
  }, [])
  return (
    <CardCustom>
      <div className={styles.spellCard}>
        {spells.map((spell) => (
          <div key={spell.index} className={styles.spell}>
            <h2>{spell.name}</h2>
            <div>
              <strong>Level:</strong> {spell.level}
            </div>
            <div>
              <strong>School:</strong> {spell.school.name}
            </div>
            <div>
              <strong>Casting Time:</strong> {spell.casting_time}
            </div>
            <div>
              <strong>Range:</strong> {spell.range}
            </div>
            <div>
              <strong>Components:</strong> {spell.components.join(', ')}
            </div>
            <div>
              <strong>Duration:</strong> {spell.duration}
            </div>
          </div>
        ))}
      </div>
    </CardCustom>
  )
}
