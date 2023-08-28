"use client";
import RoomsCard from "@/components/RoomsCard/RoomsCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Room = () => {
  const {
    data: rooms = [],
    isLoading,
    isError,
  } = useQuery(["rooms"], async () => {
    const response = await axios.get(
      "https://64e3355abac46e480e786405.mockapi.io/rooms"
    );
    return response.data;
  });

  const handleViewAllRooms = () => {
    window.location.href = "/rooms";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-5 scroll-smooth">
      <div className="md:flex items-center justify-between mb-5">
        <h3 className="text-3xl font-semibold">Hostel Rooms</h3>
        <button
          onClick={handleViewAllRooms}
          className="bg-[#ddeaf6] text-[#235784] px-4 py-2 rounded-full mr-2"
        >
          View All Rooms
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms.slice(0, 3).map((room) => (
          <RoomsCard key={room?.id} room={room}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Room;
