import React from 'react'

export interface imageCustomProps {
  prop?: string
}

export function ImageCustom({ prop = 'default value' }: imageCustomProps) {
  return <div>ImageCustom {prop}</div>
}
