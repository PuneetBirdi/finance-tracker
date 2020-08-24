import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import Linegraph from '../components/charts/Linegraph';
import TransactionList from '../components/layout/TransactionList';
import Card from '../components/layout/Card';

const Overview = (props) => {
  return (
    <section className='m-8 flex-1 w-screen'>
      <div className={styles.card.concat('w-full h-full flex flex-col')}>
        <div className='w-3/4 text-right mr-4'>
          <p className='text-xs text-gray-700 font-bold'>Portfolio Value</p>
          <h1 className='text-5xl font-bold text-gray-900'>$243,231.00</h1>
        </div>
        <div class='flex flex-wrap'>
          <div class='w-3/4 h-1/2'>
            <Linegraph />
          </div>
          <div class='w-1/4 flex flex-col justify-between'>
            <Card
              title={'Portfolio Value'}
              color={'blue'}
              value={'$322,435.12'}
            />
            <Card title={'Monthly Change'} color={'red'} value={'-1.2%'} />
            <Card title={'Third Value'} color={'teal'} value={'$123.53'} />
          </div>
          <TransactionList />
        </div>
      </div>
    </section>
  );
};

Overview.propTypes = {};

export default Overview;
