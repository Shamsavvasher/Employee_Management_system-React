import React from 'react'

export const Header = () => {
  return (
    <div className='flex items-end justify-between text-white text-3xl '>
        <h1 className=' font-semibold'>Hello <br />Sham 👋 </h1><br />
       
        <button className='bg-red-600 text-lg font-medium rounded-md px-2 py-1'>Logout</button>    
    </div>
  )
}