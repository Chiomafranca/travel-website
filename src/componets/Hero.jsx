import React from 'react'
import bg_vidoe from '../assets/bg_vidoe.mp4'
import { BsSearch } from 'react-icons/bs';

const Hero = () => {
  return (
 <div className='w-full h-screen relative'>
   <video className='w-full h-full object-cover' 
     src={bg_vidoe}
     autoPlay 
      loop
       muted>
   </video>

   <div className=' absolute w-full h-full top-0 left-0 bg-gray-800/70'> 
  </div>
   <div className=' absolute top-0 bottom-8 w-full h-full flex flex-col justify-center text-center text-gray-300'>
    <h1>Qulity First Class</h1>
  <h2 className='py-4'>The best worldwide 100%</h2>
  <form className='flex justify-between items-center border-none max-w-[700px] mx-auto w-full border p-1  rounded-md text-black bg-gray-200/10'>

 <div>
     <input className='bg-transparent w-[300px] sm:w-[400px] font-Roboto outline-none' type="text" placeholder='search Location'/>
  </div>

 <div className='bg-gray-300 bg-opacity-40 rounded-full'>
      <button><BsSearch size={20} className='icon text-white'/></button>
 </div>
 </form>
   </div>
    </div>
  )
}

export default Hero
