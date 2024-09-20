import React from 'react'

/**
 * Props for the CardContent component
 */
export interface cardContentProps {
  /** Optional children elements to be rendered inside the card */
  children?: React.ReactNode
  /** Additional class names for styling */
  className?: string
  /** Side of the card, can be 'front' or 'back' */
  side?: 'front' | 'back'
  /** Click event handler for the card */
  onClick?: () => void
  /** Inline styles for the card */
  style?: React.CSSProperties
}

/**
 * CardContent component
 *
 * A component that renders content for the front or back side of a card.
 *
 * @param {CardContentProps} props - The props for the component.
 * @param {React.ReactNode} [props.children] - Optional children elements to be rendered inside the card.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {'front' | 'back'} [props.side='front'] - Side of the card, can be 'front' or 'back'.
 * @param {() => void} [props.onClick] - Click event handler for the card.
 * @param {React.CSSProperties} [props.style] - Inline styles for the card.
 * @returns {JSX.Element} The rendered card content component.
 */
export const CardContent: React.FC<cardContentProps> = ({
  side = 'front',
  onClick,
  className = '',
  children,
}: cardContentProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col justify-center py-2.5 w-full text-base ${className} bg-indigo-400`}
    >
      {side === 'front' ? (
        <div className="flex relative flex-col px-6 pt-52 pb-4 w-full aspect-[0.975] text-white">
          {/* Front side layout */}
          <div className="flex relative flex-col">
            <ul className="list-disc ml-4">{children}</ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Back side layout */}
          <div className="flex flex-col">
            <ul className="list-disc ml-4">{children}</ul>
          </div>
        </div>
      )}
    </div>
  )
}
