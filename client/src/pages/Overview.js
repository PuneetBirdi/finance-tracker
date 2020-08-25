import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import { connect } from 'react-redux';
import { formatMoney } from 'accounting';
import Linegraph from '../components/charts/Linegraph';
import TransactionList from '../components/layout/TransactionList';
import Card from '../components/layout/Card';

const Overview = ({ portfolio }) => {
  return (
    <section className='m-8 flex-1 w-screen'>
      <div className={styles.card.concat('w-full h-full flex flex-col')}>
        {portfolio.loading ? (
          <svg
            class='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              class='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              stroke-width='4'
            ></circle>
            <path
              class='opacity-75'
              fill='text-gray-800'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        ) : (
          <Fragment>
            <div className='w-3/4 text-left mr-4'>
              <p className='text-xs text-gray-700 font-bold'>Portfolio Value</p>
              <h1 className='text-5xl font-bold text-gray-900'>
                {formatMoney(portfolio.totalValue)}
              </h1>
            </div>
            <div class='flex flex-wrap'>
              <div class='w-3/4 h-1/2'>
                <Linegraph />
              </div>
              <div class='w-1/4 flex flex-col justify-between'>
                <Card
                  title={'Portfolio Value'}
                  color={'blue'}
                  value={formatMoney(portfolio.totalValue)}
                />
                <Card title={'Monthly Change'} color={'red'} value={'-1.2%'} />
                <Card
                  title={'Transactions'}
                  color={'teal'}
                  value={portfolio.accounts.reduce((prev, curr) => {
                    return prev + curr.snapshots.length;
                  }, 0)}
                />
              </div>
              <TransactionList accounts={portfolio.accounts} />
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

Overview.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
});

export default connect(mapStateToProps)(Overview);
