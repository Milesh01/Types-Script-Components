'use client';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, } from 'react-icons/fa';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,} from "react-icons/fa";
import { useState } from 'react';
import SubHeader from '@/components/common/Subheader';
import Link from 'next/link';
import { IconType } from 'react-icons';


interface SocialLink {
  icon: IconType;
  href: string;
}

const socialLink: SocialLink[] = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/wsclinicindia/",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@WsClinic",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/wsclinic/",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/ws-clinic/",
  },
];  

 export default function ContactPage(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const openDirections = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=WS+Clinic,+I-102,+Kirti+Nagar,+Delhi,+110015", '_blank');
  };
  const openDirectionsTwo = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112130.58913323384!2d77.220472!3d28.567333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25dbad548bb%3A0x754a271dc18ff7c4!2sSouth%20Extension%2C%20Block%20F%2C%20South%20Extension%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1746536849883!5m2!1sen!2sin", '_blank');
  };

  return (
    <div>  
      <SubHeader title="Contact Us" breadcrumbs={[{ label: "Contact Us", href: "/contact-us" }]} />  

    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1  relative">
            <div className=' sticky top-20 space-y-8'>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                    <FaMapMarkerAlt className="h-6 w-6 text-primary-teal" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">WS Clinic, I-102, Kirti Nagar</p>
                    <p className="text-gray-600">Delhi, 110015</p>
                    <button 
                      onClick={openDirections}
                      className="mt-2 text-primary-teal hover:text-primary-red text-sm font-medium flex items-center"
                    >
                      Get directions <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                    <FaMapMarkerAlt className="h-6 w-6 text-primary-teal" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address 2</h3>
                    <p className="mt-1 text-gray-600">A-24 Basement, South Ex Part-2,</p>
                    <p className="text-gray-600">New Delhi-110049</p>
                    <button 
                      onClick={openDirectionsTwo}
                      className="mt-2 text-primary-teal hover:text-primary-red text-sm font-medium flex items-center"
                    >
                      Get directions <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                    <FaPhone className="h-6 w-6 text-primary-teal" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 8800007740</p>
                    <a href="tel:+91 8800007740" className="mt-2 text-primary-teal hover:text-primary-red text-sm font-medium">
                      Call now
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                    <FaEnvelope className="h-6 w-6 text-primary-teal" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@wsclinic.com</p>
                    <a href="mailto:info@wsclinic.com" className="mt-2 text-primary-teal hover:text-primary-red text-sm font-medium">
                      Send email
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                    <FaClock className="h-6 w-6 text-primary-teal" />
                  </div>
                  <div className="ml-4  w-full">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <div className="mt-1 space-y-1 text-gray-600">
                      <p className="flex justify-between">
                        <span className="font-medium">Mon-Fri:</span> 8:00 AM - 8:00 PM
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Sat:</span> 9:00 AM - 5:00 PM
                      </p>
                      <p className="flex justify-between w-full">
                        <span className="font-medium">Sun:</span> <span className='text-primary-red'>Emergency Only</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl  text-gray-900 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                 {socialLink.map((item, index) => (
               <Link
               key={index}
               href={item.href}
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Social Link"
               className="p-2 rounded-md bg-primary-red text-white hover:bg-white hover:text-primary-red transition-colors duration-300 ease-in-out border border-primary-red">
               <item.icon className="text-lg" />
             </Link>
              ))}
              </div>
            </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    >
                      <option value="">Select a subject</option>
                      <option value="Appointment">Appointment</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Billing">Billing</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.465228375226!2d77.13101799199242!3d28.648748691352335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0310af515fd9%3A0xce0d7b6154db1cb3!2sWS%20Clinic!5e0!3m2!1sen!2sin!4v1746531541437!5m2!1sen!2sin"
                loading="lazy"
                title="WS Clinic Location"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112130.58913323384!2d77.220472!3d28.567333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25dbad548bb%3A0x754a271dc18ff7c4!2sSouth%20Extension%2C%20Block%20F%2C%20South%20Extension%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1746536849883!5m2!1sen!2sin"
                loading="lazy"
                title="WS Clinic Location South X"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};