import { CardProps } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import Pill from './Pill'
import { FaStar, FaBed, FaShower, FaUserFriends} from 'react-icons/fa'
import Link from 'next/link'

const Card: React.FC<CardProps> = ({
     id,
    name,
    address,
    category,
    price,
    offers,
    rating,
    image,
    discount
}) => {
// width={380} height={255}
  return (
    <Link href={`/property/${id}`}>
    <section className='w-full h-auto text-black rounded-2xl transition duration-300 ease-in-out hover:bg-gray-200 p-6 hover:shadow-2xl'>
        {/* image and category */}
       <div>
        <div className='relative w-full h-auto aspect-[380/255] '>
            <Image 
                   src={image} 
                   alt={name} 
                   fill 
                   className='rounded-2xl z-0'/>
             
             {Number(discount) > 0 && (
                <div className='absolute top-5 rounded-bl-none bg-[#15a17c] text-[#EDEDED] text-xl font-bold px-2 py-2 rounded-full shadow-2xl z-20 '>
                    {discount}% off
                </div>
             )} 
             
        </div>
        <div className=' flex flex-wrap font-semibold space-y-2 space-x-2 mt-2  '>
            {category.map((pill) => (
                <Pill key={pill} label={pill} />
            ))}
        </div>
       </div> 
       {/* name and address */}
       <div>
        <div className='mb-2 mt-2'>
            <div className='flex justify-between'>
                <div className='font-bold text-xl'>{name}</div>
                <div>
                    <FaStar className='inline-block mr-1 mb-1.5  text-amber-300' />
                     <span className='font-semibold'>{rating}</span>  </div>
            </div>
            <div className='text-sm font-extralight'>{`${address.city}, ${address.state}, ${address.country}`}</div>
        </div>
       </div> 
       {/* offers and price */}
       <div className='flex justify-between'>
        <div className='flex gap-2 rounded-full  shadow-md px-2  py-2 border border-[#E9E9E9] '>
        <div className="flex items-center gap-2">
          <FaBed />
          <span className='font-bold'>{offers.bed}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaShower />
          <span className='font-bold'>{offers.shower}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends />
          <span className='font-bold'>{offers.occupants}</span>
        </div>
        </div>
        <div className='font-bold'>{`$${price}`}<span className='font-semibold'>/n</span></div>
       </div>
    </section>
    </Link>
  )
}

export default Card