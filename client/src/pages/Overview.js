import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import { formatMoney } from 'accounting';
import { connect } from 'react-redux';
import Linegraph from '../components/charts/Linegraph';
import AccountList from '../components/layout/AccountList';
import Card from '../components/layout/Card';

const Overview = ({ portfolio, history }) => {
  return (
    <section className='m-8 flex-1 w-screen'>
      <div className={styles.card.concat('w-full h-full flex flex-col')}>
        {portfolio.loading ? (
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='text-gray-800'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        ) : (
          <div className='flex flex-col h-full'>
            <div className='flex-1 w-3/4 text-left mr-4'>
              <p className='text-xs text-gray-700 font-bold'>Portfolio Value</p>
              <h1 className='text-5xl font-bold text-gray-900'>
              {formatMoney(portfolio.details.totalValue)}
              </h1>
            </div>
            <div style={{flex: 3, display:'flex'}}>
              <div class='w-3/4'>
                <Linegraph />
              </div>
              <div class='w-1/4 flex flex-col justify-between'>
                <Card
                  title={'Portfolio Value'}
                  color={'blue'}
                  value={formatMoney(portfolio.details.totalValue)}
                />
                <Card
                  title={'Monthly Change'}
                  color={portfolio.details.monthlyChange > 0 ? 'green' : 'red'}
                  value={portfolio.details.monthlyChange + '%'}
                />
                <Card
                  title={'Transactions'}
                  color={'teal'}
                  value={portfolio.accounts.reduce((prev, curr) => {
                    return prev + curr.snapshots.length;
                  }, 0)}
                />
              </div>
            </div>
            <div style={{flex: 2}}>
              <AccountList accounts={portfolio.accounts} history={history}/>
            </div>
          </div>
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
  loading: state.portfolio.loading,
});

export default connect(mapStateToProps)(Overview);
