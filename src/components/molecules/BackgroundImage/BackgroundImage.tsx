import React from 'react'

export interface backgroundImageProps {
  prop?: string
  alt?: string
}

export function BackgroundImage({ prop = 'default value' }: backgroundImageProps) {
  return <div>BackgroundImage {prop}</div>
}
