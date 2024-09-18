import React from 'react'

import styles from './SpellCard.module.css'

export interface spellCardProps {
  prop?: string
}

export function SpellCard({ prop = 'default value' }: spellCardProps) {
  return <div className={styles.SpellCard}>SpellCard {prop}</div>
}
