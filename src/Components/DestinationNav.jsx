import React from 'react'
import {NavLink} from 'react-router-dom'


const DestinationNav = () => {
  return (
    <nav className='flex items-center gap-10 pb-[2vw]'>
      <NavLink to={'/destination/moon'} className={({isActive})=> `${isActive && 'border-b-2 border-white'} text-sm text-white pb-3`}>
        MOON
      </NavLink>
      <NavLink to={'/destination/mars'} className={({isActive})=> `${isActive && 'border-b-2 border-white'} text-sm text-white pb-3`}>
        MARS
      </NavLink>
      <NavLink to={'/destination/europa'} className={({isActive})=> `${isActive && 'border-b-2 border-white'} text-sm text-white pb-3`}>
        EUROPA
      </NavLink>
      <NavLink to={'/destination/titan'} className={({isActive})=> `${isActive && 'border-b-2 border-white'} text-sm text-white pb-3`}>
        TITAN
      </NavLink>
    </nav>
  )
}

export default DestinationNav
