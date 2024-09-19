import React from 'react'
import styles from './CardCustom.module.css'

export interface cardCustomProps {
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  title?: string
  imgSrc?: string
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
      className={`flex overflow-hidden flex-col rounded-xl max-w-[310px] ${sizeClass} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}
