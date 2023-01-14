import React, { useState } from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';

function Inputs({setQuery,units,setUnits}) {
  const [city,setCity] = useState("");
  const handleSearchClick = () => {
    if(city !== "") setQuery({q: city})
  }
  const handleLocationClick = () => {
    toast.info('Fetching users location.');
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched');

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className='flex  flex-row justify-center my-6'>
        <div  className='flex flex-row justify-center space-x-4 w-3/4' >
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder='Search' className='text-xl font-light shadow-lg capitalize placeholder:lowercase focus:outline-none   p-2 w-full '></input>
            <UilSearch onClick={handleSearchClick} size={30} className='hover:scale-125   text-white cursor-pointer transition ease-out  '   />
            <UilLocationPoint onClick={handleLocationClick} size={30} className='hover:scale-125  text-white cursor-pointer transition ease-out  ' />

        </div>
        <div className='flex flex-row w-1/4 items-center justify-center '>
            <button className='text-xl text-white hover:scale-125 font-light transition ease-out'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button className='text-xl text-white hover:scale-125 font-light transition ease-out'>°F</button>
        </div>


    </div>
  )
}

export default Inputs