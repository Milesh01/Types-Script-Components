import React from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import TestCard, { TestCardProps } from '@/components/common/TestCard';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaXRay } from 'react-icons/fa';
import { TbHeartbeat } from 'react-icons/tb';
import { BiTestTube } from 'react-icons/bi';

const LabTestBookingPage: React.FC = () => {
    const testCards: TestCardProps[] = [
      {
        title: 'MRI',
        subtitle: '(Magnetic Resonance Imaging)',
        description: 'Uses strong magnets & radio waves create detailed images.',
        price: 150,
        icon: <MdOutlineHealthAndSafety className="text-5xl text-blue-600" />,
        discountPercent: 40,
      },
      {
        title: 'X-rays, CT Scan',
        subtitle: '( Tomography)',
        description: 'Used to view bones and detect fractures, infections.',
        price: 320,
        icon: <FaXRay className="text-5xl text-cyan-500" />,
        discountPercent: 40,
      },
      {
        title: '(ECG)',
        subtitle: 'Electrocardiogram',
        description: 'Measures electrical activity of heart and can detect.',
        price: 430,
        icon: <TbHeartbeat className="text-5xl text-red-500" />,
        discountPercent: 40,
      },
      {
        title: '(CBC) Complete',
        subtitle: 'Blood Count',
        description: 'Measures overall health and detects various disorders.',
        price: 130,
        icon: <BiTestTube className="text-5xl text-blue-600" />,
        discountPercent: 40,
      }
    ];
  return (
    <div className="min-h-screen bg-blue-200 relative">
      <div className="absolute inset-0 z-0 opacity-20" />
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="mb-12">
          <p className="text-red-500 text-sm mb-2 font-bold">Lab Testing & Facilities</p>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-4xl font-bold max-w-xl">
              We Have Modern Lab & Machine, <br />
              Booking For Quality Test
            </h1>
            <div className="hidden md:flex space-x-4">
              <button className="p-4 bg-white rounded-full hover:rotate-[150deg] transition-all">
                <RiArrowLeftLine />
              </button>
              <button className="p-4 bg-black text-white rounded-full hover:rotate-[-60deg] transition-all">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testCards.map((test, index) => (
            <TestCard key={index} {...test} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTestBookingPage;
