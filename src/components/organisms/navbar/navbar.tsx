import React from 'react'

import styles from './NavBar.module.css'

export interface navBarProps {
  prop?: string
}

export function NavBar({ prop = 'default value' }: navBarProps) {
  return <div className={styles.NavBar}>NavBar {prop}</div>
}
