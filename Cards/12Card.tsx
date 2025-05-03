import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

type ServiceItem = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

const PopularServices: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, name: 'Medicine Care' },
    { id: 2, name: 'Dental Care' },
    { id: 3, name: 'Child Care' },
    { id: 4, name: 'Eye Care' },
    { id: 5, name: 'Neurology Care' },
    { id: 6, name: 'Mental Health Care' },
    { id: 7, name: 'Surgery Care' },
  ];

  return (
    <div className="bg-gray-100 md:p-8 p-4 rounded-lg overflow-hidden">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Popular Services</h2>
      <div className='w-full h-1 bg-slate-200 mb-6 relative'>
        <div className='w-1/4 h-full bg-red-500 absolute top-0 left-0'></div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white hover:bg-red-500 group rounded-lg p-2 py-3 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between px-3">
             <div className='flex items-center gap-2'>
             <span className='w-1 h-1 bg-black group-hover:bg-white rounded-full'></span>
             <h3 className="text-sm font-medium text-gray-800 group-hover:text-white">{service.name}</h3>
             </div>
              <div><IoArrowForward className='group-hover:rotate-[-45deg] group-hover:text-white'/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;