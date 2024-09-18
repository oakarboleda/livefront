import React from 'react'

import styles from './CardCustom.module.css'

export interface cardCustomProps {
  prop?: string
}

export function CardCustom({ prop = 'default value' }: cardCustomProps) {
  return (
    <div className="transform rounded-xl sm:h-2/4 sm:w-64">
      <div className="card-container p-4 lg:w-full lg:h-full md:w-1/4 sm:w-1/2 w-full">{prop}</div>
    </div>
  )
}
