import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newTransaction } from '../../actions/transaction';
const TransactionInput = ({
  closeModal,
  accounts,
  type,
  error,
  newTransaction,
  loading,
  account,
}) => {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: '',
    type: type,
    account: account || '',
  });

  const handleInput = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleType = (amount) => {
    if (transaction.type === 'withdrawal' || transaction.type === 'purchase') {
      return amount * -1;
    } else {
      return amount;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //build transaction object
    const fullTransaction = {
      description: transaction.description,
      amount: handleType(transaction.amount),
      type: transaction.type,
      account: transaction.account,
    };
    const response = await newTransaction(fullTransaction);
    if (response) {
      setTimeout(() => {
        closeModal();
      }, 750);
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className='fixed top-0 bg-gray-800 bg-opacity-75 h-screen w-screen z-10 flex justify-center items-center'>
      <form
        className={`bg-white shadow-xl rounded px-8 pt-6 pb-6 flex flex-col`}
        onSubmit={handleSubmit}
      >
        <div className='self-start w-full mb-6'>
          <h3 className='text-gray-700 text-center font-bold'>
            New Transaction
          </h3>
        </div>
        <div className='mx-2'>
          <div className='mb-4'>
            <label
              className='block text-gray-600 text-sm font-bold mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='description'
              name='description'
              type='text'
              placeholder='New Laptop'
              onChange={handleInput}
            />
          </div>
          <div className='mb-2'>
            <label
              className='block text-gray-600 text-sm font-bold mb-2'
              htmlFor='amount'
            >
              Amount
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='amount'
              name='amount'
              type='number'
              step='.01'
              placeholder='00.00'
              max={100000}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className='mx-2'>
          <div className='w-full mb-6'>
            <label
              className='block text-gray-600 text-sm font-bold mb-2'
              htmlFor='type'
            >
              Type
            </label>
            <div className='relative'>
              <select
                className='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='type'
                name='type'
                onChange={handleInput}
                value={transaction.type}
              >
                <option value={null} disabled defaultValue>
                  Select Type
                </option>
                <option value='deposit'>Deposit</option>
                <option value='withdrawal'>Withdrawal</option>
                <option value='purchase'>Purchase</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='w-full mb-6'>
            <label
              className='block text-gray-600 text-sm font-bold mb-2'
              htmlFor='account'
            >
              Account
            </label>
            <div className='relative'>
              <select
                className='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='account'
                name='account'
                onChange={handleInput}
                value={transaction.account}
                required
              >
                <option value='' disabled defaultValue>
                  Select Account
                </option>
                {accounts.map((account) => {
                  return (
                    <option value={account._id} key={account._id}>
                      {account.name.toUpperCase() +
                        ' ---- ' +
                        account.type.toUpperCase()}
                    </option>
                  );
                })}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-white hover:bg-red-300 border text-red-500 font-semibold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={closeModal}
            >
              Cancel
            </button>
            {loading ? (
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
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Submit
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
        </div>
      </form>
    </div>
  );
};

TransactionInput.propTypes = {
  accounts: PropTypes.array.isRequired,
  newTransaction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.portfolio.accounts,
  loading: state.transaction.loading,
  error: state.transaction.error,
});

export default connect(mapStateToProps, { newTransaction })(TransactionInput);
