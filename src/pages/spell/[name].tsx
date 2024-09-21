'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router' // Use 'next/navigation' if using Next.js App Router
import { Spell } from '@/types/spell'
import { getSpellByNameAndIndex } from '@/api/api'
import RootLayout from '@/app/layout'
import { SpellDetailItem } from '@/components/atoms/SpellDetailItem/SpellDetailItem'

/**
 * Component to display the details of a spell.
 * Fetches spell data based on the name query parameter from the URL.
 * Displays various details about the spell including casting time, range, components, duration, etc.
 */
const SpellDetails: React.FC = () => {
  const router = useRouter()
  const { name } = router.query

  const [spell, setSpell] = useState<Spell | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  // Fetch spell data when the name query parameter changes
  useEffect(() => {
    if (name) {
      getSpellByNameAndIndex(name as string)
        .then((data) => {
          setSpell(data as Spell)
          setLoading(false)
        })
        .catch((error) => {
          setError(error.message)
          setLoading(false)
        })
    }
  }, [name])

  if (loading) {
    return <div className="text-center text-gray-700">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  if (!spell) {
    return <div className="text-center text-gray-700">No spell data available.</div>
  }

  return (
    <RootLayout>
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-5 mt-16 py-5">
          <div className="text-center mb-10">
            <h2 className="font-semibold text-3xl">Spell Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
            {/* Casting Time & Range */}
            <div className="grid grid-cols-2 gap-4">
              {spell.casting_time && (
                <SpellDetailItem title="Casting Time" content={spell.casting_time} />
              )}
              {spell.range && <SpellDetailItem title="Range" content={spell.range} />}
            </div>

            {/* Components & Duration */}
            <div className="grid grid-cols-2 gap-4">
              {spell.components && spell.components.length > 0 && (
                <SpellDetailItem title="Components" content={spell.components.join(', ')} />
              )}
              {spell.duration && <SpellDetailItem title="Duration" content={spell.duration} />}
            </div>

            {/* Description */}
            {spell.desc && spell.desc.length > 0 && (
              <div className="col-span-2 py-5">
                <SpellDetailItem title="Description" content={spell.desc} />
              </div>
            )}

            {spell.higher_level && spell.higher_level.length > 0 && (
              <div className="col-span-2 py-5">
                <SpellDetailItem title="Higher Level" content={spell.higher_level} />
              </div>
            )}

            <div className="grid grid-col-4 gap-10 py-5">
              {typeof spell.level === 'number' && (
                <SpellDetailItem title="Level" content={spell.level} />
              )}
              {spell.school && (
                <SpellDetailItem
                  title="School"
                  content={`${spell.school.name} (${spell.school.level})`}
                />
              )}
              {spell.attack_type && (
                <SpellDetailItem title="Attack Type" content={spell.attack_type} />
              )}
              {typeof spell.concentration === 'boolean' && (
                <SpellDetailItem
                  title="Concentration"
                  content={spell.concentration ? 'Yes' : 'No'}
                />
              )}
            </div>
            <div className="grid grid-col-4 gap-10 py-5">
              {spell.ritual !== undefined && (
                <SpellDetailItem title="Ritual" content={spell.ritual ? 'Yes' : 'No'} />
              )}
              {spell.area_of_effect !== undefined && (
                <SpellDetailItem
                  title="Area of Effect"
                  content={`${spell.area_of_effect.size} ${spell.area_of_effect.type}`}
                />
              )}
              {spell.material !== undefined && (
                <SpellDetailItem title="Material" content={spell.material} />
              )}
              {spell.classes && spell.classes.length > 0 && (
                <SpellDetailItem
                  title="Classes"
                  content={
                    <ul className="list-disc ml-5">
                      {Array.isArray(spell.classes) &&
                        spell.classes.map((cls: { index: string; name: string; level: number }) => (
                          <ul key={cls.index}>
                            <li>{cls.name}</li>
                            <li>{cls.level}</li>
                          </ul>
                        ))}
                    </ul>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default SpellDetails
