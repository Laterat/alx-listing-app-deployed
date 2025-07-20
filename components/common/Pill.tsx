import { PillProps } from '@/interfaces'
import React from 'react'

const Pill: React.FC<PillProps> = ({
    label,
    bgColor = 'bg-gray-50',
    textColor = 'text-[#161117]',
    className,
    children
}) => {
  return (
    <button className={`${bgColor} ${textColor}  border border-[#E9E9E9] rounded-3xl max-h-fit  px-4 py-2 ${className} transition duration-300 ease-in-out hover:bg-green-100 hover:text-green-600 hover:border-green-600`}>{label || children}</button>
  )
}

export default Pill