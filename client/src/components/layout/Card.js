import React from 'react';

const Card = ({ title, color, value }) => {
  return (
    <div
      className={`bg-${color}-600 text-white p-6 flex flex-col justify-center items-center ml-4 my-2`}
    >
      <p className='w-1/2 text-left text-xs'>{title}</p>
      <h3 className='text-4xl font-bold'>{value}</h3>
    </div>
  );
};

export default Card;
