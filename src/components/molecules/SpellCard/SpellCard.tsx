'use client'
import React, { useEffect, useState } from 'react'
import { CardCustom } from '@/components/atoms/CardCustom'
import { Spell } from '@/types/spell'
import { useRouter } from 'next/navigation'
import { CardHeader } from '@/components/atoms/CardHeader/CardHeader'
import { CardContent } from '@/components/atoms/CardContent/CardContent'
import { ButtonCustom } from '@/components/atoms/ButtonCustom/ButtonCustom'

interface spellCardProps {
  spell: Spell
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}

const SpellCard: React.FC<spellCardProps> = ({ spell }) => {
  const [flipped, setFlipped] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setFlipped(false)
  }, [spell])

  const handleOnClick = () => {
    router.push(`/spell/${spell.index}`)
  }

  return (
    <>
      <CardCustom size="medium" onClick={() => setFlipped(!flipped)}>
        <div
          className={`card-container ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="front" onClick={() => setFlipped(!flipped)}>
            <CardHeader>{spell.name}</CardHeader>
            <CardContent>
              <small>
                <p>{spell.level > 0 && `Level ${spell.level} `}</p>
                <p>{spell.school.name}</p>
                <p> {spell.level === 0 && ' cantrip'}</p>
              </small>
            </CardContent>
          </div>

          <div className={`back ${flipped ? 'flipped' : ''}`}>
            <CardContent>
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

              <ButtonCustom variant="primary" onClick={handleOnClick}>
                Learn more
              </ButtonCustom>
            </CardContent>
          </div>
        </div>
      </CardCustom>
    </>
  )
}

export default SpellCard
