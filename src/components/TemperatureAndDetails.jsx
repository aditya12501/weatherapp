import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../Service/weatherServices';

function TemperatureAndDetails({weather:{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
  return (
    <div>

        <div className='flex items-center justify-center text-xl text-cyan-300 py-6'>
            <p>{details}</p>
        </div>
        <div className='flex items-center justify-between text-white py-3'>
            <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
            <p className='text-5xl text-center  '>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1" />
                    Real feel:
                    <span className='m-1 font-medium'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1" />
                    Humidity:
                    <span className='m-1 font-medium'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1" />
                    Wind:
                    <span className='m-1 font-medium'>{`${speed.toFixed()}km/h`}</span>
                </div>
            </div>






        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3  '>

            <UilSun/>
            <p className='font-light'>Rise <span className='font-medium  '>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span> </p>
            <p className='font-light'>|</p>
            <UilSunset/>
            <p className='font-light'>Set <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span> </p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>High <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span> </p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>Low <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span> </p>
            <p className='font-light'>|</p>




        </div>






    </div>
  )
}

export default TemperatureAndDetails