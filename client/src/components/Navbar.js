import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className='w-full flex items-center justify-between flex-wrap bg-blue-500 p-4'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='text-3xl tracking-tight'>
          <span className='font-bold'>Finance</span>Tracker
        </span>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto text-gray-600'>
        <div className='text-sm lg:flex-grow'></div>
        <div>
          <a
            href='!#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
