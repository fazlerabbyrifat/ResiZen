"use client";
import PropertyImages from "@/components/PropertyImages/PropertyImages";
import PropertyInfo from "@/components/PropertyInfo/PropertyInfo";
import RoomDetailsNavbar from "@/components/RoomDetailsNavbar/RoomDetailsNavbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const SingleRoomDetailsPage = ({ params }) => {
  const id = params.id;
  const {
    data: roomDetails = [],
    isLoading,
    isError,
  } = useQuery(["roomDetails"], async () => {
    const response = await axios.get(
      `https://64e3355abac46e480e786405.mockapi.io/rooms/${id}`
    );
    return response.data;
  });

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 scroll-smooth">
      <RoomDetailsNavbar />
      <div id="#propertyImages">
        <PropertyImages images={roomDetails?.images} />
        <PropertyInfo name = {roomDetails?.name} address = {roomDetails?.address} />
      </div>
    </div>
  );
};

export default SingleRoomDetailsPage;
