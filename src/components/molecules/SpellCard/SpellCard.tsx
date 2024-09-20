'use client'
import React, { useEffect, useState } from 'react'
import { CardCustom } from '@/components/atoms/CardCustom/CardCustom'
import { Spell } from '@/types/spell'
import { ButtonCustom } from '@/components/atoms/ButtonCustom/ButtonCustom'
import { useRouter } from 'next/navigation'
import { CardHeader } from '@/components/atoms/CardHeader/CardHeader'
import { CardContent } from '@/components/atoms/CardContent/CardContent'

interface SpellCardProps {
  spell: Spell
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const SpellCard: React.FC<SpellCardProps> = ({ spell, children }) => {
  const [flipped, setFlipped] = useState(false)
  const router = useRouter()

  // Reset flip state when the spell changes
  useEffect(() => {
    setFlipped(false)
  }, [spell])

  /**
   * Navigate to the spell details page.
   */
  const handleOnClick = () => {
    router.push(`/spell/${spell.index}`)
  }

  // Handle missing spell data
  if (!spell) {
    return <p className="text-center">No spell data available</p>
  }

  return (
    <CardCustom
      size="medium"
      className="relative perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-indigo-400 backface-hidden transition-transform duration-700 transform ${
            flipped ? 'rotate-y-180' : 'rotate-y-0'
          }`}
        >
          <CardHeader>{spell.name}</CardHeader>
          <CardContent side="front">
            {/* Customize layout for front side */}
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-xl font-bold">Spell Name: {spell.name}</h2>
              <p>{spell.level > 0 ? `Level ${spell.level}` : 'Cantrip'}</p>
              <p>{spell.school.name}</p>
            </div>
          </CardContent>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full ${flipped ? 'block' : 'hidden'} bg-indigo-400 backface-hidden rotate-y-180`}
        >
          <CardContent side="back">
            {/* Customize layout for back side */}
            <div className="flex flex-col p-4">
              <p>
                <strong>Casting Time:</strong> {spell?.casting_time}
              </p>
              <p>
                <strong>Range:</strong> {spell?.range}
              </p>
              <p>
                <strong>Components:</strong> {spell?.components.join(', ')}
              </p>
              <p>
                <strong>Duration:</strong> {spell?.duration}
              </p>

              <div className="mt-4">
                <ButtonCustom variant="primary" onClick={handleOnClick}>
                  Learn more
                </ButtonCustom>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </CardCustom>
  )
}
