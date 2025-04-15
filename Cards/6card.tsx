import React from "react";
import { FaPalette, FaClock, FaComments, FaUsers } from "react-icons/fa";
import { MdOutlineLayers } from "react-icons/md";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Modern Interior Design",
    icon: <MdOutlineLayers size={28} className="text-white" />,
    description: "Create stunning spaces with sleek lines, neutral tones, and contemporary furnishing for timeless interiors.",
  },
  {
    title: "On Time Working",
    icon: <FaClock size={28} className="text-white" />,
    description: "Timely execution of every project ensures smooth delivery without compromising interior design quality.",
  },
  {
    title: "Best Communication",
    icon: <FaComments size={28} className="text-white" />,
    description: "We ensure clear communication to understand your design vision and deliver your dream interior.",
  },
  {
    title: "Professional Team",
    icon: <FaUsers size={28} className="text-white" />,
    description: "Our skilled interior experts turn ideas into elegant, functional, and personalized living spaces."
  },
];

const feature = [
    {
      title: "Colour Design Service",
      icon: <PiPaintBrushHouseholdFill size={28} className="text-white" />,
      description: "We blend colors that reflect mood, purpose, and style for a balanced interior vibe."
    },
    {
        img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614684/womandraw_itt09a.avif",
        alt: "Team discussion image",
      },
    {
      title: "Affordable Price",
      icon: <FaPalette size={28} className="text-white" />,
      description: "Experience top-tier interior design solutions tailored to your budget without compromising aesthetics."
    },
  ];
const WhyChooseUsSection = () => {
  return (
    <section className="bg-black text-white ">
      <div className="container mx-auto grid md:grid-cols-3 gap-5 relative px-4 lg:px-16 py-12">
        <div className="relative lg:col-span-1 col-span-3">
          <div className="sticky top-10">
            <p className="text-primary-accent uppercase tracking-widest font-medium text-sm mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight my-4">
              We Make Your 
               <span className="text-white bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2"> Interior</span> More Modern
            </h2>
            <p className="text-gray-300 mb-6">
            We craft stylish, functional interiors that reflect your personality with quality, creativity, and care—making every space truly yours.
            </p>
            <Link href={"#"} className="flex items-center gap-2 uppercase  hover:underline">
              Read More <BsArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 col-span-3 grid grid-cols-3 gap-6">
            <div className="grid md:grid-cols-2 col-span-3">
                <div className="space-y-6">
            {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4"
            >
              <div className="bg-primary-accent p-5">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
            </div>

            <div className=" space-y-5">
            {feature.map((feature, index) => {
            if (index === 1 && feature.img) {
              return (
                <div key={index} className="">
                  <Image
                    src={feature.img}
                    alt={feature.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-56 object-cover p-3"
                  />
                </div>
              );
            }

            // Default feature cards
            if (feature.title) {
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4"
                >
                  <div className="bg-primary-accent p-5">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-md text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            }

            return null;
          })}
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
