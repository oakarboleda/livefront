import React, { useEffect, useState } from 'react'
import { SpellCard } from '@/components/molecules/SpellCard/SpellCard'
import { Spell } from '@/types/spell'
import { getAllSpells } from '@/api/api'

/**
 * Props interface for SpellSection component
 */
export interface SpellsProps {
  /** Optional array of spells to be passed as props */
  spell?: Spell[]
}

export const SpellSection: React.FC<SpellsProps> = ({ spell }) => {
  const [fetchedSpells, setFetchedSpells] = useState<Spell[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        // Attempt to load spells from local storage
        const savedSpells = localStorage.getItem('spells')
        if (savedSpells) {
          setFetchedSpells(JSON.parse(savedSpells))
          setLoading(false)
        }

        // Fetch spells from the API
        const fetchedSpells = await getAllSpells()
        setFetchedSpells(fetchedSpells)
        localStorage.setItem('spells', JSON.stringify(fetchedSpells))
        setLoading(false)
      } catch (err) {
        console.error('Failed to load spells:', err)
        setError('Unable to fetch spells. Please try again later.')
        setLoading(false)
      }
    }

    fetchSpells()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-700">Loading spells...</p>
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>
  }

  if (fetchedSpells.length === 0) {
    return <p className="text-center text-gray-700">No spells found.</p>
  }

  return (
    <section className="flex flex-col p-15 w-full h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Spells</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fetchedSpells.map((spell, i) => (
            <SpellCard key={i} spell={spell} />
          ))}
        </div>
      </div>
    </section>
  )
}
