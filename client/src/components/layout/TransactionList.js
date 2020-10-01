import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { formatMoney } from 'accounting';

const TransactionList = ({ transactions }) => {
  return (
    <div className='text-gray-600 bg-white pt-2 pb-2 mb-2 mt-6 w-full'>
      <table className='table-auto w-full text-lg'>
        <thead className='bg-gray-300'>
          <tr>
            <th className='px-4 py-1 w-2/4'>Description</th>
            <th className='px-4 py-1 w-1/4'>Date</th>
            <th className='px-4 py-1 w-1/4'>Amount</th>
          </tr>
        </thead>
        <tbody className='overflow-y-scroll'>
          {transactions.map((transaction, key) => {
            return (
              <tr key={key}>
                <td className='border px-4 text-base'>
                  {transaction.description.toUpperCase()}
                </td>
                <td className='border px-4 text-base'>
                  {moment(transaction.time).format('MMM Do YYYY')}
                </td>
                <td className='border px-4 text-base text-right font-semibold'>
                  {formatMoney(transaction.amount)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionList.propTypes = {
  accounts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.portfolio.accounts,
});

export default connect(mapStateToProps)(TransactionList);
