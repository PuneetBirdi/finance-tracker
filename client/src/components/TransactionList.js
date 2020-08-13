import React from 'react';
import PropTypes from 'prop-types';

const TransactionList = (props) => {
  return (
    <div className='rounded-lg text-gray-600 bg-white shadow-xl px-6 pt-2 pb-6 mb-4 w-full'>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Description</th>
            <th className='px-4 py-2'>Date</th>
            <th className='px-4 py-2'>Type</th>
            <th className='px-4 py-2'>Amount</th>
          </tr>
        </thead>
        <tbody className='overflow-y-scroll'>
          <tr>
            <td className='border px-4 py-2'>Intro to CSS</td>
            <td className='border px-4 py-2'>Intro to CSS</td>
            <td className='border px-4 py-2'>Withdrawal</td>
            <td className='border px-4 py-2'>858</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='border px-4 py-2'>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td className='border px-4 py-2'>Deposit</td>
            <td className='border px-4 py-2'>Deposit</td>
            <td className='border px-4 py-2'>112</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Intro to JavaScript</td>
            <td className='border px-4 py-2'>Intro to JavaScript</td>
            <td className='border px-4 py-2'>Purchase</td>
            <td className='border px-4 py-2'>1,280</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Intro to JavaScript</td>
            <td className='border px-4 py-2'>Intro to JavaScript</td>
            <td className='border px-4 py-2'>Purchase</td>
            <td className='border px-4 py-2'>1,280</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Intro to JavaScript</td>
            <td className='border px-4 py-2'>Intro to JavaScript</td>
            <td className='border px-4 py-2'>Purchase</td>
            <td className='border px-4 py-2'>1,280</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TransactionList.propTypes = {};

export default TransactionList;
