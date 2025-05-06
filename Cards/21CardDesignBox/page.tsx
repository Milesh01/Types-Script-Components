"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBaby, FaHandsHelping } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Info = () => {
  return (
    <section className=" bg-gray-50 py-11">
      <main className="max-w-7xl mx-auto py-2 px-4">
        <div className="grid lg:grid-cols-2 lg:flex-row lg:items-center gap-16">
          <section className="w-full">
            <h1 className="text-black text-4xl sm:text-5xl font-normal leading-tight">
              Empowering <span className="text-primary-red"> Holistic Wellness </span> for Families Across India
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed my-10">
              At WS Clinic, we are dedicated to enhancing overall well-being
              through a multidisciplinary approach. Our expert team offers
              personalized care addressing mental, physical, and behavioral
              health needs in a compassionate environment.
            </p>
            <div className="space-y-8 mb-10">
              <div className="flex md:items-start gap-4">
                <div className="flex">
                <FaHandsHelping className="text-red-500 md:text-4xl text-2xl w-14 h-14 rounded-full border border-red-300 p-2"/>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-base mb-1">
                    Comprehensive &amp; Personalized Care
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    Our multidisciplinary team collaborates to provide tailored
                    treatments, ensuring each patient&apos;s unique needs are met
                    with expertise and empathy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex">
                  <FaBaby  className="text-red-500 md:text-4xl text-2xl w-14 h-14 rounded-full border border-red-300 p-2"/>
                </div>
                <div>
                  <h3 className="font-semibold text-black text-base mb-1">
                    Child-Centric Therapies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    We specialize in pediatric care, offering services like
                    occupational and speech therapy to support children&apos;s
                    developmental and behavioral needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-4">
              <Link
                href="/bppk-appointments"
                className="flex items-center gap-3 bg-primary-red/90 hover:bg-primary-red text-white font-semibold text-sm rounded-full py-3 px-6"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white">
                  <MdOutlineArrowOutward />
                </span>
                Book an Appointment
              </Link>
              <div className="flex items-center text-gray-900 text-sm">
              <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1746517948/24_gvkzhb.png"
                  alt="Support" width={1000} height={1000} className="h-12 w-12 object-cover"/>
                <span className="-ml-2 mt-2 font-medium">
                   Support:
                  <a href="tel:+91+91 88000-07740">+91 88000-07740</a>
                </span>
              </div>
            </div>
          </section>
          <section className="relative flex justify-center w-full">
            <Image
              alt="WS Clinic healthcare professionals providing compassionate care"
              className="rounded-2xl max-w-full h-auto"
              height="600"
              src="/Doctor.jpg"
              width="480"
            />
            <Image
              alt="Child receiving therapy at WS Clinic"
              className="hidden md:block rounded-2xl absolute lg:-left-12 md:left-10 top-1/3 max-w-full h-auto shadow-lg"
              height="320"
              src="/child.jpg"
              width="240"
            />
          </section>
        </div>
      </main>
    </section>
    
  );
};

export default Info;
