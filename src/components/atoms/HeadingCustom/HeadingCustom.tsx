import React from 'react'

export interface headingCustomProps {
  prop?: string
}

export function HeadingCustom({ prop = 'default value' }: headingCustomProps) {
  return <div className="">HeadingCustom {prop}</div>
}
