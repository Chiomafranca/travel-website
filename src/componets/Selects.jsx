import React from 'react'
import leak1 from '../assets/leak1.jpg'
import leak2 from '../assets/leak2.jpg'
import leak3 from '../assets/leak3.jpg'
import leak4 from '../assets/leak4.jpg'
import leak5 from '../assets/leak5.jpg'
import leak6 from '../assets/leak6.avif'
import SelectCard from './SelectCard'



const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
       
  
   <SelectCard bg={leak1} text="Nigeria"/>
   <SelectCard bg={leak2} text="London"/>
   <SelectCard bg={leak3} text="USA"/>
   <SelectCard bg={leak4} text="Spain"/>
   <SelectCard bg={leak5} text="Germany"/>
   <SelectCard bg={leak6} text="Maldives"/>
    </div>
  )
}

export default Selects

