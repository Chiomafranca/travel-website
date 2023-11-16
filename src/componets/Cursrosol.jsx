import React, { useState } from 'react'
import {BsArrowRightSquare} from 'react-icons/bs'
import {LuArrowLeftSquare} from 'react-icons/lu'

const sliderData =[
   {
    url:"https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=1559&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
    url:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
    url:"https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
]

const Cursrosol = () => {

    const [slide, setSlide] =useState(0)

    const length = sliderData.length
    console.log(length)
    
    const prevSlide = () =>{
      setSlide(slide === length - 1 ? 0 : slide+1)
    }
    
    const nextSlide =() =>{
        setSlide(slide === 0 ? length - 1 : slide- 1)
    }


  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowRightSquare onClick={prevSlide} size={40} className='absolute right-2 top-[50%] text-3xl text-white cursor-pointer'/>
        <LuArrowLeftSquare onClick={nextSlide} size={50}  className='absolute left-2 top-[50%] text-3xl text-white cursor-pointer'/>
l
    {sliderData.map((item, index) =>(
      <div className={index === slide ? `opacity-100` : `opacity-0`} key={index}>
        {index === slide && <img className='w-full h-full object-cover rounded-md' src={item.url} alt="/" />}
       </div>
    ))}
    </div>
  )
}

export default Cursrosol
