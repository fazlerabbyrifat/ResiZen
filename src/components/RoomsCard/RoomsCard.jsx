import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKingBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const RoomsCard = ({ room }) => {
  const {
    id,
    images,
    name,
    address,
    beds,
    amenity,
    baths,
    price,
  } = room;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleDetails = (id) => {
    window.location.href = `/rooms/${id}`
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="w-full  relative">
        <Image
          className="w-full aspect-[16/10] object-center object-cover transition-shadow duration-300 transform hover:shadow-md hover:scale-105"
          src={images[currentImageIndex]}
          alt={name}
          width={350}
          height={350}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-lg font-semibold">{name}</p>
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-full m-2 bg-gray-900 bg-opacity-60"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full m-2 bg-gray-900 bg-opacity-60"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold ">{name}</h2>
        <p className="text-gray-600 ">${price} /mo</p>
        <p className="text-sm font-normal  flex items-center">
          <span>
            <MapPinIcon className="w-3 h-3 mr-2" />
          </span>
          {address}
        </p>
        <div className="flex flex-wrap gap-y-4 gap-x-4 ">
          {amenity?.map((item, index) => (
            <p
              key={index}
              className="bg-gray-100 rounded-lg px-3 py-1 text-center text-xs"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-y-5 gap-x-4">
          <div className="flex items-center gap-2 text-sm font-normal">
            <span>
              <MdOutlineKingBed />
            </span>
            <p>{beds} Beds</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-normal">
            <span>
              <BiBath />
            </span>
            <p>{baths} Baths</p>
          </div>
        </div>
        <div className="flex justify-end gap-5 ">
          <button className="bg-[#ddeaf6] text-[#235784] px-4 py-2 mt-5 rounded-lg">
            Book Now
          </button>
          <button
          onClick={() => handleDetails(id)}
            className="bg-[#235784] text-white px-4 py-2 mt-5 rounded-lg"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
