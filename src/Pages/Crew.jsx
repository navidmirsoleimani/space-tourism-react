import React, { useEffect, useState } from 'react'
import { crewData } from '../../public/crew/crewData'

const Crew = () => {

    const [data , setData] = useState([])
    const [currentIndex , setCurrentIndex] = useState(0)

    useEffect(()=>{
        setData(crewData);
    },[])

    useEffect(()=>{
        if (data.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex)=>
            prevIndex + 1 < data.length ? prevIndex+1 : 0
            );
        }, 10000);

        return ()=>
            clearInterval(interval)
    },[data])

    


    if (data.length===0) return <p className='text-white text-lg'>Loading</p>

  return (
    <div className=' min-h-dvh flex flex-col gap-[4vw] items-start pl-[10%] justify-end
    bg-[url(/crew/background-crew-mobile.jpg)]
    sm:bg-[url(/crew/background-crew-tablet.jpg)] 
    lg:bg-[url(/crew/background-crew-desktop.jpg)]
    bg-cover bg-center
    '>

          <div className='flex gap-3 xl:text-lg'>
            <p className='text-white/70'>02</p>
            <h3 className='text-white'>MEET YOUR CREW</h3>
          </div>

          {
            <div className='z-1'>
                <div className='w-[35vw] flex flex-col gap-[2vw]'>
                    <h3 className='text-white/80 lg:text-lg xl:text-xl'>{data[currentIndex].title}</h3>
                    <h3 className='text-white lg:text-5xl xl:text-6xl'>{data[currentIndex].name}</h3>
                    <p className='text-white/80 pb-[3vw] max-xl:text-sm border-b-2 border-white'>{data[currentIndex].description}</p>
                    <div className='flex gap-[1vw] pt-[1%] pb-[5vw]'>
                      <div className={`${currentIndex === 3 ? 'bg-white' : 'bg-white/60'} w-3 h-3 rounded-full `} />
                      <div className={`${currentIndex === 2 ? 'bg-white' : 'bg-white/60'} w-3 h-3 rounded-full `} />
                      <div className={`${currentIndex === 1 ? 'bg-white' : 'bg-white/60'} w-3 h-3 rounded-full `} />
                      <div className={`${currentIndex === 0 ? 'bg-white' : 'bg-white/60'} w-3 h-3 rounded-full `} />
                    </div>
                </div>
            </div>
          }

          <img src={data[currentIndex].image} className='w-[20%] absolute bottom-0 right-20' alt="" />
        
      

    </div>
  )
}

export default Crew
