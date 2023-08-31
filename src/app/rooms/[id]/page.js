"use client"
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const SingleRoomDetailsPage = ({params}) => {
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
        console.log(id)

      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (isError) {
        return <p>Error fetching data</p>;
      }



    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-16 scroll-smooth'>
            <ImageSlider images={roomDetails.images} />
        </div>
    );
};

export default SingleRoomDetailsPage;