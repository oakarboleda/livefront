'use client'
import React, { useEffect, useState } from 'react'
import { CardCustom } from '@/components/atoms/CardCustom/CardCustom'
import { Spell } from '@/types/spell'
import ButtonCustom from '@/components/atoms/ButtonCustom/ButtonCustom'
import { useRouter } from 'next/navigation'
import { CardHeader } from '@/components/atoms/CardHeader/CardHeader'
import { CardContent } from '@/components/atoms/CardContent/CardContent'

interface spellCardProps {
  spell: Spell
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const SpellCard: React.FC<spellCardProps> = ({ spell, children }) => {
  const [flipped, setFlipped] = useState(false)

  const router = useRouter()
  // Reset flip state when spell changes
  useEffect(() => {
    setFlipped(false)
  }, [spell])

  /**
   * This navigates to the spell page
   */
  const handleOnClick = () => {
    router.push(`/spell/${spell.index}`)
  }
  // // Handle missing spell content
  // if (!spell || spell.index) {
  //   return <p>No spell data available</p>
  // }
  return (
    <>
      <CardCustom
        size="small"
        className="relative w-full h-full perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform ${
            flipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front side */}
          <div
            className={`absolute w-full h-full bg-indigo-400 backface-hidden transition-transform duration-700 transform ${
              flipped ? 'rotate-y-180' : 'rotate-y-0'
            }`}
          >
            <CardHeader>{spell.name}</CardHeader>
            <CardContent spell={spell} side="front">
              {children}
            </CardContent>
          </div>

          {/* Back side */}
          <div
            className={`absolute w-full h-full ${flipped ? 'block' : 'hidden'} bg-indigo-400 backface-hidden rotate-y-180`}
          >
            <CardHeader>Information</CardHeader>
            <CardContent spell={spell} side="back">
              {children}
            </CardContent>
          </div>
        </div>
      </CardCustom>
    </>
  )
}
