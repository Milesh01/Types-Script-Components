'use client';
import SubHeader from '@/components/common/Subheader';
import Info from '@/components/home/info';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaHeartbeat, FaEye, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div>
    <SubHeader title="About Us" breadcrumbs={[{ label: "About Us", href: "/about-us" }]} />

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

      <Info />

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
