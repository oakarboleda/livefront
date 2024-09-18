import React from 'react'

import styles from './HeadingCustom.module.css'

export interface headingCustomProps {
  prop?: string
}

export function HeadingCustom({ prop = 'default value' }: headingCustomProps) {
  return <div className={styles.HeadingCustom}>HeadingCustom {prop}</div>
}
