"use client";
import React from 'react';
import SubHeader from '@/components/common/Subheader';
import { FaMapMarkerAlt, FaPhone, FaClock, FaWheelchair } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';

const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=WS+Clinic,+I-102,+Kirti+Nagar,+Delhi,+110015";
const mapsUrlTwo ="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112130.58913323384!2d77.220472!3d28.567333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25dbad548bb%3A0x754a271dc18ff7c4!2sSouth%20Extension%2C%20Block%20F%2C%20South%20Extension%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1746536849883!5m2!1sen!2sin"

const handleGetDirections = () => {
  window.open(mapsUrl, '_blank');
};

const handleGetDirectionsTwo = () => {
  window.open(mapsUrlTwo, '_blank');
};

export default function LocationCard() {
  return (
    <div>
      <SubHeader
        title="Location & Contact Us" breadcrumbs={[
          { label: "Location", href: "/locations" },
          { label: "Contact Us", href: "/contact-us" },
        ]}  />
   
    <div className="bg-gradient-to-br from-white to-indigo-50 py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
        <h3 className="text-black text-4xl sm:text-5xl font-normal leading-tight mb-4">
            Our <span className="text-primary-red">Location</span>
          </h3>
          <p className="mt-4 text-xl text-gray-600">
            Visit us for exceptional healthcare services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="w-full h-80 md:h-auto">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.465228375226!2d77.13101799199242!3d28.648748691352335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0310af515fd9%3A0xce0d7b6154db1cb3!2sWS%20Clinic!5e0!3m2!1sen!2sin!4v1746531541437!5m2!1sen!2sin"
                loading="lazy"
                title="WS Clinic Location"
              ></iframe>
            </div>

            <div className="w-full p-8 relative">
              <div className="flex items-center mb-6 z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <h3 className="ml-4 text-2xl text-gray-900">WS Clinic Kirti Nagar</h3>
              </div>
              <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746535899/map_efj8rm.png"
              width={1000} height={1000} alt='map'
              className='absolute w-full h-full object-cover top-0 bottom-0 -z-0 opacity-25'/>
              <div className="space-y-5 z-10">
                <div className="flex">
                  <FaMapMarkerAlt className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                    I-102, Kirti Nagar, Delhi, 110015
                  </p>
                </div>

                <div className="flex">
                  <FaPhone className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                   +91 8800007740
                  </p>
                </div>

                <div className="flex">
                  <MdEmail className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                    info@wsclinic.com
                  </p>
                </div>

                <div className="flex">
                  <FaClock className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-base text-gray-700 font-medium">Opening Hours:</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-sm text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Sun: Emergency Only</p>
                  </div>
                </div>

                <div className="flex">
                  <FaWheelchair className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                    Wheelchair accessible facility
                  </p>
                </div>
              </div>

              <div className="mt-8 z-10">
              <button 
                  onClick={handleGetDirections}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
          <div className="grid md:grid-cols-2">
            <div className="w-full h-80 md:h-auto">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112130.58913323384!2d77.220472!3d28.567333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25dbad548bb%3A0x754a271dc18ff7c4!2sSouth%20Extension%2C%20Block%20F%2C%20South%20Extension%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1746536849883!5m2!1sen!2sin"
                loading="lazy"
                title="WS Clinic Location"
              ></iframe>
            </div>

            <div className="w-full p-8 relative">
              <div className="flex items-center mb-6 z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <h3 className="ml-4 text-2xl text-gray-900">WS Clinic South Ex</h3>
              </div>
              <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746535899/map_efj8rm.png"
              width={1000} height={1000} alt='map'
              className='absolute w-full h-full object-cover top-0 bottom-0 -z-0 opacity-25'/>
              <div className="space-y-5 z-10">
                <div className="flex">
                  <FaMapMarkerAlt className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                  A-24 Basement, South Ex Part-2, New Delhi-110049
                  </p>
                </div>

                <div className="flex">
                  <FaPhone className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                   +91 8800007740
                  </p>
                </div>

                <div className="flex">
                  <MdEmail className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                    info@wsclinic.com
                  </p>
                </div>

                <div className="flex">
                  <FaClock className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-base text-gray-700 font-medium">Opening Hours:</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-sm text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Sun: Emergency Only</p>
                  </div>
                </div>

                <div className="flex">
                  <FaWheelchair className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" />
                  <p className="ml-3 text-base text-gray-700">
                    Wheelchair accessible facility
                  </p>
                </div>
              </div>

              <div className="mt-8 z-10">
              <button 
                  onClick={handleGetDirectionsTwo}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
 