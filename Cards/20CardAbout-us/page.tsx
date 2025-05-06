'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaHeartbeat, FaEye, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div>
    <div className=" bg-white">
    <div className="max-w-7xl mx-auto py-14 px-4">
  <div className="text-center mb-16">
  <h1 className="text-black text-4xl sm:text-5xl font-normal leading-tight mb-4">
      About <span className="text-primary-red">WS Clinic</span>
    </h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      The number one choice for reliable holistic medical care.{" We're "}dedicated to providing excellent treatment through a multidisciplinary approach, ensuring personalized care for every patient.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-xl  border border-gray-200 p-8 hover:shadow-sm transition-shadow">
      <div className="mb-4">
      <Image
          src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746516040/Complete_zojulq.png" 
          alt="Complete Care Expertise"
          width={1000}
          height={1000}
          className='w-28 h-20'
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Complete Care Expertise</h3>
      <p className="text-gray-600">
        We provide complete medical care for mental and physical well-being with our team of highly skilled doctors.
      </p>
    </div>

    <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-sm transition-shadow">
      <div className="mb-4">
        <Image
          src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746515836/CompassionateJourney_a6ovd2.png" 
          alt="Compassionate Journey"
          width={1000}
          height={1000}
          className='w-28 h-20'
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Compassionate Journey</h3>
      <p className="text-gray-600">
        Your health journey accompanied by compassionate, ongoing care customized to all your medical needs.
      </p>
    </div>

    <div className="bg-primary-red rounded-xl shadow-lg p-8 text-white">
      <div className="text-4xl mb-4">
      <Image
          src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746516368/book_ro8p1k.png" 
          alt="Book an Appointment"
          width={1000}
          height={1000}
          className='w-28 h-20 mb-4'
        />
      </div>
      <h3 className="text-2xl font-semibold mb-3">Ready to Begin?</h3>
      <p className="mb-6">
        Start your journey to better health today with our expert team.
      </p>
      <Link  href="#" className=" inline-flex relative bg-white text-primary-red px-8 py-3 rounded-lg font-medium  overflow-hidden  group  transition-all  duration-300  border-2  border-primary-red  hover:text-white   items-center  gap-2 ">
  <span className="relative z-10">
    Book an Appointment
  </span>
  <motion.span
    whileHover={{ rotate: -50 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="group-hover:text-white"
  >
    <FaCalendarAlt className="text-lg" />
  </motion.span>

  <span className="absolute inset-0 bg-primary-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 border-2 rounded-lg ease-[cubic-bezier(0.65,0,0.35,1)]"></span>
</Link>
    </div>
  </div>
</div>
    </div>
      </div>
  );
}
