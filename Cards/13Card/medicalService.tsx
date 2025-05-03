// MedicalServicesPage.tsx
import React from 'react';
import { HiHeart, HiLightningBolt, HiBeaker, HiUserGroup } from 'react-icons/hi';
import { FaTooth, FaSyringe } from 'react-icons/fa';
import MedicalServiceCard from '@/components/common/MedicalServiceCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
}

const MedicalServices: React.FC = () => {
    const serviceCards: ServiceCardProps[] = [
        {
          title: 'Mental Health & Wellness',
          description: 'Counseling, therapy, and professional mental health services for all ages',
          icon: (
            <div className="bg-white group-hover:bg-red-500 p-3 rounded-full group-hover:border-2 shadow border-white">
              <HiHeart className="text-red-500 group-hover:text-white w-10 h-10" />
            </div>
          ),
          imageUrl: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg',
          link: '#'
        },
        {
          title: 'Emergency & Urgent Care',
          description: '24/7 medical assistance for accidents and medical emergencies',
          icon: (
            <div className="bg-white group-hover:bg-red-500 p-3 rounded-full group-hover:border-2 shadow border-white">
              <HiLightningBolt className="text-red-500 group-hover:text-white w-10 h-10" />
            </div>
          ),
          imageUrl: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg',
          link: '#'
        },
        {
          title: 'Diagnostic & Laboratory',
          description: 'Blood tests, scans, X-rays, MRIs, CT scans, and other diagnostics',
          icon: (
            <div className="bg-white group-hover:bg-red-500 p-3 rounded-full group-hover:border-2 shadow border-white">
              <HiBeaker className="text-red-500 group-hover:text-white w-10 h-10" />
            </div>
          ),
          imageUrl: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg',
          link: '#'
        },
        {
          title: 'Maternity & Pediatric Care',
          description: 'Comprehensive care for expecting mothers, newborns, children\'s health',
          icon: (
            <div className="bg-white group-hover:bg-red-500 p-3 rounded-full group-hover:border-2 shadow border-white">
              <HiUserGroup className="text-red-500 group-hover:text-white w-10 h-10" />
            </div>
          ),
          imageUrl: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg',
          link: '#'
        },
        {
          title: 'Dental Care Services',
          description: 'Our Dental Care Services are designed to provide comprehensive',
          icon: (
            <div className="bg-white group-hover:bg-red-500 p-3 rounded-full group-hover:border-2 shadow border-white">
              <FaTooth className="text-red-500 group-hover:text-white w-10 h-10" />
            </div>
          ),
          imageUrl: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg',
          link: '#'
        },
        {
          title: 'Surgery Care',
          description: 'Our Surgery Care services provide expert, compassionate',
          icon: (
            <div className="bg-white group-hover:bg-red-500 p-3 rounded-full group-hover:border-2 shadow border-white">
              <FaSyringe className="text-red-500 group-hover:text-white w-10 h-10" />
            </div>
          ),
          imageUrl: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg',
          link: '#'
        },
      ];
      
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-red-500 text-sm mb-3 font-bold">Explore Medical Department</p>
        <h1 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Complete Health Solutions – Because You Deserve the Best
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <MedicalServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;