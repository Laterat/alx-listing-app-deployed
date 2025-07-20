import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#222222]'>
      <div className='bg-[#34967C] h-6'></div>
      <div className='flex flex-col gap-9 p-10 justify-between md: lg:flex-row'>

        <div className='flex flex-col md:px-10 md:mb-4 '>
          <Image src='/assets/vector white.png' alt='logo' width={58.73} height={30.6} className='mb-4'/>
          <p className='text-[#CACACA] w-fit md:w-xl'>
            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-x-12 gap-y-6 w-fit px-10  md:grid-cols-3 md:w-full lg:w-2xl'>
          <div className='w-fit'>
            <h2 className='text-[#CACACA] mb-4 font-medium text-2xl'>Explore</h2>
            <ul className='text-[#CACACA] text-sm'>
              <li className='mb-2'>Apartments in Dubai</li>
              <li className='mb-2'>Hotels in New York</li>
              <li className='mb-2'>Villa in Spain</li>
              <li className='mb-2'>Mansion in Indonesia</li>
            </ul>
          </div>
          <div className='w-fit'>
            <h2 className='text-[#CACACA] mb-4 font-medium text-2xl'>Company</h2>
            <ul className='text-[#CACACA] text-sm'>
              <li className='mb-2'>About us</li>
              <li className='mb-2'>Blog</li>
              <li className='mb-2'>Career</li>
              <li className='mb-2'>Customers</li>
              <li className='mb-2'>Brand</li>
            </ul>
          </div>
          <div className='w-fit'>
            <h2 className='text-[#CACACA] mb-4 font-medium text-2xl'>Help</h2>
            <ul className='text-[#CACACA] text-sm'>
              <li className='mb-2'>Support</li>
              <li className='mb-2'>Cancel booking</li>
              <li className='mb-2'>Refunds Process</li>
            </ul>
          </div>
        </div>
      </div>


      <hr className="border-t border-gray-100 mx-5 mt-10 mb-4" />


      <div className='flex flex-col py-3 text-[#CACACA] gap-8  pb-6 md:items-center md:justify-center lg:flex lg:flex-row lg:justify-between  lg:px-14 '>
        <div className='text-sm mx-5 text-center w-fit md:text-base lg:mx-5'>Some hotel requires you to cancel more than 24 hours before check-in. Details <span className='text-[#34967C]'>here</span></div>
        <div className='mb-10 text-sm flex items-center justify-center gap-4 ml-4 mr-4   md:mb-2'>
          <div>Terms of Service</div>
          <div>Policy service</div>
          <div>Cookies Policy</div>
          <div className='hidden lg:inline-block'>Partners</div>  {/*desktop: '1728px' */}
        </div>
      </div>
{/* md:ml-24 lg:ml-0 */}



    </footer>
  )
}

export default Footer