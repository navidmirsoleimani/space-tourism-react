import React from 'react'
import TitanImg from '/destination/image-titan.png'
import DestinationNav from '../../Components/DestinationNav';


const Titan = () => {
  return (
      <div className='flex items-center justify-center gap-[8vw]'>
        <img src={TitanImg} className='w-[20vw]' alt="" />
        <div className='flex flex-col gap-[2vw]'>
          <DestinationNav />
          <h1 className='text-white text-4xl xl:text-5xl'>TITAN</h1>
          <p className='max-xl:text-sm text-white/70 w-[40vw] pb-[2vw] border-b-2 border-white/30'>
              The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home. As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className='flex gap-[5vw] justify-start items-center'>
            <div className='flex flex-col gap-3'>
              <p className='text-white/70 text-sm'>AVG. DISTANCE</p>
              <p className='text-white/90 text-xl'>1.6 BIL. KM</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-white/70 text-sm'>EST. TRAVEL TIME</p>
              <p className='text-white/90 text-xl'>7 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Titan
