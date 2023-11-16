import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.jpg'

const Location = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-1 text-center'>
       <h1>Luxury Getaways</h1>
       <p className='py-5'>At the California Finest Shores</p>

       <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={img2} alt="/" />
          <img className='w-full h-full object-cover' src={img3} alt="/" />
          <img className='w-full h-full object-cover' src={img4} alt="/" />
          <img className='w-full h-full object-cover' src={img5} alt="/" />
          <img className='w-full h-full object-cover' src={img6} alt="/" />
       </div>
    </div>
  )
}
export default Location
