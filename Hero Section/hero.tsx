"use client"
import Slider from "react-slick";
import Image from "next/image";
import React, {useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../common/particles";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
    autoplaySpeed: 3000,
    // beforeChange: (current, next) => setActiveSlide(next),
    beforeChange: (current, next) => {
      setDirection(next > current ? 1 : -1);
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      img: "https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg",
      title: "Lorem Loek ci aidaa",
      desc: "mk ajdna dk ja",
      heroImg: "https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg?t=st=1743160843~exp=1743164443~hmac=695aa1623862e96e84d3f3d1c7e23f42fdf23ee6093aa5e8ed092ad992a87196&w=996"
    },
    {
      img: "https://img.freepik.com/free-photo/wide-shot-beautiful-architecture-modern-house_181624-3464.jpg?t=st=1743166059~exp=1743169659~hmac=e9e4a4bcd863247e201f18dda5c1db2abe267319b480fe3685489fd4f011f5c5&w=900",
      title: "Second Slide",
      desc: "Second Slide Description",
      heroImg: "https://img.freepik.com/free-photo/wide-shot-beautiful-architecture-modern-house_181624-3464.jpg?t=st=1743166059~exp=1743169659~hmac=e9e4a4bcd863247e201f18dda5c1db2abe267319b480fe3685489fd4f011f5c5&w=900"
    },
    {
      img: "https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?t=st=1743166088~exp=1743169688~hmac=ba348573a4bf346fb0fc8223e6827329dceef608f4e5e90514dff70711270000&w=996",
      title: "Third Slide",
      desc: "Third Slide Description",
      heroImg: "https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?t=st=1743166088~exp=1743169688~hmac=ba348573a4bf346fb0fc8223e6827329dceef608f4e5e90514dff70711270000&w=996"
    },
  ];

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const headingVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute h-screen w-full">
          <Particles/>

        <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={sliderData[activeSlide]?.heroImg}
            alt="hero background"
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>
        </div>
        <div className="container mx-auto relative z-20">
          <div className="absolute top-52">
            {/* <h1 className="text-7xl text-white w-4/5">
              It looks like youve uploaded an image of a navigation bar.
            </h1> */}
             <div className="overflow-hidden mb-20 ps-5">
            <AnimatePresence custom={direction} mode="wait">
              <motion.h1
                key={activeSlide}
                custom={direction}
                variants={headingVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl text-white w-full md:w-4/5 font-bold"
              >
                {sliderData[activeSlide]?.title}
              </motion.h1>
            </AnimatePresence>

            <div className="mt-40 w-full grid grid-cols-3 ">
              <div className="col-span-2 text-black pt-5">
                <div className="">
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Landscape
                  </span>
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Wildlife
                  </span>
                </div>
                <div className="mt-5">
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Travel
                  </span>
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Portrait
                  </span>
                  <span className="px-3 py-2 border rounded-full bg-white/50 hover:bg-white/70 transition-all cursor-pointer backdrop-blur-md me-2">
                    Wildlife
                  </span>
                </div>
              </div>
              <div className="gap-10 text-black ">
                <div className="">
                  <Slider  {...settings}>
                    {sliderData.map((item, index) => (
                      <div key={index} className="px-3">
                        <div className="p-5 border rounded-md bg-white/50 backdrop-blur-md flex">
                          <Image
                            src={item.img}
                            width={1000}
                            height={1000}
                            alt="Slide Image"
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="ml-3">
                            <p className="text-lg font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;