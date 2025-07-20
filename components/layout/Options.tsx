import React from 'react'
import Option from './Option'


const Options: React.FC = () => {

        const optionsData = [
    { image: '/assets/frames/Frame 28.png', alt: 'Rooms' },
    { image: '/assets/frames/Frame 31.png', alt: 'Mansion' },
    { image: '/assets/frames/Frame 46.png', alt: 'Countryside' },
    { image: '/assets/frames/Frame 30.png', alt: 'Villa' },
    { image: '/assets/frames/Frame 32.png', alt: 'Tropical' },
    { image: '/assets/frames/Frame 34.png', alt: 'Amazing pool' },
    { image: '/assets/frames/Frame 35.png', alt: 'Beach house' },
    { image: '/assets/frames/Frame 36.png', alt: 'Island' },
    { image: '/assets/frames/Frame 37.png', alt: 'Camping' },
    { image: '/assets/frames/Frame 38.png', alt: 'Apartment' },
    { image: '/assets/frames/Frame 39.png', alt: 'House' },
    { image: '/assets/frames/Frame 40.png', alt: 'Lakefront' },
    { image: '/assets/frames/Frame 41.png', alt: 'Farm house' },
    { image: '/assets/frames/Frame 42.png', alt: 'Tree house' },
    { image: '/assets/frames/Frame 43.png', alt: 'Cabins' },
    { image: '/assets/frames/Frame 44.png', alt: 'Castles' },
  ]

  return (
    <> 
             {optionsData.map(
                     (item, index)=>(
                         <Option key={index}
                                   image={item.image}
                                   alt={item.alt}
                                   width={60}
                                   height={88}
                                   className='w-[100px] flex-shrink-0 inline-block'
                          />
                     )
             )}
    </>
  )
}

export default Options