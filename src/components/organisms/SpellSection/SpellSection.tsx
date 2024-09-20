'use client'
import React, { useEffect, useState } from 'react'
import { SpellCard } from '@/components/molecules/SpellCard/SpellCard'
import { Spell } from '@/types/spell'
import { getAllSpells } from '@/api/api'

export interface spellsProps {
  spell?: Spell[]
}

export const SpellSection: React.FC<spellsProps> = ({ spell }) => {
  const [fetchedSpells, setFetchedSpells] = useState<Spell[]>(spell || [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const savedSpells = localStorage.getItem('spells')
        if (savedSpells) {
          setFetchedSpells(JSON.parse(savedSpells))
          setLoading(false)
        }
        const fetchedSpells = await getAllSpells()
        setFetchedSpells(fetchedSpells)
        localStorage.setItem('spells', JSON.stringify(fetchedSpells))
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch spells', error)
        setError(true)
        setLoading(false)
      }
    }
    fetchSpells()
  }, [])
  if (loading) {
    return <p>Loading spells...</p>
  }
  if (error) {
    return <p>Failed to fetch spells</p>
  }
  if (fetchedSpells.length === 0) {
    return <p>No spells available</p>
  }
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Spells</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fetchedSpells.map((spell, i) => (
            <SpellCard key={i} spell={spell} />
          ))}
        </div>
      </div>
    </section>
  )
}
