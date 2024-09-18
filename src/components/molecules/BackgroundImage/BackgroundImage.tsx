import React from 'react'

import styles from './BackgroundImage.module.css'

export interface backgroundImageProps {
  prop?: string
}

export function BackgroundImage({ prop = 'default value' }: backgroundImageProps) {
  return <div className={styles.BackgroundImage}>BackgroundImage {prop}</div>
}
