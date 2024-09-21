import React from 'react'
import clsx from 'clsx'

/**
 * Props for the ButtonCustom component
 */
export type buttonCustomProps = {
  /** Variant of the button, can be 'primary', 'secondary', or 'danger' */
  variant?: 'primary' | 'secondary' | 'danger'
  /** Size of the button, can be 'small', 'medium', or 'large' */
  size?: 'small' | 'medium' | 'large'
  /** Content to be displayed inside the button */
  children?: React.ReactNode
  /** Click event handler for the button */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * ButtonCustom component
 *
 * A customizable button component with different variants and sizes.
 *
 * @param {buttonCustomProps} props - The props for the component.
 * @param {'primary' | 'secondary' | 'danger'} [props.variant='primary'] - The variant of the button.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - The size of the button.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] - The click event handler for the button.
 * @returns {JSX.Element} The rendered button component.
 */
export const ButtonCustom: React.FC<buttonCustomProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  ...props
}: buttonCustomProps): JSX.Element => {
  // Define the base styles
  const baseStyles =
    'inline-flex full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md transition duration-300 ease-in-out transform hover:scale-110'

  // Define the variant styles
  const variantStyles = {
    primary:
      'text-purple-700 dark:text-purple-700 bg-purple-100 hover:bg-purple-50 hover:text-purple-600 focus:ring ring-offset-2 ring-purple-100 focus:outline-none',
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
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
      aria-label={children ? undefined : 'button'}
    >
      {children}
    </button>
  )
}
