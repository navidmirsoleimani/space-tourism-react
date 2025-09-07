import React, { useEffect, useState } from 'react'
import { technologyData } from '../../public/technology/technologyData'

const Technology = () => {

    const [data , setData] = useState([])
    const [currentIndex , setCurrentIndex] = useState(0)

    useEffect(()=>{
        setData(technologyData)
    },[])
    
    

    


    if (data.length === 0) return <p className='text-white'>Loading</p>

  return (
    <div className='min-h-dvh flex flex-col gap-[3vw] justify-center pt-[10vw]
    bg-[url(/technology/background-technology-mobile.jpg)]
    sm:bg-[url(/technology/background-technology-tablet.jpg)] 
    lg:bg-[url(/technology/background-technology-desktop.jpg)]
    bg-cover bg-center
    '>


      <div className='ml-[10vw] xl:text-lg'>
          <div className='flex gap-3'>
            <p className='text-white/70'>03</p>
            <h3 className='text-white'>SPACE LAUNCH 101</h3>
          </div>
      </div>

      {
        <div className='flex items-center justify-between'>
        <div className='flex gap-[4vw] px-[10vw]'>
          <div className='flex flex-col justify-between cursor-pointer'>
            <div onClick={()=>{setCurrentIndex(0)}} className={`${currentIndex === 0 ? 'bg-white text-black' : 'bg-transparent text-white'} flex items-center justify-center text-2xl w-17 h-17 border-2 border-white rounded-full`}>1</div>
            <div onClick={()=>{setCurrentIndex(1)}} className={`${currentIndex === 1 ? 'bg-white text-black' : 'bg-transparent text-white'} flex items-center justify-center text-2xl w-17 h-17 border-2 border-white rounded-full`}>2</div>
            <div onClick={()=>{setCurrentIndex(2)}} className={`${currentIndex === 2 ? 'bg-white text-black' : 'bg-transparent text-white'} flex items-center justify-center text-2xl w-17 h-17 border-2 border-white rounded-full`}>3</div>
          </div>
          <div className='flex flex-col py-[1vw]'>
            <h3 className='text-white/60 text-lg xl:text-2xl'>{data[currentIndex].title}</h3>
            <h3 className='text-white text-4xl xl:text-6xl mt-[1vw] mb-[3vw]'>{data[currentIndex].name}</h3>
            <p className='text-white/70 xl:text-lg'>{data[currentIndex].description}</p>
          </div>
        </div>
        <img className='w-[30vw]' src={data[currentIndex].image} alt="" />
      </div>
      }


    </div>
  )
}

export default Technology
