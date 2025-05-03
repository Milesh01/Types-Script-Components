import React from 'react'
import { FaClinicMedical } from 'react-icons/fa'
import { FiTruck, FiUsers } from 'react-icons/fi'
import ServiceCard from './ServiceCard'

const services = [
  {
    id: 1,
    icon: <FaClinicMedical />,
    title: "Looking For Medical & Health Care",
    description: "Your Health is your greatest asset, and finding trusted medical and healthcare services is essential for quality life.",
    linkText: "Find Medical Service",
    link: "#"
  },
  {
    id: 2,
    icon: <FiUsers />,
    title: "Find Professional & Quality Doctors",
    description: "Finding professional, highly qualified, and experienced doctors is essential for receiving the best medical treatment.",
    linkText: "Find a Doctor",
    link: "#"
  },
  {
    id: 3,
    icon: <FiTruck />,
    title: "Need Emergency Ambulance ?",
    description: "In a medical emergency, every second counts. If you need a fast, reliable, and fully equipped ambulance.",
    linkText: "Find Ambulance",
    link: "#"
  }
]

function ServicesGrid() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid