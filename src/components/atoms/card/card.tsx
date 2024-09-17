import React, { useEffect, useState } from 'react'
import { Spell } from '@/components/organisms/skills/skills'

export type CardProps = {
  spell: Spell
}

const SkillCard: React.FC<CardProps> = ({ spell }) => {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="transform rounded-xl sm:h-2/4 sm:w-64">
      <div
        className={`card-container p-4 lg:w-full lg:h-full md:w-1/4 sm:w-1/2 w-full' ${flipped ? ' flipped' : ''}`}
      >
        <div
          className="front flex h-full justify-center items-center"
          onClick={() => setFlipped(!flipped)}
        >
          <p>{spell.name}</p>
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
          <p>
            <strong>Casting Time</strong>
            {spell.casting_time}
          </p>
          <p>
            <strong>Range</strong>
            {spell.range}
          </p>
          <p>
            <strong>Components</strong>
            {spell.components.join(', ')}
          </p>
          <p>
            <strong>Duration</strong>
            {spell.duration}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
