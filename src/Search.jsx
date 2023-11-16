import React from 'react'
import {AiTwotoneCustomerService} from 'react-icons/ai'

import  {TbBrandBooking} from 'react-icons/tb'

const Search = () => {
  return (
 <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>

<div className='lg:col-span-2 flex flex-col justify-evenly'>
<div>

<h2 className='py-3'>Exclusive Getaways for Couples</h2>

<p className='py-4'>Come experience the very pinnacle of lurury caribbean all-inclusive vacations for Couples all BEACHES Reports Our lurury beach resorts set along the most gorgeous tropical settings and acqullie beaches in saint lucail jamaica anigue. The bahamas cread At BEACHES, we have curated a world of enchantment where you and your partner can unwind, recharge, and revel in the romance of each day. Stroll hand in hand along the soft, sun-kissed sands, take a dip in the crystal-clear waters, or enjoy a private moment under a star-studded Caribbean sky
</p>
</div>

<div className='grid sm:grid-cols-2 gap-2 py-4'>

<div className='flex flex-col lg:flex-row items-center text-center gap-3'>
<button className='bg-pink-600 rounded-full'>
   <TbBrandBooking size={40}/>
</button>
<div>
   <h2 className='py-2'>Exemplary Hospitality</h2>
   <p className='py-1'>Two Decades of Unrivaled Excellence</p>
</div>

</div>     

<div className='flex flex-col lg:flex-row items-center text-center gap-3'>
<button className='bg-pink-600 rounded-full'>
   <AiTwotoneCustomerService size={40}/>
</button>

<div >
   <h2 className='py-2'>Exemplary Hospitality</h2>
   <p className='py-1'>Two Decades of Unrivaled Excellence</p>
</div>

 </div> 
</div>
</div>

  <div className=''>
    <div  className='border text-center'>
    <p>Enjoy an extra 20% discount</p>
    <p className='py-4'>Only 8 hours remaining</p>
    <p className='bg-pink-900 text-gray-100 py-2'>Reserve now and enjoy savings</p>
    </div>

    <form>
      <div className='flex flex-col my-2'>
      <label>Location</label>
     <select className='border rounded-md p-2'>
        <option>Antigua Grand</option>
        <option>Maldives</option>
        <option>California.</option>
        <option>Los Angeles,</option>
     </select>
      </div>

<div className='flex flex-col my-2'>
   <label>arriva</label>
   <input className='border rounded-md p-2' type="date" />
</div>
<div className='flex flex-col my-2'>
    <label>departure</label>
    <input className='border rounded-md p-2'  type="date" />
</div>

 <button className='bg-pink-400 w-full py-2'>Rates</button>

  </form>
  </div>

</div>
  )
}

export default Search
