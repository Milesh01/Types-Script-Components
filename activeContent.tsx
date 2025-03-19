"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { GiPolarStar } from "react-icons/gi";
import AnimatedButton from '@/components/button/index';

const steps = [
  {
    title: "Register",
    description: "Sign up effortlessly to create your account, providing essential details that will enable you to access our comprehensive property management tools.",
    image: "https://framerusercontent.com/images/eO6x3ensiqoNIQjHwZQpeocbM.png",
    step: "1 Step",
  },
  {
    title: "Advertise",
    description: "Showcase your properties with eye-catching listings across multiple platforms, attracting potential tenants and filling vacancies faster than ever.",
    image: "https://framerusercontent.com/images/jPxTLtEuoNsFkWyOC2cspTrnQAA.png",
    step: "2 Step",
  },
  {
    title: "Manager",
    description: "Streamline your property management with intuitive tools that simplify tenant communication, automate tasks, and provide real-time insights, making management a breeze.",
    image: "https://framerusercontent.com/images/99l0i7gqIuihqWkEbhQRtoHZhOw.png",
    step: "3 Step",
  }
];

const RealEstateSteps: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(steps[0].image);

  return (
    <div className="bg-dark-green min-h-screen text-white ">
      <div className="container mx-auto py-16 md:px-16 p-5">

      <div className='md:flex justify-between items-center border-b border-gray-600 mb-8'>
<h1 className="text-3xl md:text-6xl font-bold text-white mb-8">
            Effortless path to proficient <br />
            real estate handling
          </h1>
          <div className="group relative inline-block">
          <AnimatedButton
                         href="/"
                         content="Get a free proposal"
                         className=" text-white"
                        />
</div>

</div>

<div className=' grid lg:grid-cols-3 gap-10'>
        {/* Left Section - Steps List */}
        <div className='col-span-2'>
          {steps.map((step, index) => (
            <div
              key={index}
              className="py-6 border-b text-gray-400 hover:text-white border-gray-600 cursor-pointer"
              onMouseEnter={() => setActiveImage(step.image)}
            >
              <div className='md:grid md:grid-cols-3 grid-cols-1  items-center'>
              <h2 className="col-span-1 md:text-5xl text-3xl font-semibold">{step.title}</h2>
              <div className=" mt-2 col-span-2">
              <span className="bg-gray-700 text-white items-center px-3 py-1 rounded-full text-sm inline-flex mb-2">
              <GiPolarStar /> &nbsp; {step.step}
              </span> <br/>
                {step.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Dynamic Image */}
        <div className="md:flex md:justify-center lg:col-span-1 md:col-span-2 col-span-2">
          <Image 
            src={activeImage}
            alt="Property Image"
            width={1000}
            height={1000}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default RealEstateSteps;
