import React from 'react';
import PropTypes from 'prop-types';
import SmallChart from '../charts/SmallChart';

const TransactionList = (props) => {
  return (
    <div className='text-gray-600 bg-white pt-2 pb-4 mb-4 mt-6 w-full'>
      <table className='table-auto w-full text-xl'>
        <thead className='bg-gray-300'>
          <tr>
            <th className='px-4 py-2 w-3/6'>Account</th>
            <th className='px-4 py-2 w-1/6'>Trend</th>
            <th className='px-4 py-2 w-1/6'>Type</th>
            <th className='px-4 py-2 w-1/6'>Balance</th>
          </tr>
        </thead>
        <tbody className='overflow-y-scroll'>
          <tr>
            <td className='border px-4 py-2'>Account Name</td>
            <td className='border px-4 py-2 flex justify-center'>
              <SmallChart color={'#B794F4'} />
            </td>
            <td className='border px-4 py-2 text-center'>Chequing</td>
            <td className='border px-4 py-2 text-right font-semibold'>
              $42,355.32
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Account Name</td>
            <td className='border px-4 py-2 flex justify-center'>
              <SmallChart color={'#F6E05E'} />
            </td>
            <td className='border px-4 py-2 text-center'>Chequing</td>
            <td className='border px-4 py-2 text-right font-semibold'>
              $42,355.32
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Account Name</td>
            <td className='border px-4 py-2 flex justify-center'>
              <SmallChart color={'#4FD1C5'} />
            </td>
            <td className='border px-4 py-2 text-center'>Chequing</td>
            <td className='border px-4 py-2 text-right font-semibold'>
              $42,355.32
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TransactionList.propTypes = {};

export default TransactionList;
