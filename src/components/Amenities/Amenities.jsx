import React from 'react';

const Amenities = ({amenities}) => {
    return (
        <div id="amenities" className='space-y-3 mb-10'>
            <h3 className='text-3xl font-semibold'>Amenities</h3>
            <p className='text-lg font-medium'>Relax and get comfortable in your home with the following convenient amenities.</p>
            <div className='flex flex-wrap gap-4'>
            {
                amenities?.map((amenity, index) => <p className='p-5 border rounded-lg shadow-lg' key={index}>{amenity}</p>)
            }
        </div>
        </div>
    );
};

export default Amenities;