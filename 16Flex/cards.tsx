"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Majestic Creatures of the African Savanna",
    description: "Capturing the Exquisite Patterns and Dynamic Energy of Africa's Most Iconic Big Cat",
    image: "https://img.freepik.com/free-photo/cheetah-standing-dead-tree_181624-16716.jpg",
  },
  {
    title: "A Temple's Serene Silhouette",
    description: "A beautiful temple surrounded by nature's calmness.",
    image: "https://img.freepik.com/free-photo/landscape-tropical-green-forest_181624-30814.jpg",
  },
  {
    title: "Moments Framed in Portraits",
    description: "Capturing the emotions and beauty in human portraits.",
    image: "https://img.freepik.com/free-photo/grassy-field-with-trees-giraffes-walking-around_181624-3477.jpg",
  },
];

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-4 md:h-[400px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`relative rounded-xl  overflow-hidden cursor-pointer ${
              isMobile ? "w-full" : activeIndex === index ? "flex-grow " : "flex-shrink-0"
            }`}
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onClick={() => isMobile && setActiveIndex(index)}
            initial={{ width: isMobile ? "100%" : "25%",
                   height: isMobile ? "300px" : "100%"
             }}
            animate={{
              width: isMobile ? "100%" : activeIndex === index ? "60%" : "20%",
              flex: isMobile ? 1 : activeIndex === index ? 3 : 1
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            whileHover={!isMobile ? { scale: activeIndex === index ? 1 : 1.02 } : {}}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority={index === activeIndex}
            />

            <AnimatePresence>
              {(activeIndex === index || isMobile) && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-6 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl font-semibold mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm md:text-base opacity-80 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {card.description}
                  </motion.p>
                  <motion.button
                    className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    More Details →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CardSlider;