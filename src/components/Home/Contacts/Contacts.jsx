/* eslint-disable react/no-unescaped-entities */
import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-16 md:flex items-center scroll-smooth">
      <div className="md:w-1/2 pt-10 pr-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Contacts
        </h2>
        <p className="text-base font-medium mb-5">
          Have questions or inquiries? Feel free to get in touch with us. We're
          here to help!
        </p>
        <div className="md:flex items-center justify-between mb-5">
          <div className="flex items-center mb-3 md:mb-0">
            <span>
              <PhoneIcon className="w-20 h-20 px-5 py-3 rounded-md bg-[#ddeaf6] text-[#235784]" />
            </span>
            <div className="ml-3">
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p className="text-base font-medium">(+880)-170-000-0000</p>
              <p className="text-base font-medium">(+880)-180-000-0000</p>
            </div>
          </div>
          <div className="flex items-center">
            <span>
              <EnvelopeIcon className="w-20 h-20 px-5 py-3 rounded-md bg-[#ddeaf6] text-[#235784]" />
            </span>
            <div className="ml-3">
              <h3 className="text-2xl font-semibold">Email</h3>
              <p className="text-base font-medium">resizen@repliq.dev</p>
              <p className="text-base font-medium">resizen@repliq.com</p>
            </div>
          </div>
        </div>
        <div className="md:flex items-center justify-between mb-5">
          <div className="flex items-center mb-3 md:mb-0">
            <span>
              <MapPinIcon className="w-20 h-20 px-5 py-3 rounded-md bg-[#ddeaf6] text-[#235784]" />
            </span>
            <div className="ml-3">
              <h3 className="text-2xl font-semibold">Location</h3>
              <p className="text-base font-medium">Lalmatiya, Mohammadpur</p>
              <p className="text-base font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center md:mr-6">
            <span>
              <ClockIcon className="w-20 h-20 px-5 py-3 rounded-md bg-[#ddeaf6] text-[#235784]" />
            </span>
            <div className="ml-3">
              <h3 className="text-2xl font-semibold">Availability</h3>
              <p className="text-base font-medium">Sunday - Friday</p>
              <p className="text-base font-medium">10 am - 8 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-5">
        <Image src='/contact.jpg' alt="Contact image" width={450} height={450} className="w-full rounded-lg" ></Image>
      </div>
    </div>
  );
};

export default Contacts;
