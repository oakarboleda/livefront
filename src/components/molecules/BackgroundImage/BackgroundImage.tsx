import React from 'react'

/**
 * Props for the BackgroundImage component
 */
export interface backgroundImageProps {
  /** An optional prop to customize the background image text */
  prop?: string
  /** Alternative text for the background image */
  alt?: string
}

/**
 * BackgroundImage component
 *
 * A customizable background image component that displays a text with an optional prop.
 *
 * @param {backgroundImageProps} props - The props for the component.
 * @param {string} [props.prop='default value'] - An optional prop to customize the background image text.
 * @param {string} [props.alt] - Alternative text for the background image.
 * @returns {JSX.Element} The rendered background image component.
 */
export function BackgroundImage({ prop = 'default value' }: backgroundImageProps) {
  return <div>BackgroundImage {prop}</div>
}
