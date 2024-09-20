import React from 'react'
import ButtonCustom from '@/components/atoms/ButtonCustom/ButtonCustom'
import { Spell } from '@/types/spell'

interface cardContentProps {
  children?: React.ReactNode
  className?: string
  side?: 'front' | 'back'
  onClick?: () => void
  style?: React.CSSProperties
  spell: Spell
}

export const CardContent: React.FC<cardContentProps> = ({
  side = 'front',
  onClick,
  className = '',
  spell,
}) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <div
      className={`flex flex-col justify-center py-2.5 w-full text-base ${className} ${
        side === 'front' ? 'bg-indigo-400' : 'bg-indigo-400'
      }`}
    >
      {side === 'front' ? (
        <div className="flex">
          {/* Front side layout */}
          <div className="flex flex-col justify-center relative  px-6 pt-auto pb-4 w-full aspect-[0.975]">
            <ul className="list-disc ml-4 text-slate-50">
              <p>{spell.level > 0 && `Level ${spell.level} `}</p>
              <p>{spell.school?.name}</p>
              <p> {spell.level === 0 && ' cantrip'}</p>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 w-full">
          {/* Back side layout */}
          <div>
            <ul className="list-disc ml-4">
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
              <ButtonCustom variant="primary" onClick={handleOnClick}>
                Learn more
              </ButtonCustom>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
