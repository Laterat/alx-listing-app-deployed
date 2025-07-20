import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/Vector.png'
import { FaSearch } from 'react-icons/fa'
import Options from './Options'


const Header = () => {
  return (
    <header className='min-w-screen '>
      <div className='flex items-center justify-center pt-8 bg-[#34967C] text-white text-sm px-4 h-23 space-x-3 md:h-12  md:pt-0 md:text-lg'>
        <div>Overseas trip? Get the latest information on travel guides</div>  
        <button className='bg-[#161117] rounded-full min-w-[86px] p-1'>More Info</button>
      </div>
      <div className='flex justify-between items-center h-16 my-3 px-4 border border-amber-50  md:px-16'>
        <Image src={logo} alt='logo' className='hidden md:inline-block'/>

        {/* Tablet view search */}
        <form className=" hidden relative bg-white px-4 rounded-full border border-[#BEBEBE]  w-full max-w-[737px] mx-auto md:flex justify-between gap-y-4 h-full md:w-[80%]">

          {/* Location */}
          <div className="relative w-full md:w-[40%] lg:w-[28%]">
            <label htmlFor="dest" className="absolute top-1 left-3 text-[#161117] text-sm">Location</label>
            <input
              type="text"
              id="dest"
              placeholder="Search for destination"
              className="pt-6 pb-2 px-4 w-full border-r  text-[#BEBEBE] focus:outline-none"
            />
          </div>

          {/* Check In */}
          <div className="relative w-[48%] md:w-[28%]">
            <label htmlFor="check-in" className="absolute top-1 left-3 text-[#161117] text-sm">Check In</label>
            <input
              type="text"
              id="check-in"
              placeholder="Add date"
              className="pt-6 pb-2 px-4 w-full border-r  text-[#BEBEBE] focus:outline-none"
            />
          </div>

          {/* Check Out */}
          <div className="relative w-[48%] md:w-[28%]">
            <label htmlFor="check-out" className="absolute top-1 left-3 text-[#161117] text-sm">Check Out</label>
            <input
              type="text"
              id="check-out"
              placeholder="Add date"
              className="pt-6 pb-2 px-4 w-full border-r  text-[#BEBEBE] focus:outline-none"
            />
          </div>

          {/* People */}
          <div className="relative w-[48%] md:w-[28%]">
            <label htmlFor="people" className="absolute top-1 left-3 text-[#161117] text-sm">People</label>
            <input
              type="text"
              id="people"
              placeholder="Add guest"
              className="pt-6 pb-2 px-4 w-full text-[#BEBEBE] focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end justify-end w-[48%] md:w-[10%]">
            <button type="submit" className="bg-[#FFA800] text-white p-3 rounded-full text-center w-auto h-auto mb-2">
              <FaSearch className="text-xl" />
            </button>
          </div>

        </form>

        {/* Mobile view */}
        <div className='container border border-[#BEBEBE] py-4  max-w-[318px] rounded-full max-h-full md:hidden'>
          <form className='flex items-center ml-5  -mt-4 mb-56'>
            <div className='flex flex-col '>
              <label htmlFor='location' className='text-[#161117]'>Where to</label>
              <input type='text' placeholder='Location' className=' w-28 text-[#BEBEBE]' />
            </div>
            <input type='text' placeholder='Date' className=' w-15 pt-5.5 -ml-8 text-[#BEBEBE]' />
            <input type='text' placeholder='Add Guest' className=' w-20 pt-5.5 text-[#BEBEBE]' />
            <div className="flex items-end justify-end w-[48%] md:w-[10%]">
            <button type="submit" className="bg-[#FFA800] text-white p-3 rounded-full text-center w-auto h-auto mt-2 mx-2">
              <FaSearch className="text-xl" />
            </button>
          </div>
          </form>
        </div>

        <div className='hidden lg:flex gap-2 whitespace-nowrap'>
          <button className='bg-[#34967C] p-2 rounded-4xl'>Sign in</button>
          <button className='border border-[#ECECEC] bg-white text-black p-2 rounded-4xl'>Sign up</button>
        </div>

        <Image src='/assets/profile 1.png' alt='profile' width={46} height={46} className='lg:hidden bg-[#34967C]'/>
      </div>
      <div className='flex overflow-x-auto whitespace-nowrap px-4 gap-x-4 md:px-16 items-center  hide-scrollbar'>
        <Options  />
      </div>
    </header>
  )
}

export default Header