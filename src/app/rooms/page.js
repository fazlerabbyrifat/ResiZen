/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import RoomsCard from "@/components/RoomsCard/RoomsCard";

const RoomsPage = () => {
  const [selectedRoomTypes, setSelectedRoomTypes] = useState("");
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

  const pathname = usePathname();

  const fetchRoomData = async () => {
    const response = await axios.get(
      "https://64e3355abac46e480e786405.mockapi.io/rooms"
    );
    return response.data;
  };
  const {
    data: roomData,
    isLoading,
    isError,
  } = useQuery(["roomData"], fetchRoomData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const roomTypes = Array.from(
    new Set(roomData.map((room) => room.house_type))
  );
  const bedsOptions = Array.from(new Set(roomData.map((room) => room.beds)));

  const filteredData = roomData.filter((room) => {
    const roomTypeMatch =
      selectedRoomTypes === "" || room.house_type === selectedRoomTypes;
    const bedsMatch =
      selectedBeds.length === 0 || selectedBeds.includes(room?.beds);

    const priceMatch =
      selectedPriceRange[0] <= room.price &&
      room.price <= selectedPriceRange[1];
    console.log(selectedPriceRange, room.price);

    return roomTypeMatch && bedsMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-16 scroll-smooth">
      <div className="bg-[#f7fafd] py-10">
        <h3 className="text-2xl font-semibold uppercase mb-5 pl-5">
          Home <span className="text-[#235784]">{pathname}</span>
        </h3>
        <h1 className="text-4xl font-bold uppercase pl-5">Hostel Rooms</h1>
      </div>
      <div className="mt-14">
        <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0 md:flex-nowrap gap-5">
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Types
            </label>
            <select
              className="block w-full bg-white border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#235784]"
              value={selectedRoomTypes}
              onChange={(e) => setSelectedRoomTypes(e.target.value)}
            >
              <option value="">All Room Types</option>
              {roomTypes.map((roomType) => (
                <option key={roomType} value={roomType}>
                  {roomType}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Beds
            </label>
            <select
              className="block w-full bg-white border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(e.target.value)}
            >
              <option value="">Beds</option>
              {bedsOptions.map((bedOption) => (
                <option key={bedOption} value={bedOption}>
                  {bedOption}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min Price"
                className="block w-full bg-white border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                value={selectedPriceRange[0]}
                onChange={(e) => {
                  setSelectedPriceRange([
                    parseInt(e.target.value),
                    selectedPriceRange[1],
                  ]);
                }}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max Price"
                className="block w-full bg-white border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                value={selectedPriceRange[1]}
                onChange={(e) => {
                  setSelectedPriceRange([
                    selectedPriceRange[0],
                    parseInt(e.target.value),
                  ]);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 my-6">
          No rooms available for your conditions right now. Please come back
          later.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {selectedRoomTypes === "" &&
          roomData.map((room) => (
            <RoomsCard key={room?.id} room={room}></RoomsCard>
          ))}
        {selectedRoomTypes !== "" &&
          filteredData.map((room) => (
            <RoomsCard key={room?.id} room={room}></RoomsCard>
          ))}
      </div>
    </div>
  );
};

export default RoomsPage;
