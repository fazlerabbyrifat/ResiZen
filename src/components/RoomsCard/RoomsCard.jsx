import Image from "next/image";
import React from "react";
import { MdOutlineKingBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";

const RoomsCard = ({ room }) => {
  const {
    id,
    images,
    name,
    address,
    beds,
    amenity,
    house_type,
    baths,
    price,
    contact,
  } = room;
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="relative">
        <Image
          className="w-full h-96 object-cover transition-shadow duration-300 transform hover:shadow-md hover:scale-105"
          src={images[0]}
          alt={name}
          width={350}
          height={350}
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-lg font-semibold">{name}</p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">${price} /mo</p>
        <div className="flex items-center gap-5">
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
        <div className="flex flex-wrap gap-4 my-2">
        {amenity?.map((item, index) => (
          <p key={index} className="bg-gray-100 rounded-lg px-3 py-1 text-center text-xs">
            {item}
          </p>
        ))}
        </div>
        <p className="text-sm font-normal mb-2">{address}</p>
        <p className="text-sm font-normal mb-2">{contact}</p>
        <div className="flex mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
            Book Now
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
