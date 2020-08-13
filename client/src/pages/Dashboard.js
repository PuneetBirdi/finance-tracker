import React from 'react';
import PropTypes from 'prop-types';
import Linegraph from '../components/Linegraph';
import TransactionInput from '../components/TransactionInput';
import TransactionList from '../components/TransactionList';

const Dashboard = (props) => {
  return (
    <div className='flex -mx-2 flex-wrap w-full max-h-full mb-6'>
      <div class='w-3/4 p-2'>
        <Linegraph />
      </div>
      <div class='w-1/4 p-2'>
        <TransactionInput />
      </div>
      <div class='w-full p-2'>
        <TransactionList />
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
