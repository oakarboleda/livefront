import React from 'react'

interface cardContentProps {
  children?: React.ReactNode
  className?: string
}

const CardContent: React.FC<cardContentProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center py-2.5 w-full bg-indigo-400 text-base">
      <div className="flex relative flex-col px-6 pt-52 pb-4 w-full aspect-[0.975]">
        <div className="flex relative flex-col">{children}</div>
      </div>
    </div>
  )
}

export default CardContent
