import React from 'react'

/**
 * Props for the HeadingCustom component
 */
export interface headingCustomProps {
  /** An optional prop to customize the heading text */
  prop?: string
}

/**
 * HeadingCustom component
 *
 * A customizable heading component that displays a heading with an optional prop.
 *
 * @param {headingCustomProps} props - The props for the component.
 * @param {string} [props.prop='default value'] - An optional prop to customize the heading text.
 * @returns {JSX.Element} The rendered heading component.
 */
export function HeadingCustom({ prop = 'default value' }: headingCustomProps): JSX.Element {
  return <div className="">HeadingCustom {prop}</div>
}
