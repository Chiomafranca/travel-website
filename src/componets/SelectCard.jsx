import React from 'react'

const SelectCard = (props) => {
  return (
    <>
    <div className='relative'>
    <img className='h-full w-full object-cover' src={props.bg} alt="/"/>
    <div className='absolute top-0 left-0 w-full h-full'>
       <p className='left-4 bottom-4 text-2xl text-white absolute font-bold'>{props.text}</p>
    </div>
 </div>

</>
  )
}

export default SelectCard
