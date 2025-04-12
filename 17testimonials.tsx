import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Philip Hodgson",
    role: "Founder InterEX",
    image: "https://via.placeholder.com/50",
    text: "We reached out to Bizio when our company was facing financial challenges that were impacting our growth. Their deep understanding of financial strategies helped us stabilize our cash flow and improve profitability!",
    class: "-mt-10",
  },
  {
    name: "Oscar Burgess",
    role: "Founder LogiCO",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1743586512~exp=1743590112~hmac=6604786898582317b88208b43852771ef0ecb0776321142b84f24163e7a6cc5c&w=996",
    text: "Working with this team completely transformed our financial strategy. Their deep understanding of market trends and risk management helped us navigate turbulent times!",
    class: "-mb-5",
  },
  {
    name: "Philip Hodgson",
    role: "Founder InterEX",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1743586512~exp=1743590112~hmac=6604786898582317b88208b43852771ef0ecb0776321142b84f24163e7a6cc5c&w=996",
    text: "We reached out to Bizio when our company was facing financial challenges that were impacting our growth. Their deep understanding of financial strategies helped us stabilize our cash flow and improve profitability!",
  },
  {
    name: "Gabrielle Brooks",
    role: "Owner ManFirm",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1743586512~exp=1743590112~hmac=6604786898582317b88208b43852771ef0ecb0776321142b84f24163e7a6cc5c&w=996",
    text: "The guidance and consulting we received from Bizio were game-changing. Not only did they help us optimize our investments, but their advice on risk management!",
    class: "mt-5 md:-mb-5",
  },
  {
    name: "Vera Walters",
    role: "Owner FinFirm",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1743586512~exp=1743590112~hmac=6604786898582317b88208b43852771ef0ecb0776321142b84f24163e7a6cc5c&w=996",
    text: "We have worked with a number of consultants over the years, but none have provided the strategic value that Bizio did. They helped us redesign our financial forecasting system!",
  },
  {
    name: "Oscar Burgess",
    role: "Founder LogiCO",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1743586512~exp=1743590112~hmac=6604786898582317b88208b43852771ef0ecb0776321142b84f24163e7a6cc5c&w=996",
    text: "Working with this team completely transformed our financial strategy. Their deep understanding of market trends and risk management helped us navigate turbulent times!",
    class: "mt-5 md:-mb-10",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg text-white py-16">
        <div className="container  mx-auto grid grid-cols-2  px-4 md:px-16">
        <div className="relative lg:col-span-1 col-span-2">
        <div className="sticky top-10 p-5"> //position sticky 
            <span>Testimonials</span>
        <h2 className="text-3xl md:text-4xl my-4">What Our Valuable Customers Said</h2>
        <p className="text-gray-300 mt-2 lg:max-w-96">
          Below are some reviews from our clients about our business and financial consulting services.
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded-md shadow hover:bg-gray-200">
          Learn More
        </button>
</div>
</div>
        <div className="grid md:grid-cols-2 lg:col-span-1 col-span-2 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-gray-700/50 border p-6 rounded-lg shadow-lg md:${testimonial.class}`}>
              <p className="text-gray-300">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                <Image width={1000} height={1000} src={testimonial.image} alt={testimonial.name} className="w-12 h-12 object-cover rounded-full mr-3" />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Testimonials;
