import Image from "next/image";
import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Grid Item 1 */}
        <div className="relative h-72 bg-[#0D1B2A] text-white rounded-lg md:p-7 p-4 lg:col-span-2 flex flex-col justify-between">
          <div className="z-10 flex flex-col justify-center items-start h-full">
            <h3 className="text-sm mb-2 ">Why Choose Us</h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug max-w-xl">
              Advanced Medical Care with a Human Touch
            </h2>
          </div>
          <div className="absolute -z-0 top-0 right-0 h-full overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746180247/avatar_prfmsk.png"
              alt="Doctor"
              className="w-full h-72 rounded mt-4 object-contain"
            />
          </div>
        </div>

        {/* Grid Item 2 & 3 */}
        <div className="bg-[#E0F4FF] rounded-lg md:p-7 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-900 text-gray-900 text-xl font-bold">
            1
          </div>
          <h3 className="text-[#0D1B2A] font-bold text-lg my-6">
            Experienced and Compassionate Care
          </h3>
          <p className="text-sm text-gray-600">
            Team highly trained doctors, nurses healthcare patient.
          </p>
        </div>

        <div className="bg-[#E0F4FF] rounded-lg md:p-7 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-900 text-gray-900 text-xl font-bold">
            2
          </div>
          <div className="text-[#0D1B2A] font-bold text-lg">
            Advanced Medical Technology
          </div>
        </div>

        {/* Grid Item 4, 5, 6 */}
        <div className="bg-[#E0F4FF] rounded-lg md:p-7 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-900 text-gray-900 text-xl font-bold">
            3
          </div>
          <div className="text-[#0D1B2A] font-bold text-lg mt-6">
            Emergency and Support Services
          </div>
        </div>
        <div className="bg-[#E0F4FF] rounded-lg md:p-7 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-900 text-gray-900 text-xl font-bold">
            4
          </div>
          <div className="text-[#0D1B2A] font-bold text-lg mt-6">
            Patient-Centered Approach
          </div>

        </div>
        <div className="lg:col-span-2 rounded-lg overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746176682/slide2_oq8mjx.jpg"
            alt="Team"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
