import React from 'react'

/**
 * Props for the CardHeader component
 */
export interface CardHeaderProps {
  /** Optional children elements to be rendered inside the card header */
  children?: React.ReactNode
  className?: string
}

/**
 * CardHeader component
 *
 * A component that renders a header for a card with optional children elements.
 *
 * @param {CardHeaderProps} props - The props for the component.
 * @param {React.ReactNode} [props.children] - Optional children elements to be rendered inside the card header.
 * @returns {JSX.Element} The rendered card header component.
 */
export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}: CardHeaderProps): JSX.Element => {
  return (
    <header
      className="h-12 px-6 py-3.5 w-full text-base sm:text-sm md:text-base lg:text-lg bg-orange-100 text-neutral-800 flex items-center justify-center overflow-hidden truncate"
      role="banner"
    >
      <h2 tabIndex={0}>{children}</h2>
    </header>
  )
}
