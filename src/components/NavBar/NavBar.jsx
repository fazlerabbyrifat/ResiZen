"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-[#235784] flex items-center text-xl md:text-2xl lg:text-3xl font-semibold"
              >
                <span>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={30}
                  ></Image>
                </span>
                ResiZen
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-4">
              <Link href="/" className="text-[#235784]">
                Home
              </Link>
              <Link href="/about" className="text-[#235784]">
                About
              </Link>
              <Link href="/rooms" className="text-[#235784]">
                Rooms
              </Link>
              <Link href="/contact" className="text-[#235784]">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:flex hidden md:ml-4">
            <Link href="/login">
              <button className="bg-[#235784] text-white hover:bg-white hover:text-[#235784] text-lg py-2 px-6 rounded-full">
                Login
              </button>
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="text-[#235784] h-5 w-5" />
              ) : (
                <Bars3Icon className="text-[#235784] h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="pl-6 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-[#235784] block">
            Home
          </Link>
          <Link href="/about" className="text-[#235784] block">
            About
          </Link>
          <Link href="/rooms" className="text-[#235784] block">
            Rooms
          </Link>
          <Link href="/contact" className="text-[#235784] block">
            Contact
          </Link>
          <Link href="/login">
            <button className="mt-6 bg-[#235784] text-white hover:bg-white hover:text-[#235784] text-lg py-2 px-6 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
