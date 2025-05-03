import DepartmentCard from "@/components/common/DepCard";
import Image from "next/image";
import {
  FiHeart,
  FiSmile,
  FiScissors,
  FiActivity,
  FiEye,
  FiDroplet,
  FiCheckCircle,
} from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";

const departments = [
  {
    icon: FiHeart,
    tag: "Health",
    title: "Medicine Care",
    description: "We are dedicated providing top-quality medicine care to ensure health.",
    link: "#medicine",
  },
  {
    icon: FiSmile,
    tag: "Dentist",
    title: "Dental Care",
    description: "We are committed to comprehensive and personalized dental care.",
    link: "#dental",
  },
  {
    icon: FiScissors,
    tag: "Surgery",
    title: "Plastic Surgery",
    description: "We specialize in transformative plastic surgery procedures designed.",
    link: "#surgery",
  },
  {
    icon: FiActivity,
    tag: "Neurology",
    title: "Neurology",
    description: "We specialize in comprehensive neurology care to diagnose, treat, and manage.",
    link: "#neurology",
  },
  {
    icon: FiEye,
    tag: "Orthopedic",
    title: "Ophthalmology",
    description: "We provide comprehensive eye care to diagnose, treat, and manage health.",
    link: "#ophthalmology",
  },
  {
    icon: FiDroplet,
    tag: "Hematology",
    title: "Hematology",
    description: "We specialize in advanced hematology care, diagnosing and treating.",
    link: "#hematology",
  },
];

const DepartmentsSection = () => {
  return (
    <section className="bg-blue-100 py-16 px-4 md:px-12 mx-5 rounded-xl">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <p className="text-md text-gray-900 font-semibold mb-2">Explore Medical Department</p>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Providing Excellence Across Medical Fields Departments for <br className="hidden sm:block" />
          <span className="text-black">Specialized Healthcare</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <DepartmentCard key={index} {...dept} />
        ))}

        {/* Promo Block */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0D1B2A] via-[#0D1B2A] md:via-[#0D1B2A]/90 to-transparent text-white rounded-2xl md:p-8 p-4 justify-between">
          <div className="z-20">
            <span className="text-lg font-extralight">Need For Home Care </span>
             <h3 className="text-3xl font-medium mb-4">Medical Treatments?</h3>
            <p className="text-sm text-gray-300 mb-4 max-w-sm">
              We are committed to delivering safe, effective, and patient-centered care.
            </p>
            <ul className="text-sm space-y-2 text-gray-200">
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="" /> Advanced Medical Technology
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmarkSharp className="" /> Specialized Treatments & Services
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="inline-flex bg-[#EF3B2D] hover:bg-[#e13b2f] text-sm rounded-full items-center text-white px-4 py-2 mt-6  transition"
          >
            Make Appointment &nbsp;<GoArrowUpRight className="text-md"/>
          </a>
          <div className=" hidden md:block flex-1 max-w-xs md:max-w-sm absolute right-0 bottom-0">
        <Image
          src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746180247/avatar_prfmsk.png"
          alt="Doctor"
          width={1000}
          height={1000}
          className="w-full h-80 rounded-xl object-cover"
        />
      </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
