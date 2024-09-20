import React from 'react'

import styles from './AvatarImage.module.css'

export interface avatarImageProps {
  prop?: string
  alt?: string
}

export function AvatarImage({ prop = 'default value' }: avatarImageProps) {
  return <div>AvatarImage {prop}</div>
}
