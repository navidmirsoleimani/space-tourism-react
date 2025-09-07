import React from 'react'
import { Link } from 'react-router-dom';

const ExploreBtn = () => {
  return (
    <Link to={'/destination'} className={`bg-white text-lg lg:text-2xl w-40 h-40 lg:w-50 lg:h-50 flex items-center justify-center rounded-full`}>
      EXPLORE
    </Link>
  )
}

export default ExploreBtn
