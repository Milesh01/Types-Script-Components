// MedicalProfessionals.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  primaryButton?: boolean;
  socialMedia: SocialMedia;
  appointmentLink: string;
}

const MedicalProfessionals: React.FC = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Rafael D. Bratcher",
      specialty: "Neurologist",
      appointmentLink: "#",
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647790/InfectiousDiseaseSpecialist_u9xfom.jpg",
      primaryButton: true,
      socialMedia: {
        facebook: "https://facebook.com/rafaelbratcher",
        twitter: "https://twitter.com/rafaelbratcher",
        linkedin: "https://linkedin.com/in/rafaelbratcher",
        instagram: "https://instagram.com/rafaelbratcher"
      }
    },
    {
      id: 2,
      name: "Santiago K. Wilson",
      specialty: "Senior Dentist",
      appointmentLink: "#",
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1746180247/avatar_prfmsk.png",
      socialMedia: {
        facebook: "https://facebook.com/santiagowilson",
        twitter: "https://twitter.com/santiagowilson",
        linkedin: "https://linkedin.com/in/santiagowilson",
        instagram: "https://instagram.com/santiagowilson"
      }
    },
    {
      id: 3,
      name: "Micheal C. Simmons",
      specialty: "Medicine Specialist",
      appointmentLink: "#",
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647790/InfectiousDiseaseSpecialist_u9xfom.jpg",
      socialMedia: {
        facebook: "https://facebook.com/michealsimmons",
        twitter: "https://twitter.com/michealsimmons",
        linkedin: "https://linkedin.com/in/michealsimmons",
        instagram: "https://instagram.com/michealsimmons"
      }
    },
    {
      id: 4,
      name: "Columbus A. Davis",
      specialty: "Neuro Surgeon",
      appointmentLink: "#",
      image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1746180247/avatar_prfmsk.png",
      socialMedia: {
        facebook: "https://facebook.com/columbusdavis",
        twitter: "https://twitter.com/columbusdavis",
        linkedin: "https://linkedin.com/in/columbusdavis",
        instagram: "https://instagram.com/columbusdavis"
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-red-500 font-semibold text-sm mb-2">Meet Our Doctors</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          Leading Medical Professionals
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          at Your Service
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="group transition-all flex flex-col border md:py-7 md:px-5 p-4">
            <h3 className="font-medium text-lg">{doctor.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{doctor.specialty}</p>
            
            <div className="rounded-full overflow-hidden w-36 h-36 my-4 flex items-center justify-center mx-auto">
              <Image
                width={1000}
                height={1000}
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className='flex items-center justify-center'>
            <Link href={doctor.appointmentLink}
              className={`text-sm inline-flex border border-gray-900 items-center group-hover:bg-red-500 group-hover:border-transparent group-hover:text-white justify-center gap-1 px-6 py-2 rounded-full my-4
              }`}
            >
              Make Appointment &nbsp; <MdArrowOutward/>
            
            </Link>
                </div>
            
            <div className="flex gap-3 items-center justify-center">
              {doctor.socialMedia.facebook && (
                <a href={doctor.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 border hover:border-red-500 rounded-full p-2">
                  <FaFacebookF size={18} />
                </a>
              )}
              {doctor.socialMedia.twitter && (
                <a href={doctor.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 border hover:border-red-500 rounded-full p-2">
                  <FaTwitter size={18} />
                </a>
              )}
              {doctor.socialMedia.linkedin && (
                <a href={doctor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 border hover:border-red-500 rounded-full p-2">
                  <FaLinkedinIn size={18} />
                </a>
              )}
              {doctor.socialMedia.instagram && (
                <a href={doctor.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 border hover:border-red-500 rounded-full p-2">
                  <FaInstagram size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalProfessionals;
