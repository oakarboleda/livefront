'use client'
import React, { useEffect, useState } from 'react'
import { CardCustom } from '@/components/atoms/CardCustom/CardCustom'
import { Spell } from '@/types/spell'
import { ButtonCustom } from '@/components/atoms/ButtonCustom/ButtonCustom'
import { useRouter } from 'next/navigation'
import { CardHeader } from '@/components/atoms/CardHeader/CardHeader'
import { CardContent } from '@/components/atoms/CardContent/CardContent'

/**
 * Props for the SpellCard component
 */
export interface SpellCardProps {
  /** The spell data to display */
  spell: Spell
  /** Optional additional CSS class names */
  className?: string
  /** Optional click handler */
  onClick?: () => void
  /** Optional inline styles */
  style?: React.CSSProperties
  /** Optional children elements */
  children?: React.ReactNode
}

/**
 * SpellCard component
 *
 * A card component that displays spell information and can be flipped to show more details.
 *
 * @param {SpellCardProps} props - The props for the component.
 * @param {Spell} props.spell - The spell data to display.
 * @param {string} [props.className] - Optional additional CSS class names.
 * @param {() => void} [props.onClick] - Optional click handler.
 * @param {React.CSSProperties} [props.style] - Optional inline styles.
 * @param {React.ReactNode} [props.children] - Optional children elements.
 * @returns {JSX.Element} The rendered spell card component.
 */
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
          role="button"
          aria-expanded={flipped}
          tabIndex={0}
          onClick={() => setFlipped(true)}
          onKeyDown={(e) => e.key === 'Enter' && setFlipped(true)}
          aria-live="polite"
          aria-label={flipped ? 'Hide spell details' : 'Show spell details'}
        >
          <CardHeader>{spell.name}</CardHeader>
          <CardContent side="front">
            {/* Customize layout for front side */}
            <p>{spell.level > 0 ? `Level ${spell.level}` : 'Cantrip'}</p>
            <p>{spell.school.name}</p>
          </CardContent>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full ${flipped ? 'block' : 'hidden'} bg-indigo-400 backface-hidden rotate-y-180`}
          role="button"
          aria-expanded={!flipped}
          tabIndex={0}
          onClick={() => setFlipped(false)}
          onKeyDown={(e) => e.key === 'Enter' && setFlipped(false)}
        >
          <CardContent side="back">
            {/* Customize layout for back side */}
            <div className="flex flex-col p-4">
              <p>
                <strong>Casting Time:</strong> {spell?.casting_time || 'N/A'}
              </p>
              <p>
                <strong>Range:</strong> {spell?.range || 'N/A'}
              </p>
              <p>
                <strong>Components:</strong> {spell?.components.join(', ') || 'N/A'}
              </p>
              <p>
                <strong>Duration:</strong> {spell?.duration || 'N/A'}
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
