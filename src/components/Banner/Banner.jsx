"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner = () => {
    const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:flex items-center scroll-smooth">
      <div className={`lg:w-[580px] bg-gray-100 px-10 py-16 my-5 ${
          isAnimated ? "opacity-100 translate-y-0 transition-transform duration-1000 ease-in-out" : "opacity-0 translate-y-40"
        }`}>
        <h1 className="text-2xl lg:text-4xl font-bold text-black mb-4">
          Elevate Your Student Living with ResiZen: Where Comfort Meets
          Connection
        </h1>
        <p className="text-base font-medium">
          Experience modern, vibrant hostels tailored for students. Unwind in
          cozy spaces, engage with a diverse community, and create memories that
          last a lifetime.
        </p>
        <button className="mt-6 bg-[#235784] text-white hover:bg-white hover:text-[#235784] text-lg py-2 px-6 rounded-full">
            Discover More
          </button>
      </div>
      <div className={`lg:w-[700px] ${isAnimated ? "opacity-100 translate-y-0 transition-transform duration-1000 ease-in-out" : "opacity-0 translate-y-40"}`}>
        <Image
          className="w-full"
          src="/banner.jpg"
          alt="bannerImage"
          width={1500}
          height={1000}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
