import Image from "next/image";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen, understand your needs, and gather all the right details to begin the journey.",
    active: true,
  },
  {
    number: "02",
    title: "Ideation",
    description: "Creative minds collaborate to bring smart and practical ideas tailored just for you.",
    active: false,
  },
  {
    number: "03",
    title: "Product Selection",
    description: "We help you choose the best products that fit your style, space, and budget.",
    active: false,
  },
  {
    number: "04",
    title: "Execution",
    description: "Sit back and relax while we turn your vision into a real, beautiful result—on time and hassle-free.",
    active: false,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className=" bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5">
      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-end">
        <div>
<p className="text-sm tracking-widest text-primary-accent uppercase">Our Process</p>
      <h2 className="text-3xl font-bold mt-5">
        Easy <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2"> Step </span> To Get Your Solution
      </h2>
      <p className="mt-5 text-gray-500 max-w-xl">
      Our four-step process helps turn your ideas into reality—clear, simple, and stress-free from consultation to execution. We make it easy for you.
      </p>

        <div className="grid grid-cols-2 gap-10 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 shadow-sm transition-all hover:bg-primary-accent hover:text-white ${
                step.active ? "bg-primary-accent text-white" : "bg-primary-floral text-gray-700"
              }`}
            >
              <h3 className="text-5xl font-bold mb-2 opacity-60">{step.number}</h3>
              <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        </div>

        <div className="grid grid-cols-2 gap-5 ">  
            <div className="">
            <Image width={1000} height={1000}
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613358/about1_ubg762.avif"
              alt={`Process step`}
              className="w-full h-80 object-cover"
            />
             <Image width={1000} height={1000}
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about5_gopupi.avif"
              alt={`Process step`}
              className="w-full h-60 object-cover mt-5"
            />
            </div>
            <div className="">
            <Image width={1000} height={1000}
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about7_ltfy6s.avif"
              alt={`Process step`}
              className="w-full h-60 object-cover"
            />
             <Image width={1000} height={1000}
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about6_hjfrxl.avif"
              alt={`Process step`}
              className="w-full h-80 object-cover mt-5"
            />
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProcessSection;
