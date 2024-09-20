import React from 'react'
import { Spell } from '@/types/spell'

export interface cardHeaderProps {
  children?: React.ReactNode
}

const CardHeader: React.FC<cardHeaderProps> = ({ children }) => {
  return (
    <header className="px-6 py-3.5 w-full text-2xl font-bold bg-orange-100 text-neutral-800">
      <h2>{children}</h2>
    </header>
  )
}

export default CardHeader
