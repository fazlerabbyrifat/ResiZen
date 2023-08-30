import Image from "next/image";
import React from "react";

const Gallery = () => {
  const galleryImages = [
    "/gallery/bedroom.jpg",
    "/gallery/library.jpg",
    "/gallery/tvroom.jpg",
    "/gallery/parking.jpg",
    "/gallery/sports.jpg",
    "/gallery/party.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-16 scroll-smooth">
      <h1 className="text-3xl font-semibold">Photos of our rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {galleryImages.map((galleryImage, index) => (
          <Image
            key={index}
            src={galleryImage}
            alt="galleryImage"
            width={450}
            height={450}
            className="aspect-[16/10] object-center object-cover rounded"
          ></Image>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
