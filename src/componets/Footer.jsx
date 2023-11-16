import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className='w-full bg-pink-100 py-16'>
        <div className='max-w-[1240] mx-auto flex flex-col px-4'>
          <div className='sm:flex text-center justify-between items-center'>
            <h1>Nature</h1>
    
          <div className='flex justify-between w-full sm:max-w-[280px] py-4'>
              <BsInstagram className="icon text-pink-500" />
              <AiFillYoutube className="icon text-red-700" />
              <AiOutlineTwitter className="icon text-purple-700" />
              <BiLogoFacebookSquare className="icon text-blue-600" />
            </div>
            </div>

            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Co-founding</li>
                    <li>Contact</li>
                    <li>Home</li>
                    <li>News</li>
                    <li>Show</li>
                </ul>
                <ul className='text-right lg:flex'>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
