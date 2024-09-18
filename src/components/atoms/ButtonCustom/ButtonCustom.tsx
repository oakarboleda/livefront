import React from 'react'

import styles from './ButtonCustom.module.css'

export interface buttonCustomProps {
  prop?: string
}

export function ButtonCustom({ prop = 'default value' }: buttonCustomProps) {
  return <div className={styles.ButtonCustom}>ButtonCustom {prop}</div>
}
