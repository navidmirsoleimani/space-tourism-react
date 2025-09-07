import React from 'react'
import MarsImg from '/destination/image-mars.png'
import DestinationNav from '../../Components/DestinationNav';


const Mars = () => {
  return (
      <div className='flex items-center justify-center gap-[8vw]'>
        <img src={MarsImg} className='w-[20vw]' alt="" />
        <div className='flex flex-col gap-[2vw]'>
          <DestinationNav />
          <h1 className='text-white text-4xl xl:text-5xl'>MARS</h1>
          <p className='max-xl:text-sm text-white/70 w-[40vw] pb-[2vw] border-b-2 border-white/30'>
              Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
          </p>
          <div className='flex gap-[5vw] justify-start items-center'>
            <div className='flex flex-col gap-3'>
              <p className='text-white/70 text-sm'>AVG. DISTANCE</p>
              <p className='text-white/90 text-xl'>225 MIL. KM</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-white/70 text-sm'>EST. TRAVEL TIME</p>
              <p className='text-white/90 text-xl'>9 MONTH</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Mars
