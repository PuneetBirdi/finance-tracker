import React from 'react';
import PropTypes from 'prop-types';

const TransactionInput = (props) => {
  return (
    <form className='bg-white shadow-xl rounded px-8 pt-6 pb-8 flex flex-col h-full'>
      <div className='self-start w-full mb-12'>
        <h3 className='text-gray-700 text-center font-bold'>New Transaction</h3>
      </div>
      <div className='mx-2'>
        <div className='mb-4'>
          <label
            className='block text-gray-600 text-sm font-bold mb-2'
            for='name'
          >
            Description
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='transactionName'
            type='text'
            placeholder='New Laptop'
          />
        </div>
        <div className='mb-2'>
          <label
            className='block text-gray-600 text-sm font-bold mb-2'
            for='amount'
          >
            Amount
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='amount'
            type='number'
            placeholder='00.00'
          />
        </div>
      </div>
      <div className='mx-2'>
        <div className='w-full mb-6'>
          <label
            className='block text-gray-600 text-sm font-bold mb-2'
            for='amount'
          >
            Type
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='account'
            >
              <option>Deposit</option>
              <option>Withdrawal</option>
              <option>Purchase</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

TransactionInput.propTypes = {};

export default TransactionInput;
