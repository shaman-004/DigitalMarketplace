
'use client';
import React, { useState } from 'react'
const Navitems = () => {
  const[activeIndex, setActiveIndex] = useState<null | number>(null)
  return (
    <div className='flex justify-center items-center  gap-4 h-full sm:text-left'>
      <div className='flex items-center'>
        <a
          href='#'
          className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
        >
          Home
        </a>
      </div>
      <div className='flex items-center'>
        <a
          href='#'
          className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
        >
          About
        </a>
      </div>
      <div className='flex items-center'>
        <a
          href='#'
          className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
        >
          Contact
        </a>
      </div>
      <div className='flex items-center'>
        <a
          href='#'
          className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
        >
          Blog
        </a>
      </div>
    </div>
  )
}

export default Navitems