"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const successStories = [
  {
    image: "https://framerusercontent.com/images/CfAtQ5rCx9ObDl9iOMIggHmwAnU.jpg?scale-down-to=512",
    title: "XYZ Tech Solutions: Impactful Portfolio Website",
    description: "Learn how XYZ Marketing Agency created a striking portfolio website.",
  },
  {
    image: "https://framerusercontent.com/images/t3AegRNzc4denhwKXNPCQGUjDq4.png?scale-down-to=512",
    title: "Acme Creative Studios: Portfolio Visibility Boost",
    description: "Explore how XYZ Marketing Agency implemented content strategies.",
  },
  {
    image: "https://framerusercontent.com/images/oK7pv7e8UAtqkv7W7LWA7LdVk2g.png?scale-down-to=512",
    title: "Raztor Creative Studios: Portfolio Visibility Boost",
    description: "Explore how XYZ Marketing Agency implemented content strategies.",
  },
  {
    image: "https://framerusercontent.com/images/5RPam9TX4aXfoOlOaIZbdC5o7uE.jpg?scale-down-to=512",
    title: "Innovative Marketing Solutions: Brand Growth",
    description: "How a leading brand revamped its marketing strategies.",
  },
];

const SuccessStories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true, //center karne ke liye 
        centerPadding: "15%", // padding kam or jyada karne ke liye according to uuuuuuu
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2, centerPadding: "5%" }, //Tablet View ke liye
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, centerPadding: "0" }, //Mobile view ke liye
          },
        ],
      };      

  return (
    <section className="bg-[#F5F3EC] py-16 overflow-x-hidden">
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-16">
        <div className="col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Compilation Of Our Success Stories
          </h2>
        </div>
        <div className="col-span-1">
          <button className="bg-green-400 text-white px-6 py-3 rounded-full hover:bg-green-500 transition-all">
            Read More
          </button>
        </div>
      </div>

      <div className="mt-8 w-full">
        <Slider {...settings} className="slick-slider">
          {successStories.map((story, index) => (
            <div key={index} className="px-4">
              <div className="relative rounded-2xl h-[440px] group">
                <Image src={story.image} alt={story.title} className="w-full h-5/6 object-cover rounded-3xl" width={1000} height={1000}  />
                <div className="absolute bottom-0 left-5 right-5 bg-white p-4 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{story.description}</p>
                  <a href="#" className="flex items-center gap-2 text-gray-900 font-medium mt-2 group-hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;
