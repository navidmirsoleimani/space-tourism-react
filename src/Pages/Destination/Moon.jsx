import React from 'react'
import MoonImg from '/destination/image-moon.png'
import DestinationNav from '../../Components/DestinationNav';

const Moon = () => {
  return (
    <div className='flex items-center justify-center gap-[8vw]'>
      <img src={MoonImg} className='w-[20vw]' alt="" />
      <div className='flex flex-col gap-[2vw]'>
        <DestinationNav />
        <h1 className='text-white text-4xl xl:text-5xl'>MOON</h1>
        <p className='text-white/70 w-[40vw] pb-[2vw] border-b-2 border-white/30 max-xl:text-sm'>
        See our planet as you’ve never seen it before. A perfect trip to help regain perspective. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div className='flex gap-[5vw] justify-start items-center'>
          <div className='flex flex-col gap-3'>
            <p className='text-white/70 text-sm'>AVG. DISTANCE</p>
            <p className='text-white/90 text-xl'>384,400 KM</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-white/70 text-sm'>EST. TRAVEL TIME</p>
            <p className='text-white/90 text-xl'>3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon
