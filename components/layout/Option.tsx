import { type OptionProps } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

const Option: React.FC<OptionProps> = ({image, alt, className}) => {
  return (
 <div className={`w-[100px] h-[100px] flex items-center justify-center flex-shrink-0 overflow-hidden ${className}`}>
      <div className="relative w-[60px] h-[88px]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Option