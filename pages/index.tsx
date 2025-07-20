import React from 'react'
import Pill from '@/components/common/Pill'
import Card from '@/components/common/Card'
import Image from 'next/image'
import { PROPERTYLISTINGSAMPLE } from '@/constants'
import Head from "next/head";

const index: React.FC = () => {

  const samples = PROPERTYLISTINGSAMPLE
  return (
    <>
        <Head>
        <title>Alx listing app</title>
      </Head>
{/* width={1608} height={481} */}
      <section className='w-full flex flex-col-reverse px-4 md:px-16 md:flex-col space-y-2'>
        <div className='relative w-full h-72 md:h-[481px]'>
          <Image src='/assets/Image1.png' 
                 alt='background image'
                   className='rounded-3xl  object-cover'
                    fill 
                    priority
                    />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-3">
            <p className='text-4xl md:text-5xl font-extrabold '>Find Your Favorite Place Here</p>
            <p className='text-sm md:text-base'>The best prices for over 2 million properties worldwide</p>
          </div>
        </div>
   
        <div className=' flex flex-row-reverse mt-4  md:justify-between md:flex-row'>
          <div className='flex overflow-x-auto whitespace-nowrap hide-scrollbar font-semibold mb-7 lg:w-3xl space-x-6 lg:justify-between lg:space-x-0'>
           
            <div className="flex items-center space-x-2 md:hidden lg:hidden">
                 <div className="w-[30px] h-[40px] relative">
                       <Image
                            src="/assets/frames/Frame 51.png"
                            alt="Frame 51"
                           fill
                          className="object-cover"
                        />
                 </div>
            </div>
           
            <Pill label='All' className=' sm:inline-block'/>
            <Pill label='Top Villa' className='sm:inline-block'/>
            <Pill label='Free Schedule' className=' sm:inline-block'/>
            <Pill label='Book Now, Pay later' className='md:hidden lg:inline-block'/>
            <Pill label='Self CheckIn' className='md:hidden  lg:inline-block'/>
            <Pill label='Instant Book' className='md:hidden lg:inline-block'/>

             <div className='hidden md:flex md:items-center md:space-x-2 lg:hidden'>
                   <div className="w-[30px] h-[40px] relative">
                       <Image
                            src="/assets/frames/Frame 92.png"
                            alt="Frame 51"
                           fill
                          className="object-cover"
                        />
                 </div>
             </div>
         </div>
 
          <div className=' hidden md:flex md:w-auto space-x-2 lg:space-x-2'>
              <div className="hidden md:inline-block md:items-center md:space-x-3 lg:hidden">
                 <div className="w-[30px] h-[40px] relative">
                       <Image
                            src="/assets/frames/Frame 51.png"
                            alt="Frame 51"
                           fill
                          className="object-cover"
                        />
                 </div>
            </div>
            <Pill label='' className='hidden sm:hidden md:hidden  lg:flex lg:items-center lg:gap-3 '><span>Filter</span>
                       <Image
                         src="/assets/frames/Frame Filter .png" // or wherever your filter icon is
                         alt="Filter Icon"
                         width={16}
                         height={16}
                         />
            </Pill>
            <Pill  label='' className='hidden sm:hidden md:inline-block'>
              Sort By:  <span className="font-bold"> Highest Price</span>
             </Pill>
          </div>
        </div>
      </section>


        <section className='w-full mt-4  grid grid-cols-1 gap-2  md:px-16 md:grid-cols-2 lg:grid-cols-4'>
          {samples.map((sample, index) => (
            <Card key={index} 
                   id={index}
                   name={sample.name} 
                   address={sample.address} 
                   rating={sample.rating} 
                   category={sample.category}
                    price={sample.price} 
                    offers={sample.offers} 
                    image={sample.image}
                     discount={sample.discount}/>
          ))}
        </section>
        <section className='mt-16 mb-5 flex  flex-col justify-center items-center'>
             <button  className='bg-black rounded-full px-3 py-2 w-30 mb-4'>Show more</button>
             <p className='text-sm text-black'>Click to see more listing</p>
        </section>
        
    </>
  )
}

export default index