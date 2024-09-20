import React from 'react'

/**
 * Props for the ImageCustom component
 */
export interface imageCustomProps {
  /** An optional prop to customize the image text */
  prop?: string
}

/**
 * ImageCustom component
 *
 * A customizable image component that displays a text with an optional prop.
 *
 * @param {imageCustomProps} props - The props for the component.
 * @param {string} [props.prop='default value'] - An optional prop to customize the image text.
 * @returns {JSX.Element} The rendered image component.
 */
export function ImageCustom({ prop = 'default value' }: imageCustomProps): JSX.Element {
  return <div>ImageCustom {prop}</div>
}
