import Image from 'next/image';
import React from 'react'

const AboutMain: React.FC = () => {
  return (
    <>
        <div className="container mx-auto py-16 px-6 lg:px-20 p-5">
            <div className="">
              <h2 className=" lg:w-3/5 md:w-3/6  text-green-dark text-2xl md:text-3xl mb-6">
                At NextSpace, we are passionate about creating exceptional interior and designs
                that elevate lifestyles and enrich experiences.
              </h2>
              <div className="grid grid-cols-6 md:gap-4">
                <div className="row-span-1 col-span-1 flex justify-center items-center">
                  <Image src="https://framerusercontent.com/images/Tl4tBmdV7mAYPvCQbKoQrWSlcWI.png" alt="Team Discussion" width={1000} height={1000} className="md:mr-5 mr-3" />
                </div>
                <div className="col-span-5">
                 <div className='flex justify-start items-end'>
                 <Image src="https://framerusercontent.com/images/JJtknEWtw19qM8mTfc3Qd9XqCw.png?scale-down-to=512" alt="Meeting" width={1000} height={1000} className="md:h-56 md:w-48 w-14 object-cover" />
                 <Image src="https://framerusercontent.com/images/KHkpFr3AqB8FAbytoZnfqLfKJiU.png" alt="Teamwork" width={1000} height={1000} className="md:h-72 md:w-60 w-14 object-cover md:ml-5 ml-2" />
                 <Image src="https://framerusercontent.com/images/Tl4tBmdV7mAYPvCQbKoQrWSlcWI.png" alt="Teamwork" width={400} height={300} className=" md:h-64 md:w-60 w-14 object-cover md:ml-5 ml-2" />
                 </div>
                 <div className='flex'>
                  <Image src="https://framerusercontent.com/images/HRgJBs6pNlPCYnz3Ru0P9YkUk.png?scale-down-to=512" alt="Work Session" width={1000} height={1000} className="md:w-auto w-28 object-cover md:mt-4 mt-2" />
                  <Image src="https://framerusercontent.com/images/jD4gRFXDunKYPKERG3dTUKu8o.png?scale-down-to=512" alt="Work Session" width={1000} height={1000} className="md:w-auto md:h-60 w-14 h-20 object-cover md:mt-4 mt-2 md:ml-5 ml-2" />
                </div>
                </div>      
              </div>
            </div>
            </div>
    </>
  )
}

export default AboutMain;
