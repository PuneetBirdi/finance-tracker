import React from 'react';

const Card = ({ title, color, value, font }) => {
  return (
    <div
      className={`bg-${color}-600 text-${font}-600 p-4 flex flex-col justify-center items-center ml-4 my-2 py-6 rounded shadow-md`}
    >
      <h3 className='text-3xl font-bold'>{value}</h3>
      <p className='w-1/2 text-center text-xs'>{title}</p>
    </div>
  );
};

export default Card;
