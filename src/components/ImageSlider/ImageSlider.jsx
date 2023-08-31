"use client";
import Image from "next/image";
import React from "react";

const ImageSlider = ({ images }) => {
    const [mainImage, ...smallImages] = images;

  return (
    <div className="md:grid md:grid-cols-4 gap-3 my-10">
      <div className="md:col-span-2">
        <Image
          src={mainImage}
          alt="Main Image"
          width={800}
          height={600}
          className = "rounded-lg"
        />
      </div>
      <div className="col-span-2 hidden md:block">
        <div className="grid grid-cols-2 gap-3">
        {smallImages.map((smallImage, index) => (
          <Image
            key={index}
            src={smallImage}
            alt={`Small Image ${index + 1}`}
            width={500}
            height={300}
            className="h-full rounded-lg"
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
