'use client'

import { FC, ReactNode } from 'react'
import Image from 'next/image'

interface PageBackgroundProps {
  children: ReactNode;
}

const PageBackground: FC<PageBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Fond avec gradient et pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50 pointer-events-none backdrop-blur-sm">
        <Image
          src="/background/wave-top.svg"
          alt="Wave Pattern"
          fill
          className="object-cover opacity-30 blur-[3px]"
          priority
        />
      </div>
      
      {/* Contenu */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default PageBackground 