import React from 'react'
import DestinationNav from '../../Components/DestinationNav';
import { Outlet } from 'react-router-dom';

const DestinationLayout = () => {
  return (
    <div className='min-h-dvh flex flex-col gap-[7vw] justify-center pt-[8vw]
    bg-[url(/destination/background-destination-mobile.jpg)]
    sm:bg-[url(/destination/background-destination-tablet.jpg)] 
    lg:bg-[url(/destination/background-destination-desktop.jpg)]
    bg-cover bg-center
    '>
      <div className='ml-[15vw]'>
          <div className='flex gap-3'>
            <p className='text-white/70'>02</p>
            <h3 className='text-white'>PICK YOUR DESTINATION</h3>
          </div>
      </div>
      <Outlet />
    </div>
  )
}

export default DestinationLayout
