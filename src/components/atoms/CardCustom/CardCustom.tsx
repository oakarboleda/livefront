import React from 'react'

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
  size = 'medium', // Default size
  style,
  className,
  onClick,
  children,
}) => {
  // Map size prop to Tailwind classes
  const sizeClass =
    size === 'small'
      ? 'w-64 h-80' // small size equivalent (example: 16rem x 20rem)
      : size === 'large'
        ? 'w-96 h-112' // large size equivalent (example: 24rem x 28rem)
        : 'w-80 h-96' // default medium size (example: 20rem x 24rem)
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
