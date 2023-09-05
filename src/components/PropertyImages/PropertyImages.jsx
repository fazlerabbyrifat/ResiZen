import Image from "next/image";
import React from "react";

const PropertyImages = ({ images }) => {
  const [mainImage, ...otherImages] = images;

  return (
    <div id="propertyImages" className="md:grid md:grid-cols-4 gap-3 mt-3 mb-10">
      <div className="md:col-span-2">
        <Image
          src={mainImage}
          alt="Main Image"
          width={800}
          height={600}
          className="rounded-lg h-full"
        />
      </div>
      <div className="col-span-2 hidden md:block">
        <div className="grid grid-cols-2 gap-3">
          {otherImages.map((otherImage, index) => (
            <Image
              key={index}
              src={otherImage}
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

export default PropertyImages;
