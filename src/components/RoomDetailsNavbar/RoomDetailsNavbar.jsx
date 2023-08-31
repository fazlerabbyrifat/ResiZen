"use client";
import React, { useState } from "react";

const RoomDetailsNavbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="max-w-7xl mx-auto py-5 bg-white sticky top-0 w-full z-50">
      <div>
        <ul className="flex space-x-8 justify-start">
          <li>
            <a
              href="#propertyImages"
              className={`text-gray-600 hover:text-black text-lg font-semibold pb-2 ${
                activeLink === "propertyImages" ? "text-black border-b-2 border-[#235784]" : ""
              }`}
              onClick={() => handleLinkClick("propertyImages")}
            >
              Property Images
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`text-gray-300 hover:text-black ${
                activeLink === "about" ? "text-blue-600 underline" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          {/* Repeat similar pattern for other links */}
        </ul>
      </div>
    </nav>
  );
};

export default RoomDetailsNavbar;
