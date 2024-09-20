import React from 'react'

interface CardContentProps {
  children?: React.ReactNode
  className?: string
  side?: 'front' | 'back'
  onClick?: () => void
  style?: React.CSSProperties
}

export const CardContent: React.FC<CardContentProps> = ({
  side = 'front',
  onClick,
  className = '',

  children,
}) => {
  return (
    <div
      className={`flex flex-col justify-center py-2.5 w-full text-base ${className} bg-indigo-400`}
    >
      {side === 'front' ? (
        <div className="flex flex-col items-center">
          {/* Front side layout */}
          <div className="flex flex-col justify-center">
            <ul className="list-disc ml-4">{children}</ul>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {/* Back side layout */}
          <div>
            <ul className="list-disc ml-4">{children}</ul>
          </div>
        </div>
      )}
    </div>
  )
}
