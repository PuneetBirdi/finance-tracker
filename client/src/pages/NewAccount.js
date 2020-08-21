import React, { useState } from 'react';
import { styles } from '../css/styles';

const NewAccount = ({ closeModal }) => {
  const [accountInfo, setAccountInfo] = useState({});

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

  return (
    <section className={styles.card}>
      <h3 className='text-center text-3xl text-gray-700 mb-4 font-bold'>
        New Account
      </h3>
      <fieldset className='flex'>
        <button
          className='bg-transparent hover:bg-purple-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow'
          name='type'
          value='chequing'
          onClick={handleType}
        >
          <h2 className='text-center font-bold text-2xl my-2 pointer-events-none'>
            Chequing
          </h2>
          <div className='p-2 m-2 pointer-events-none'>
            <ul className='list-disc text-left'>
              <li>Unlimited transactions</li>
              <li>Up to $500.00 overdraft</li>
              <li>5% Monthly overdraft fee</li>
            </ul>
          </div>
        </button>
        <button
          className='bg-transparent hover:bg-green-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow'
          name='type'
          value='savings'
          onClick={handleType}
        >
          <h2 className='font-bold text-2xl my-2'>Savings</h2>
          <div className='p-2 m-2'>
            <ul className='list-disc text-left'>
              <li>Minimum balance of $5000.00</li>
              <li>Up to 5 free withdrawals per month</li>
              <li>Earn 1.5% monthly interest.</li>
            </ul>
          </div>
        </button>
        <button
          className='bg-transparent hover:bg-red-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow'
          name='type'
          value='investing'
          onClick={handleType}
        >
          <h2 className='font-bold text-2xl my-2'>Investing</h2>
          <div className='p-2 m-2'>
            <ul className='list-disc text-left'>
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
              placeholder='Starting Balance'
              onChange={handleInfo}
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
        <button
          className={formCheck() ? styles.buttonPrimary : styles.buttonDisabled}
          type='submit'
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default NewAccount;
