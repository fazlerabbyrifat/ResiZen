"use client";
import Link from "next/link";
import React, { useState } from "react";

const RoomDetailsNavbar = () => {
  const [activeLink, setActiveLink] = useState("#propertyImages");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="max-w-7xl mx-auto py-5 bg-white sticky top-0 w-full z-50">
      <div>
      <ul className="flex space-x-8 justify-start">
          <li className={activeLink === "#propertyImages" ? "text-black text-lg font-semibold pb-2 border-b-2 border-black" : "text-gray-600 hover:text-black text-lg font-semibold pb-2"}>
            <Link href="#propertyImages" onClick={() => handleLinkClick("#propertyImages")}>
              Property Images
            </Link>
          </li>
          <li className={activeLink === "#propertyDetails" ? "text-black text-lg font-semibold pb-2 border-b-2 border-black" : "text-gray-600 hover:text-black text-lg font-semibold pb-2"}>
            <Link href="#propertyDetails" onClick={() => handleLinkClick("#propertyDetails")}>
              Property Details
            </Link>
          </li>
          <li className={activeLink === "#amenities" ? "text-black text-lg font-semibold pb-2 border-b-2 border-black" : "text-gray-600 hover:text-black text-lg font-semibold pb-2"}>
            <Link href="#amenities" onClick={() => handleLinkClick("#amenities")}>
              Amenities
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RoomDetailsNavbar;
