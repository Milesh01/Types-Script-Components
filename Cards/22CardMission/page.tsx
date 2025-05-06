'use client';
import Info from '@/components/home/info';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeartbeat, FaEye, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 ">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
        <h3 className="text-black text-4xl sm:text-5xl font-normal leading-tight mb-4">
            Our <span className="text-primary-red">Core Values</span>
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Guiding principles that shape our healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Mission Card */}
          <div className="relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600">
                  <FaHeartbeat className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional healthcare services that prioritize the well-being of our patients. 
                We are committed to delivering high-quality, compassionate care through a multidisciplinary 
                approach, ensuring every individual receives personalized treatment tailored to their unique needs.
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Doctor"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Nurse"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Specialist"
                  />
                </div>
                <span className="ml-4 text-sm font-medium text-gray-500">
                  Committed team of 150+ healthcare professionals
                </span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600">
                  <FaEye className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a leading healthcare provider recognized for our commitment to excellence, 
                innovation, and patient-centered care. We strive to create a healthier community 
                by empowering individuals through education, prevention, and access to comprehensive 
                medical services.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <FaLightbulb className="flex-shrink-0 h-6 w-6 text-indigo-500" />
                  <p className="ml-3 text-sm text-gray-700">
                    <span className="font-semibold">Innovation</span> in treatment approaches
                  </p>
                </div>
                <div className="flex items-start">
                  <FaHandsHelping className="flex-shrink-0 h-6 w-6 text-indigo-500" />
                  <p className="ml-3 text-sm text-gray-700">
                    <span className="font-semibold">Community</span> health initiatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <p className="text-3xl font-bold text-indigo-600">10+</p>
            <p className="mt-2 text-sm font-medium text-gray-500">Years of Service</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <p className="text-3xl font-bold text-indigo-600">50K+</p>
            <p className="mt-2 text-sm font-medium text-gray-500">Patients Served</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <p className="text-3xl font-bold text-indigo-600">150+</p>
            <p className="mt-2 text-sm font-medium text-gray-500">Healthcare Professionals</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <p className="text-3xl font-bold text-indigo-600">24/7</p>
            <p className="mt-2 text-sm font-medium text-gray-500">Emergency Care</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
