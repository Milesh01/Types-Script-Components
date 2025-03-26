"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value }: { value: number }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 1500; // Animation duration in ms
    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const current = Math.floor(progress * value);
      setCurrentValue(current);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(value); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{currentValue}%</span>;
};

const WhyChooseUs = () => {
  const stats = [
    { label: "Professionalism", value: 88, color: "" },
    { label: "Client Service", value: 60, color: "" },
  ];

  const featuresLeft = [
    "Expertise in Various Industries",
    "Customized Solutions",
    "Data-Driven Insights",
    "Commitment to Client Success",
  ];

  const featuresRight = [
    "Proven Track Record",
    "Innovative Approaches",
    "Transparent Communication",
    "24/7 Support Availability",
  ];

  return (
    <section className="bg-[#0B1E3C] text-white p-6 md:p-8 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image with Stats Card */}
        <div className="relative h-full min-h-[400px]">
          <Image
            src="https://img.freepik.com/free-photo/young-happy-couple-shaking-hands-with-insurance-agent-meeting-office_637285-6133.jpg"
            alt="Team Collaboration"
            className="rounded-lg object-cover h-full w-full"
            width={1000}
            height={1000}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-5 left-5 bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-lg w-[90%] md:w-3/4"
          >
            <h3 className="text-lg font-semibold mb-4">
              There Are Some Results We Have Already Achieved Together!
            </h3>

            {stats.map((stat, index) => (
              <div key={index} className="mt-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">{stat.label}</p>
                </div>
                <div className="relative w-full h-2 bg-gray-50 rounded-lg mt-1">
                  <div className="absolute inset-0 bg-slate-300 rounded-lg"></div>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className={`absolute h-full ${stat.color} rounded-lg bg-white`}
                  />
                  {/* Progress ke upar percentage show karne ke liye */}
                  <motion.span
                    initial={{ left: "0%" }}
                    animate={{ left: `${stat.value}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="absolute -top-6  text-white text-sm font-bold z-10"
                  >
                    <AnimatedCounter value={stat.value} />
                  </motion.span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-6 lg:p-8">
          <p className="text-gray-400 font-medium">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold my-4">
            We will help you achieve all your business goals
          </h2>
          <p className="text-gray-300 mb-6">
            Choosing us means partnering with a team dedicated to helping you
            navigate complex business challenges with confidence. We are here to
            drive your success every step of the way.
          </p>

          <div className="border-t border-gray-700 my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <ul className="space-y-3">
              {featuresLeft.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <MdDone className="text-gray-400 mt-1 flex-shrink-0" />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {featuresRight.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <MdDone className="text-gray-400 mt-1 flex-shrink-0" />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-700 my-6" />

          <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium transition-all">
            Learm More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
