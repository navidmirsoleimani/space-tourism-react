import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {


  const [sidebarOpen , setSidebarOpen] = useState(false)

  return (

      <nav className='absolute w-full flex items-center justify-between z-1'>
        <img src="logo.svg" className='w-12 max-sm:mt-4 ml-4 lg:ml-8' alt="" />

        <img onClick={()=>{setSidebarOpen(true)}} src="icon-hamburger.svg" className='sm:hidden w-12 mt-4 mr-4' alt="" />

        {
          sidebarOpen && (<img onClick={()=>{setSidebarOpen(false)}} src="shared/close_icon.svg" className='absolute w-12 top-4 right-4 z-1 sm:hidden' alt="" />)
        }


        <div className={`${sidebarOpen ? 'w-[60%] pl-6 pt-12' : 'w-0 overflow-hidden'} absolute top-0 right-0 min-h-dvh flex flex-col gap-8 bg-blue-950 sm:hidden`}>
          <NavLink to={'/'} className={`text-white text-lg`}>
            HOME
          </NavLink>
          <NavLink to={'/destination'} className={`text-white text-lg`}>
            DESTINATION
          </NavLink>
          <NavLink to={'/crew'} className={`text-white text-lg`}>
            CREW
          </NavLink>
          <NavLink to={'/technology'} className={`text-white text-lg`}>
            TECHNOLOGY
          </NavLink>
        </div>

        <div className='max-lg:hidden h-[1px] w-full mx-8 bg-white' />

        <div className='max-sm:hidden flex gap-8 pt-6 bg-[#1a1652c9] px-7 text-[14px] lg:gap-16 lg:pt-10 lg:pr-36 lg:pl-16 lg:bg-transparent lg:backdrop-blur-[130px]'>
          <NavLink to={'/'} className={({isActive}) => `flex gap-3 pb-6 lg:pb-10 ${isActive && 'border-b-2 border-white'}`}>
            <span className='max-lg:hidden text-white/70'>00</span>
            <p className='text-white'>HOME</p>
          </NavLink>
          <NavLink to={'/destination'} className={({isActive}) => `flex gap-3 pb-6 lg:pb-10 ${isActive && 'border-b-2 border-white'}`}>
            <span className='max-lg:hidden text-white/70'>01</span>
            <p className='text-white'>DESTINATION</p>
          </NavLink>
          <NavLink to={'/crew'} className={({isActive}) => `flex gap-3 pb-6 lg:pb-10 ${isActive && 'border-b-2 border-white'}`}>
            <span className='max-lg:hidden text-white/70'>02</span>
            <p className='text-white'>CREW</p>
          </NavLink>
          <NavLink to={'/technology'} className={({isActive}) => `flex gap-3 pb-6 lg:pb-10 ${isActive && 'border-b-2 border-white'}`}>
            <span className='max-lg:hidden text-white/70'>03</span>
            <p className='text-white'>TECHNOLOGY</p>
          </NavLink>
        </div> 
      </nav>
    
  )
}

export default Navbar
