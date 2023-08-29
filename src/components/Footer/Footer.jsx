import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#235784] text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">ResiZen</h2>
          <p className="mt-2">Premium Rental House Facilities for Students</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/rooms" className="hover:text-gray-300">Rooms</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-2xl hover:text-gray-300"><FaFacebook /></Link>
          <Link href="#" className="text-2xl hover:text-gray-300"><FaTwitter /></Link>
          <Link href="#" className="text-2xl hover:text-gray-300"><FaInstagram /></Link>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} ResiZen. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;