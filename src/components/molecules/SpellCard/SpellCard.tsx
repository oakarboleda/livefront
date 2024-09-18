'use client'
import React, { useEffect, useState } from 'react'
import './SpellCard.module.css'
import CardCustom from '@/components/atoms/CardCustom'
import { Spell } from '@/types/spell'
import ButtonCustom from '@/components/atoms/ButtonCustom/ButtonCustom'
import { useRouter } from 'next/navigation'

interface SpellCardProps {
  spell: Spell
}

const SpellCard: React.FC<SpellCardProps> = ({ spell }) => {
  const [flipped, setFlipped] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setFlipped(false)
  }, [spell])

  const handleOnClick = () => {
    router.push(`/spell/${spell.index}`)
  }

  return (
    <CardCustom size="small" onClick={() => setFlipped(!flipped)}>
      <div className={`card-container mx-3 ${flipped ? ' flipped' : ''}`}>
        <div className="cardInner">
          <div
            className="front flex h-full justify-center items-center"
            onClick={() => setFlipped(!flipped)}
          >
            <h2>{spell.name}</h2>
            <small>
              {spell.level > 0 && `Level ${spell.level} `}
              {spell.school.name}
              {spell.level === 0 && ' cantrip'}
            </small>
          </div>
          <div
            className="back flex h-full justify-center items-center"
            onClick={() => setFlipped(!flipped)}
          >
            <div>
              <p>
                <strong>Casting Time:</strong> {spell.casting_time}
              </p>
              <p>
                <strong>Range:</strong> {spell.range}
              </p>
              <p>
                <strong>Components:</strong> {spell.components.join(', ')}
              </p>
              <p>
                <strong>Duration:</strong> {spell.duration}
              </p>
            </div>
            <ButtonCustom variant="primary" onClick={handleOnClick}>
              Learn more
            </ButtonCustom>
          </div>
        </div>
      </div>
    </CardCustom>
  )
}

export default SpellCard
