import React from 'react'
import styles from './CardCustom.module.css'

export interface cardCustomProps {
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const CardCustom: React.FC<cardCustomProps> = ({
  size,
  style,
  className,
  onClick,
  children,
}) => {
  const sizeClass =
    size === 'small' ? styles.small : size === 'large' ? styles.large : styles.medium

  return (
    <div
      className={`card-container p-4 lg:w-full lg:h-full md:w-1/4 sm:w-1/2 w-full ${sizeClass} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}
