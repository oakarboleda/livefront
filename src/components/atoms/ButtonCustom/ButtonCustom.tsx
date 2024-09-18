import React from 'react'
import clsx from 'clsx'
import styles from './ButtonCustom.module.css'

export type buttonCustomProps = {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonCustom: React.FC<buttonCustomProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  ...props
}) => {
  // Define the base styles
  const baseStyles =
    'inline-flex items-center justify-center border border-transparent rounded-md shadow-sm font-medium focus:outline-none'

  // Define the variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  // Define the size styles
  const sizeStyles = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-lg',
  }

  // Combine all styles using clsx
  const buttonClasses = clsx(baseStyles, variantStyles[variant], sizeStyles[size])
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default ButtonCustom
