"use client"
import { ArrowRightIcon, BuildingLibraryIcon, MapPinIcon, TvIcon, WifiIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

const Features = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-5 md:flex items-center scroll-smooth'>
            <div className='w-1/2 p-10'>
                <h1 className='text-4xl font-bold mb-2'>We have everything you need</h1>
                <p className='text-lg font-medium mb-5'>We provided premium services to our customers. We provided a best studying environment for our students. Also we provided solutions for mental and physical satisfaction like sports, cultural program.</p>
                <div className='md:flex items-center gap-5 mb-3'>
                    <div className='flex items-center'>
                        <span>
                            <WifiIcon className='w-14 h-14 mr-2 text-[#235784]' />
                        </span>
                            <p className='text-base font-medium'>Free available high speed Wifi</p>
                    </div>
                    <div className='flex items-center'>
                        <span>
                            <BuildingLibraryIcon className='w-14 h-14 mr-2 text-[#235784]' />
                        </span>
                        <p className='text-base font-medium'>Premium library facilities</p>
                    </div>
                </div>
                <div className='md:flex items-center gap-5 mb-3'>
                    <div className='flex items-center'>
                        <span>
                            <MapPinIcon className='w-14 h-14 mr-3 text-[#235784]' />
                        </span>
                            <p className='text-base font-medium'>Convenient location in the center</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='ml-4'>
                            <TvIcon className='w-14 h-14 mr-2 text-[#235784]' />
                        </span>
                        <p className='text-base font-medium'>Proper entertainment facilities</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <button className='mt-6 bg-[#235784] text-white hover:bg-white hover:text-[#235784] text-lg py-2 px-6 rounded-full'>Book Now</button>
                    <button className='flex items-center pt-6 text-[#235784]'>
                        More About <span>
                            <ArrowRightIcon className='w-3 h-3 ml-3' />
                        </span>
                    </button>
                </div>
            </div>
            <div className='w-1/2'>
                <Image className='w-full' src="/featureImage.jpg" alt='feature image' width={450} height={450}></Image>
            </div>
        </div>
    );
};

export default Features;