// property detail

import { PropertyProps } from "@/interfaces/index";
import { FaStar,FaMapMarkerAlt, FaUserCircle, FaBed, FaShower, FaUserFriends } from "react-icons/fa";



const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
 
    return (
    
    <div className="container mx-auto min-w-full px-10 mt-10 ">
      <div className=" items-center py-2 ">
             <h1 className="text-4xl lg:text-6xl text-[#161117] font-bold">{property.name}</h1>
      </div>
     
      <div className="flex items-center gap-9  py-4  lg:text-3xl">
            <div className="flex gap-3">
                               <FaStar className='inline-block mr-1 mb-1.5  text-amber-300' />
                                <span className='text-[#161117] font-semibold'>  {property.rating}</span>
                                <span className="text-[#929292] ">   (345 reviews)  </span>
              </div>
             <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#161117]" />
                    <span className="text-[#929292]"> {property.address.city}, {property.address.state}, {property.address.country} </span>
             </div>
        
            <div className="flex items-center gap-1">
                   <FaUserCircle className="text-[#161117]" />
                   <span className="text-[#929292]">Mainstream</span>
              </div>
              <div className="ml-auto">
                <span className="text-black">save   share</span>
              </div>
      </div>
      
    
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4  mb-10 ">
        <img src={property.image} alt={property.name} className="w-full  h-full object-cover rounded-tl-4xl rounded-bl-4xl" />
           
            {/* Add more images */}
          <div className="hidden md:flex flex-col gap-2 h-full ">
              <img src={property.image} alt={property.name} className="h-1/2 w-full object-cover rounded-tr-4xl" />
                <div className="hidden gap-2 md:flex h-1/2">
                  <img src={property.image} alt={property.name} className="w-1/2  object-cover  " />
                  <img src={property.image} alt={property.name} className="w-1/2  object-cover  rounded-br-4xl" />
                </div>
           </div>
      </div>

      <div className='flex flex-wrap gap-5'>
             
              <div className="flex items-center px-6 py-3 rounded-full  shadow-sm border border-[#929292] gap-2">
                 <FaBed className="text-[#161117]" />
                  <span className='text-[#161117] font-bold'>{property.offers.bed} Bedrooms</span>
              </div>
             
              <div className="flex items-center px-6 py-3 rounded-full  shadow-sm border border-[#929292] gap-2">
                  <FaShower className="text-[#161117]" />
                  <span className='text-[#161117] font-bold'>{property.offers.shower} Bathroom</span>
              </div>
              
              <div className="flex items-center px-6 py-3 rounded-full  shadow-sm border border-[#929292] gap-2">
                  <FaUserFriends className="text-[#161117]"  />
                  <span className='text-[#161117] font-bold it'>{property.offers.occupants} guests</span>
              </div>
             
             
        </div>
     
      
      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>


      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>


      
    </div>
  );
};

export default PropertyDetail;