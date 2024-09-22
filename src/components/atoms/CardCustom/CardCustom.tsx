import React from 'react'

/**
 * Props for the CardCustom component
 */
export interface cardCustomProps {
  /** Size of the card, can be 'small', 'medium', or 'large' */
  size?: 'small' | 'medium' | 'large'
  /** Click event handler for the card */
  onClick?: () => void
  /** Content to be displayed inside the card */
  children?: React.ReactNode
  /** Additional class names for styling */
  className?: string
  /** Title of the card */
  title?: string
  /** Source URL for the card image */
  imgSrc?: string
}

/**
 * CardCustom component
 *
 * A customizable card component with different sizes.
 *
 * @param {cardCustomProps} props - The props for the component.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - The size of the card.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {() => void} [props.onClick] - Click event handler for the card.
 * @param {React.ReactNode} [props.children] - Content to be displayed inside the card.
 * @returns {JSX.Element} The rendered card component.
 */
export const CardCustom: React.FC<cardCustomProps> = ({
  size = 'medium', // Default size
  className,
  onClick,
  children,
  title,
}: cardCustomProps): JSX.Element => {
  // Map size prop to Tailwind classes
  const sizeClass =
    size === 'small'
      ? 'h-80' // small size equivalent (example: 16rem x 20rem)
      : size === 'large'
        ? ' h-112' // large size equivalent (example: 24rem x 28rem)
        : ' h-96' // default medium size (example: 20rem x 24rem)

  return (
    <div
      className={`flex justify-center items-center gap-8 flex-col-1 ${sizeClass} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
      aria-label={title}
    >
      {children}
    </div>
  )
}
