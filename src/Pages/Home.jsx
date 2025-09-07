import React from 'react'
import ExploreBtn from '../Components/ExploreBtn';

const Home = () => {
  return (
    <div className='min-h-dvh flex items-center md:items-end md:pb-[6%] justify-center
    bg-[url(/home/background-home-mobile.jpg)]
    sm:bg-[url(/home/background-home-tablet.jpg)] 
    lg:bg-[url(/home/background-home-desktop.jpg)]
    bg-cover bg-center'>

      <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between lg:w-full lg:px-[10vw] max-sm:gap[8vw] max-lg:gap-[5vw] items-center'>
        <div className='flex flex-col w-[70vw] md:w-[40vw] gap-[2vw] items-center lg:items-start text-center lg:text-start lg:text-lg'>
          <p className='text-white/70'>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>SPACE</h1>
          <p className='text-white/70 text-sm lg:text-[16px] leading-6'>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <ExploreBtn />
      </div>

    </div>
  )
}

export default Home
