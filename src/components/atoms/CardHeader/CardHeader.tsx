import React from 'react'

/**
 * Props for the CardHeader component
 */
export interface cardHeaderProps {
  /** Optional children elements to be rendered inside the card header */
  children?: React.ReactNode
}

/**
 * CardHeader component
 *
 * A component that renders a header for a card with optional children elements.
 *
 * @param {cardHeaderProps} props - The props for the component.
 * @param {React.ReactNode} [props.children] - Optional children elements to be rendered inside the card header.
 * @returns {JSX.Element} The rendered card header component.
 */
export const CardHeader: React.FC<cardHeaderProps> = ({
  children,
}: cardHeaderProps): JSX.Element => {
  return (
    <header
      className="px-6 py-3.5 w-full text-2xl font-bold bg-orange-100 text-neutral-800"
      role="banner"
    >
      <h2 tabIndex={0}>{children}</h2>
    </header>
  )
}
