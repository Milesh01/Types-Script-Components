"use client";
,mfsaf
import { FaGoogle, FaUsers, FaCheckCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const services = [
  {
    icon: <FaGoogle size={30} />,
    title: "Google Ads",
    description: "Effortlessly streamline your finances with our automated expense tracking feature.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Social Media",
    description: "Effortlessly streamline your finances with our automated expense tracking feature.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Human Resources",
    description: "Effortlessly streamline your finances with our automated expense tracking feature.",
  },
  {
    icon: <FaGoogle size={30} />,
    title: "Google Ads",
    description: "Effortlessly streamline your finances with our automated expense tracking feature.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Social Media",
    description: "Effortlessly streamline your finances with our automated expense tracking feature.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Human Resources",
    description: "Effortlessly streamline your finances with our automated expense tracking feature.",
  }
];

const Services = () => {
  return (
    <section className="bg-[#F5F3EC] py-16 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 p-2 items-end justify-between">
          <div className="col-span-2">
            {" "}
            <h2 className=" text-3xl md:text-5xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-500 mt-2 text-lg lg:w-8/12">
              Unleashing Comprehensive Digital Marketing Services Tailored to
              Elevate Your Online Presence and Boost Your Success.
            </p>
          </div>
          <button className="hover:shadow-2xl col-span-1 mx-auto bg-green-400 text-white px-6 py-3 rounded-full hover:bg-green-500 transition-all">
            Get Started
          </button>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-3xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-[-3deg] hover:shadow-xl group hover:bg-black hover:text-white"
            >
              <div className="text-black group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-black group-hover:text-white text-xl font-semibold mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-lg group-hover:text-white">
                {service.description}
              </p>
              <a
                href="#"
                className="group-hover:text-green-400 text-black flex items-center gap-2 mt-4"
              >
                Learn more <MdOutlineKeyboardArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
