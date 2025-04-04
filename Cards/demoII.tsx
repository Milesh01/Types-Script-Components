"use client";
import React, { useState } from "react"; 
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


interface Step {
  id: string;
  title: string;
  description: string;
  img1: string;
  img2: string;
}

const steps: Step[] = [
  {
    id: "Make A Plan",
    title: "How the digital works to grow your business",
    description: "Always look at the data, before and after, to make sure it's working.",
    img1: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2318543/pexels-photo-2318543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "Strategy",
    title: "Creating the right digital strategy",
    description: "We analyze data and market trends to create a winning strategy.",
    img1: "https://images.pexels.com/photos/1036403/pexels-photo-1036403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "Make Design",
    title: "Implementing and executing the plan",
    description: "Turning strategies into actionable steps with our expert team.",
    img1: "https://images.pexels.com/photos/1639813/pexels-photo-1639813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1036403/pexels-photo-1036403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "Project Handover",
    title: "Analyzing and optimizing results",
    description: "Tracking performance and making data-driven improvements.",
    img1: "https://images.pexels.com/photos/2318543/pexels-photo-2318543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2598761/pexels-photo-2598761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const BusinessSteps = () => {
  const [activeStep, setActiveStep] = useState<Step>(steps[0]);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const rotatedImageVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 6, transition: { duration: 0.5 } }
  };

  return (
    <div className="text-black md:p-10 px-3">
      {/* Animated Title */}
     <div className="text-center mb-10">
        <h2 className="text-5xl">Our Process</h2>
        <p className="text-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, veniam?</p>
     </div>

      <div className="flex justify-center gap-8 mt-8 border-gray-700 pt-4">
        {steps.map((step) => (
          <motion.button
            key={step.id}
            onClick={() => setActiveStep(step)}
            className={`text-lg lg:text-2xl font-semibold uppercase transition-all ${
              activeStep.id === step.id ? "text-lime-400 border-b-4 border-lime-400" : "text-gray-800 hover:text-green-800"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {step.id.toUpperCase()}
          </motion.button>
        ))}
      </div>
      {/* Grid Layout with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="grid md:grid-cols-2 gap-10 md:pt-20 items-center"
        >
          {/* Left Content Box */}
          <motion.div variants={imageVariants} className="lg:max-w-lg">
            <motion.p className="mb-4 text-2xl">{activeStep.title}</motion.p>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring" }}>
              <Image
                src={activeStep.img1}
                alt="Content 1"
                width={1000}
                height={1000}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Content Box with Rotated Effect */}
          <motion.div variants={imageVariants} className="relative lg:max-w-lg">
            <motion.div
              variants={rotatedImageVariants}
              className="absolute -top-5 -left-5 z-0"
              whileHover={{ rotate: 10 }}
            >
              <Image
                src={activeStep.img1}
                alt="Content 2"
                width={1000}
                height={1000}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring" }}>
              <Image
                src={activeStep.img2}
                alt="Content 1"
                width={1000}
                height={1000}
                className="w-full rounded-lg shadow-lg relative z-10 background-blur-md"
              />
            </motion.div>
            <motion.p className="mt-4 text-lg">{activeStep.description}</motion.p>
            <motion.div
              className="absolute top-4 right-4 bg-lime-400 p-3 rounded-full text-black z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUpRightFromSquare />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Steps Navigation */}
      
    </div>
  );
};

export default BusinessSteps;