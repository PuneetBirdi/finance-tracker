import React, { useState } from 'react';
import { styles } from '../css/styles';
import { connect } from 'react-redux';
import { createAccount } from '../actions/portfolio';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewAccount = ({
  modalStatus,
  closeModal,
  createAccount,
  portfolioLoading,
  error,
  history,
}) => {
  const [accountInfo, setAccountInfo] = useState({});
  const [modal, setModal] = useState(modalStatus || false);

  const handleType = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };

  const handleInfo = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };

  const formCheck = () => {
    if (accountInfo.type && accountInfo.name && accountInfo.balance) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createAccount(accountInfo);
    if (response && !modal) {
      history.push('/dashboard');
    } else if (response && modal) {
      closeModal();
    }
  };

  return (
    <section className='container w-11/12 mx-auto flex flex-col flex-auto justify-center items-center'>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h3 className='text-center text-3xl text-gray-700 mb-4 font-bold'>
          Set Up a New Account
        </h3>
        <fieldset className='flex flex-no-wrap justify-between'>
          <button
            className={
              accountInfo.type === 'chequing'
                ? `bg-purple-500 text-white p-3 ml-3 rounded shadow`
                : `bg-transparent hover:bg-purple-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow`
            }
            name='type'
            value='chequing'
            type='button'
            onClick={handleType}
          >
            <h2 className='text-center font-bold text-2xl my-2 pointer-events-none'>
              Chequing
            </h2>
            <div className='p-2 m-2 pointer-events-none'>
              <ul className='list-disc text-left pointer-events-none'>
                <li>Unlimited transactions</li>
                <li>Up to $500.00 overdraft</li>
                <li>5% Monthly overdraft fee</li>
              </ul>
            </div>
          </button>
          <button
            className={
              accountInfo.type === 'savings'
                ? `bg-green-500 text-white p-3 ml-3 rounded shadow`
                : `bg-transparent hover:bg-green-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow`
            }
            name='type'
            value='savings'
            type='button'
            onClick={handleType}
          >
            <h2 className='font-bold text-2xl my-2 pointer-events-none'>
              Savings
            </h2>
            <div className='p-2 m-2 pointer-events-none'>
              <ul className='list-disc text-left pointer-events-none'>
                <li>Minimum balance of $5000.00</li>
                <li>Up to 5 free withdrawals per month</li>
                <li>Earn 1.5% monthly interest.</li>
              </ul>
            </div>
          </button>
          <button
            className={
              accountInfo.type === 'investing'
                ? `bg-red-500 text-white p-3 ml-3 rounded shadow`
                : `bg-transparent hover:bg-red-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow`
            }
            name='type'
            value='investing'
            type='button'
            onClick={handleType}
          >
            <h2 className='font-bold text-2xl my-2 pointer-events-none'>
              Investing
            </h2>
            <div className='p-2 m-2 pointer-events-none'>
              <ul className='list-disc text-left pointer-events-none'>
                <li>Minimum balance of $10,000.00</li>
                <li>$10.00 monthly fee</li>
                <li>1.0% fee for each trade</li>
                <li>Unlimited trades</li>
              </ul>
            </div>
          </button>
        </fieldset>
        <fieldset className='flex-col justify-center p-3 mt-4'>
          <h3 className='text-center block text-gray-700 text-xl font-bold mb-2'>
            Account Info
          </h3>
          <div className='flex justify-center'>
            <div className='mr-2'>
              <input
                className={styles.textInput}
                id='name'
                type='text'
                name='name'
                placeholder='Account Name'
                onChange={handleInfo}
                required
              />
            </div>
            <div className='ml-2'>
              <input
                className={styles.textInput}
                id='balance'
                type='number'
                name='balance'
                step='.01'
                placeholder='Starting Balance'
                onChange={handleInfo}
                max={100000}
                min={0}
                required
              />
            </div>
          </div>
        </fieldset>
        <div className='flex items-center justify-between'>
          <button
            className='bg-white hover:bg-red-300 border text-red-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='none'
            onClick={closeModal}
          >
            Cancel
          </button>
          {portfolioLoading ? (
            <button
              className='bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-no-wrap items-center ml-3'
              type='none'
              disabled
            >
              <svg
                class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
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
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              Processing
            </button>
          ) : (
            <button
              className={
                formCheck() ? styles.buttonPrimary : styles.buttonDisabled
              }
              type='submit'
            >
              Continue
            </button>
          )}
        </div>
        {error ? (
          <div className='w-full text-red-600 text-center mt-3'>
            <p className='text-sm font-semibold'>{error}</p>
          </div>
        ) : (
          <div className='w-full text-white text-center mt-3'>
            <span>.</span>
          </div>
        )}
      </form>
    </section>
  );
};

NewAccount.propTypes = {
  accounts: PropTypes.array.isRequired,
  createAccount: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  portfolioLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.portfolio.accounts,
  authLoading: state.auth.loading,
  portfolioLoading: state.portfolio.loading,
  error: state.portfolio.error,
});

export default connect(mapStateToProps, { createAccount })(NewAccount);
