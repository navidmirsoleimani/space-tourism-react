import React from 'react'
import EuropaImg from '/destination/image-europa.png'
import DestinationNav from '../../Components/DestinationNav';


const Europa = () => {
  return (
    <div className='flex items-center justify-center gap-[8vw]'>
      <img src={EuropaImg} className='w-[20vw]' alt="" />
      <div className='flex flex-col gap-[2vw]'>
        <DestinationNav />
        <h1 className='text-white text-4xl xl:text-5xl'>EUROPA</h1>
        <p className='max-xl:text-sm text-white/70 w-[40vw] pb-[2vw] border-b-2 border-white/30'>
          The smallest of the four Galilean moons orbiting Jupiter. With an icy surface, it’s perfect for a bit of ice skating, or simple relaxation in your snug wintery cabin.
        </p>
        <div className='flex gap-[5vw] justify-start items-center'>
          <div className='flex flex-col gap-3'>
            <p className='text-white/70 text-sm'>AVG. DISTANCE</p>
            <p className='text-white/90 text-xl'>628 MIL. KM</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-white/70 text-sm'>EST. TRAVEL TIME</p>
            <p className='text-white/90 text-xl'>3 YEARS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Europa
