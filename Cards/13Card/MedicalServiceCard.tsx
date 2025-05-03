import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export interface MedicalServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string; 
}

const MedicalServiceCard: React.FC<MedicalServiceCardProps> = ({ title, description, icon, imageUrl,link }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="relative h-56 w-full group transition-all duration-300">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          {icon}
        </div>
      </div>
      <div className="p-6 pt-14 flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link href={link} className="flex items-center bg-gray-300 py-3 px-9 text-black hover:bg-red-500 transition-all rounded-full hover:text-white text-sm font-medium">
          Read more &nbsp;
          <RiArrowRightUpLine />
        </Link>
      </div>
    </div>
  );
};

export default MedicalServiceCard;
