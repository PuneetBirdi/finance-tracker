import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SmallChart from '../charts/SmallChart';
import { formatMoney } from 'accounting';

const TransactionList = ({ accounts }) => {
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
          {accounts.map((account, key) => {
            return (
              <tr key={key}>
                <td className='border px-4 py-2'>
                  {account.name.toUpperCase()}
                </td>
                <td className='border px-4 py-2 flex justify-center'>
                  <SmallChart color={'#B794F4'} snapshots={account.snapshots} />
                </td>
                <td className='border px-4 py-2 text-center'>
                  {account.type.toUpperCase()}
                </td>
                <td className='border px-4 py-2 text-right font-semibold'>
                  {formatMoney(account.balance)}
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
