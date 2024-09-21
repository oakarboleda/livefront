import React from 'react'

/**
 * Props for the AvatarImage component
 */
export interface avatarImageProps {
  /** An optional prop to customize the avatar image text */
  prop?: string
  /** Alternative text for the avatar image */
  alt?: string
}

/**
 * AvatarImage component
 *
 * A customizable avatar image component that displays a text with an optional prop.
 *
 * @param {avatarImageProps} props - The props for the component.
 * @param {string} [props.prop='default value'] - An optional prop to customize the avatar image text.
 * @param {string} [props.alt] - Alternative text for the avatar image.
 * @returns {JSX.Element} The rendered avatar image component.
 */
export function AvatarImage({ prop = 'default value' }: avatarImageProps) {
  return <div>AvatarImage {prop}</div>
}
