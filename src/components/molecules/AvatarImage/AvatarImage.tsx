import React from 'react'

import styles from './AvatarImage.module.css'

export interface avatarImageProps {
  prop?: string
}

export function AvatarImage({ prop = 'default value' }: avatarImageProps) {
  return <div className={styles.AvatarImage}>AvatarImage {prop}</div>
}
