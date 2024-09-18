import React from 'react'

import styles from './ImageCustom.module.css'

export interface imageCustomProps {
  prop?: string
}

export function ImageCustom({ prop = 'default value' }: imageCustomProps) {
  return <div className={styles.ImageCustom}>ImageCustom {prop}</div>
}
