import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import { formatMoney } from 'accounting';
import { connect } from 'react-redux';
import Linegraph from '../components/charts/Linegraph';
import TransactionList from '../components/layout/TransactionList';
import { getTransactions } from '../actions/transaction';
import TransactionInput from '../components/modals/TransactionInput';

const AccountOverview = ({
  loading,
  transactions,
  portfolio,
  getTransactions,
  account,
}) => {
  useEffect(() => {
    getTransactions(account);
  }, [account]);

  const [transactionModal, setTransactionModal] = useState({
    open: false,
    type: null,
    account: null,
  });

  const accountInfo = portfolio.accounts.find(({ _id }) => _id === account);
  return (
    <section className='m-8 flex-1 w-screen'>
      <div className={styles.card.concat('w-full h-full flex flex-col')}>
        {portfolio.loading || loading ? (
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
          <Fragment>
            <div className='flex'>
              <div className='flex-1 text-left'>
                <p className='text-xs text-gray-700 font-bold'>
                  {accountInfo.name.toUpperCase()}
                </p>
                <h1 className='text-5xl font-bold text-gray-900'>
                  {formatMoney(accountInfo.balance)}
                </h1>
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
                  type='button'
                  onClick={(e) =>
                    setTransactionModal({
                      open: true,
                      type: 'deposit',
                      account: account,
                    })
                  }
                >
                  Deposit
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2'
                  type='button'
                  onClick={(e) =>
                    setTransactionModal({
                      open: true,
                      type: 'withdrawal',
                      account: account,
                    })
                  }
                >
                  Withdraw
                </button>
              </div>
            </div>
            <TransactionList transactions={transactions} />
          </Fragment>
        )}
      </div>
      {transactionModal.open ? (
        <TransactionInput
          closeModal={() => setTransactionModal(!transactionModal)}
          type={transactionModal.type}
          account={account}
        />
      ) : null}
    </section>
  );
};

AccountOverview.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  loading: state.transaction.loading,
  transactions: state.transaction.transactions,
});

export default connect(mapStateToProps, { getTransactions })(AccountOverview);
