import React from 'react'
import { DiReact } from 'react-icons/di'


function Hero() {
  return (
    <div className=' justify-between flex w-screen p-7 pr-16' >

      <div className=' text-3xl text-cyan-300 flex '>
        <DiReact className=' mt-1' />
        <h1>React-icons</h1>
      </div>

      <ul className=' flex gap-9 text-green-700 text-2xl cursor-pointer'>
        <li className='cursor-pointer text-black hover:text-teal-400'>Abaut</li>
        <li className='cursor-pointer text-black hover:text-teal-400'>Home</li>
        <li className='cursor-pointer text-black hover:text-teal-400'>Other</li>
      </ul>
      
    </div>
  )
}

export default Hero
