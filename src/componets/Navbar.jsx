import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] =useState(false)

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <nav>
      <div className=" w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div onClick={handleNav} className={logo? `hidden` :"block"}>
          <h1 className="text-2xl font-bold">Nature</h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <BsFillPersonFill className="text-white" />
          <BsSearch className="text-white" />
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className="block md:hidden">


  {nav ? (
     <GrClose className="text-black" size={30} />
          ):(
       <RxHamburgerMenu className="text-white" size={30} />
          )}
   </div>

        {/* Mobile menu dropdown */}
        <div
          onClick={handleNav}
          className={`${
            nav ? 'block' : 'hidden'
          } md:hidden absolute top-0 left-0 w-full bg-pink-50 text-black px-4 py-5 flex flex-col`}
        >
          <ul>
          <h1 className="text-2xl font-bold">Nature</h1>
            <li className="border-b">Home</li>
            <li className="border-b">Destination</li>
            <li className="border-b">Travel</li>
            <li className="border-b">View</li>
            <li className="border-b">Book</li>

            <div className="flex flex-col md:hidden">
              <button className="bg-pink-600 my-4">Search</button>
              <button className="bg-pink-500">Account</button>
            </div>

            <div className="flex justify-between my-6 md:hidden">
              <BsInstagram className="icon text-pink-500" />
              <AiFillYoutube className="icon text-red-700" />
              <AiOutlineTwitter className="icon text-purple-700" />
              <BiLogoFacebookSquare className="icon text-blue-600" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
