"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="md:container bg-white/70 backdrop-blur-md shadow-md md:p-2 p-3 dm-sans rounded-full flex items-center justify-between fixed top-5 md:left-1/2 md:transform md:-translate-x-1/2 z-50 w-11/12 md:w-full mx-4 md:mx-auto ">
     <div className="hidden pl-5 lg:flex items-center space-x-6">
        <div
          className="relative group"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
  <a
    href="#"
    className="text-[#02312F] font-bold hover:text-green-800 flex items-center space-x-1"
  >
    All Pages  &nbsp;
    <IoIosArrowDown size={20}
      className="transform transition-transform duration-300 group-hover:rotate-180"
    />
  </a>

          {/* Dropdown Menu */}
          <div className={`polygon ${
              showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
          <div
            className={`z-10 absolute top-8 left-0 w-[650px] bg-white shadow-lg p-5 grid grid-cols-3 gap-4 rounded-md transition-all duration-300 `}
          >
            <div className="col-span-1">
              <img src="https://framerusercontent.com/images/Kj39KQbKGNtnNNnF29K7Clg.png?scale-down-to=512"
                alt="Living Room"
                className="rounded-md"
              />
            </div>

            <div className="col-span-1">
              <a href="#" className="block text-[#02312F] hover:text-green-800 font-semibold">Homepage</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Services</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Reviews</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Projects</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Project Details</a>
            </div>
            <div className="col-span-1">
              <a href="#" className="block text-[#02312F] hover:text-green-800 font-semibold">Homepage</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Services</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Reviews</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Projects</a>
              <a href="#" className="block text-[#02312F] hover:text-green-800 pt-3 font-semibold">Project Details</a>
            </div>
          </div>
          </div>
        </div>

        <a href="#" className="text-[#02312F] font-bold hover:text-green-800">
          Works
        </a>
        <a href="#" className="text-[#02312F] font-bold hover:text-green-800">
          Contact
        </a>
      </div>

     

      <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={isOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className={`absolute top-20 left-0  w-full  bg-white backdrop-blur-3xl shadow-md px-6 py-4 rounded-md lg:hidden ${
    isOpen ? "block" : "hidden"
  }`}
>
  {/* All Pages with Submenu */}
  <div className="relative group">
  <a
      href="#"
      className="flex text-gray-700 hover:text-green-700 justify-start items-center"
      onClick={() => setShowDropdown(!showDropdown)}
    >
    All Pages  &nbsp;
    <IoIosArrowDown size={20}
      className="transform transition-transform duration-300 group-hover:rotate-180"
    />
  </a>
    {showDropdown && (
      <div className="ml-4 mt-2 space-y-2">
        <a href="#" className="block text-gray-700 hover:text-green-700">
          Homepage
        </a>
        <a href="#" className="block text-gray-700 hover:text-green-700">
          Services
        </a>
        <a href="#" className="block text-gray-700 hover:text-green-700">
          Reviews
        </a>
        <a href="#" className="block text-gray-700 hover:text-green-700">
          Projects
        </a>
        <a href="#" className="block text-gray-700 hover:text-green-700">
          Project Details
        </a>
      </div>
    )}
  </div>

  <a href="#" className="block text-gray-700 hover:text-green-700">
    Works
  </a>
  <a href="#" className="block text-gray-700 hover:text-green-700">
    Contact
  </a>
</motion.div>

      <div className="flex items-center space-x-2">
        <img
          src="https://framerusercontent.com/images/ZYRtc96UgLkfuEuIM1bu6vLT2B4.svg"
          alt="Logo"
          className=""
        />
        {/* <span className="text-green-700 font-bold text-lg">Nextspace</span> */}
      </div>
      
      {/* toggle menu start */}
      <div className="flex items-center space-x-4 lg:hidden ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes size={24} className="text-black" />
          ) : (
            <FaBars size={24} className="text-black" />
          )}
        </button>
      </div>

      <a href="#"
        className="bg-[#02312F] text-white py-4 px-4 rounded-full hover:bg-[#02312F] hidden lg:block"
      >
        Get This Template
      </a>
    </nav>
  );
}
