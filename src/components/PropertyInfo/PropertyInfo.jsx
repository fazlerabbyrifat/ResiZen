import React from 'react';

const PropertyInfo = ({ name, address}) => {
    return (
        <div className='mb-10 space-y-5'>
            <p className='text-gray-500 font-medium'> Home / Rooms / <span className='text-black font-semibold'>{name}</span></p>
            <h3 className='text-3xl font-semibold'>{name}</h3>
            <h5 className='underline'>{address}</h5>
        </div>
    );
};

export default PropertyInfo;