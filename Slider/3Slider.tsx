"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaHospitalSymbol, FaStethoscope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

type Slide = {
  title: string;
  subtitle: string;
  badge: string;
  img: string;
  color: string;
  icon: React.ReactNode;
};

const slides: Slide[] = [
  {
    title: "Quality Medical Care For Healthier and Tommorow",
    subtitle:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    badge: "Medical & Health Care Center",
    img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176681/slder3_lfuzvx.jpg",
    color: "from-[#DCEEF2]",
    icon: <FaHeart className="text-red-500 md:text-4xl text-xl mr-1" />,
  },
  {
    title: "Your Health, Our Priority Across Every Specialty",
    subtitle:
      "From pediatrics to cardiology, experience expert care under one roof with advanced diagnostics and compassionate professionals.",
    badge: "Trusted Multi-Specility Care",
    img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176682/slide2_oq8mjx.jpg",
    color: "from-[#DCEEF2]",
    icon: <FaStethoscope className="text-sky-500 md:text-4xl text-xl mr-1" />,
  },
  {
    title: "One Clinic, Endless Possibilities for Healing",
    subtitle:
      "Empowering your wellness journey with state-of-the-art facilities, experienced doctors, and personalized treatment plans.",
    badge: "Healthcare Redefined",
    img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176833/slide1-min_c62sc2.jpg",
    color: "from-[#DCEEF2]",
    icon: <FaHospitalSymbol className="text-rose-500 md:text-4xl text-xl mr-1" />,
  },
];

const transitionDuration = 7000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const length = slides.length;

  const changeSlide = useCallback((newIndex: number) => {
    setCurrent(newIndex);
  }, []);

  const prevSlide = useCallback(() => {
    changeSlide(current === 0 ? length - 1 : current - 1);
  }, [current, length, changeSlide]);

  const nextSlide = useCallback(() => {
    changeSlide((current + 1) % length);
  }, [current, length, changeSlide]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => nextSlide(), transitionDuration);
    return () => clearInterval(timer);
  }, [current, isHovered, nextSlide]);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section
      className="relative w-full overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Hero Slider"
    >
      <div className="relative rounded-2xl overflow-hidden m-5 h-[80vh] lg:h-[90vh] md:h-[40vh] flex items-center bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[current].img}
              alt={`Slide image for ${slides[current].title}`}
              fill
              priority={current === 0}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} to-transparent`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-left space-y-6 max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center justify-center text-black font-semibold text-lg"
              >
                {slides[current].icon} &nbsp; {slides[current].badge}
              </motion.span>

              <h1 className="md:max-w-xl w-full text-4xl lg:text-6xl font-medium text-black leading-8">
                {slides[current].title}
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="md:flex gap-4 pt-5"
              >
                <Link href="#" passHref>
                  <button className="text-white hover:bg-white bg-[#EF3B2D] hover:text-gray-900 py-3 px-5 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-1 group">
                    <span className="text-sm">
                      Explore Our Department
                    </span>
                    <MdArrowOutward className="text-md" />
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="hover:text-white bg-white hover:bg-[#EF3B2D] text-gray-900 py-3 px-5 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-1 group md:mt-0 mt-4">
                    <span className="text-sm">
                      Meet Our Experts
                    </span>
                    <MdArrowOutward className="text-md" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Dots navigation */}
          <div className="absolute lg:bottom-10 bottom-20 flex gap-2 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => changeSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`flex items-center justify-center w-4 h-4 rounded-full transition-all duration-300 ${
                  current === i
                    ? "border border-black"
                    : "border border-transparent"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    current === i ? "bg-black" : "bg-black"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="absolute flex justify-between w-full px-10 z-30">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden md:block p-4 rounded-full bg-white hover:bg-[#EF3B2D] backdrop-blur-sm border transition-colors"
          >
            <MdOutlineArrowBack className="text-xl text-black hover:text-white" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden md:block p-4 rounded-full bg-white hover:bg-[#EF3B2D] backdrop-blur-sm border transition-colors"
          >
            <MdOutlineArrowForward className="text-xl text-black hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;