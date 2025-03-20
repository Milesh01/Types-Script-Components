"use client"
import { useState } from 'react';
import Image from 'next/image';
import { GiPolarStar } from "react-icons/gi";

const images = [
  { id: 1, src: 'https://framerusercontent.com/images/c68akq68avshB8iHESeuE5Wa7pU.jpg?scale-down-to=1024' },
  { id: 2, src: 'https://framerusercontent.com/images/dGs9I4fFD3z07PjQGZam073cvBI.jpg?scale-down-to=1024' },
  { id: 3, src: 'https://framerusercontent.com/images/GTv5gTqKeKCdZ1nSwA9FIUiHw8.jpg?scale-down-to=1024' },
  { id: 4, src: 'https://framerusercontent.com/images/c68akq68avshB8iHESeuE5Wa7pU.jpg?scale-down-to=1024' },
];

export default function PropertyDisplay() {
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <div className="bg-white text-black p-5 md:px-16 py-16">
      <div className="container mx-auto grid grid-cols-2 gap-5 items-center">
      {/* Left Side - Text and Thumbnails */}
      <div className="lg:col-span-1 col-span-2">
        <div className="border border-black text-black font-semibold  p-3 rounded-full inline-block text-sm">
        <span className='flex items-center'><GiPolarStar /> &nbsp; Easily take control</span>
        </div>
        <h1 className="md:text-5xl text-4xl font-bold text-gray-900 my-4">Manage your properties</h1>
        <p className="text-gray-800 font-semibold md:text-lg text-md">
          With our intuitive tools, you can streamline rent collection, handle maintenance requests, communicate with tenants, and access detailed reports—all in a few clicks.
        </p>
        <div className="md:flex grid grid-cols-3 gap-2 mt-6">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="Property thumbnail"
              width={100}
              height={100}
              className={`rounded-lg h-full w-full object-cover cursor-pointer border-2 ${
                selectedImage === image.src ? 'border-gray-500' : 'border-transparent'
              }`}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Selected Image Display */}
      <div className="lg:col-span-1 col-span-2 mt-6 lg:ml-8">
        <Image
          src={selectedImage}
          alt="Selected property"
          width={1000}
          height={1000}
          className="rounded-3xl shadow-lg md:h-[450]"
        />
      </div>
    </div>
    </div>
  );
}
