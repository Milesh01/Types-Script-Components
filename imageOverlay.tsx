import React from 'react';
import Image from 'next/image';
import AnimatedButton from '@/components/button/index';
const TransformManagement: React.FC = () => {
  return (
    <div className="bg-gray-100 lg:min-h-screen flex items-center relative">
          <div className="absolute bg-orange-500 lg:w-5/12 lg:h-screen h-1/4 w-full lg:top-0 bottom-0 right-0 "></div>
      <div className=" container mx-auto grid lg:grid-cols-2 lg:gap-10 gap-5 items-center py-16 md:px-6 p-5">
        <div className='z-10'>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Transform your
            <span className="text-black">Properties Management</span> today!
          </h1>

          <p className="text-gray-600 mt-4 md:text-lg text-md font-semibold">
            Unlock the potential of your property management with our 
            cutting-edge service. Designed to simplify operations, enhance tenant 
            relationships, and increase profitability, our platform offers everything you need in one place.
          </p>

          <p className="mt-4 md:text-lg text-md font-semibold text-black ">
            Experience the ease of automated processes, insightful analytics, and effective communication 
            tools that save you time and reduce stress.
          </p>

          <AnimatedButton
                         href="/"
                         content="Get a free proposal"
                         className=" text-white"
                        />
        </div>

        <div className="relative flex items-center justify-center">
          {/* Main Image */}
          <Image 
            src="https://framerusercontent.com/images/TkFxhWPAi76AI72TzmKENBdiw.png"
            alt="House Interior"
            width={1000}
            height={1000}
            className="rounded-lg md:h-[400] object-cover shadow-lg z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default TransformManagement;
