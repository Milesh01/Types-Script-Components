"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  { id: "01", title: "Initial Consultation", description: "We begin by understanding your business, industry challenges, and financial goals." },
  { id: "02", title: "Planning & Solution", description: "We focus on solutions that align with your business model and improve efficiency." },
  { id: "03", title: "Implementation", description: "We work with your team to develop a plan, provide the resources and tools needed." },
  { id: "04", title: "Review And Support", description: "Our commitment extends beyond immediate project completion." },
  { id: "05", title: "Initial Consultation", description: "We begin by understanding your business, industry challenges, and financial goals." },
  { id: "06", title: "Planning & Solution", description: "We focus on solutions that align with your business model and improve efficiency." },
  { id: "07", title: "Implementation", description: "We work with your team to develop a plan, provide the resources and tools needed." },
];

const ProcessSteps = () => {
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1000); // 1 sec delay per step

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-center px-6">
        <div className="container mx-auto">
      <h3 className="text-xl text-black">Our Process</h3>
      <h2 className="text-4xl font-bold text-gray-900 mt-2">
        4 Easy Steps To Achieve Your Goals
      </h2>
      <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
        Our consulting process ensures comprehensive analysis, strategic planning, and effective implementation for lasting results.
      </p>

      {/* Progress Bar with Steps */}
      <div className="relative flex justify-between items-center max-w-xl mx-auto mt-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative w-1/4">
            {/* Connecting Line */}
            {index > 0 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: visibleStep >= index ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 -left-1/2 h-0 border-t-2 border-dashed border-gray-400 transition-all w-full"
              />
            )}
            {/* Step Square */}
            <motion.div
              initial={{ scale: 0.0 }}
              animate={{ scale: visibleStep >= index ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
              className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-md z-10 transition-all 
                ${visibleStep >= index ? (index % 2 === 0 ? "bg-gray-500" : "bg-gray-800") : "bg-gray-400"}
              `}
            >
              {step.id}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: visibleStep >= index ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-6 rounded-lg shadow-md border transition-all ${
              visibleStep >= index ? "border-gray-300 bg-white" : "border-gray-900"
            }`}
          >
            <h3 className="text-xl text-gray-900">{step.title}</h3>
            <p className="text-gray-700 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
