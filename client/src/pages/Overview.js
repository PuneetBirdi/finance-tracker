import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import Linegraph from '../components/Linegraph';
import TransactionList from '../components/TransactionList';
import Card from '../components/Card';

const Overview = (props) => {
  return (
    <section className='m-8 flex-1 w-screen'>
      <div className={styles.card.concat('w-full h-full flex flex-col')}>
        <h3 className={styles.H3}>Overview</h3>
        <div class='flex flex-wrap'>
          <div class='w-3/4 h-1/2'>
            <Linegraph />
          </div>
          <div class='w-1/4 flex flex-col justify-center'>
            <Card
              title={'Portfolio Value'}
              color={'blue'}
              value={'$322,435.12'}
            />
            <Card title={'Monthly Change'} color={'red'} value={'-1.2%'} />
            <Card title={'Third Value'} color={'purple'} value={'$123.53'} />
          </div>
          <div class='w-full h-12'>
            <TransactionList />
          </div>
        </div>
      </div>
    </section>
  );
};

Overview.propTypes = {};

export default Overview;
