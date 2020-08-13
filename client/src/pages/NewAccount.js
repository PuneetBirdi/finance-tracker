import React, { useState } from 'react';
import { styles } from '../css/styles';

const NewAccount = () => {
  const [accountInfo, setAccountInfo] = useState({});

  const handleType = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };
  return (
    <section className={styles.card}>
      <fieldset className='flex'>
        <button
          className='bg-transparent hover:bg-purple-500 text-gray-700 hover:text-white p-3 ml-3 rounded shadow'
          name='type'
          value='chequing'
          onClick={handleType}
        >
          <h2 className='text-center font-bold text-2xl my-2'>Chequing</h2>
          <div className='p-2 m-2'>
            <ul className='list-disc text-left'>
              <li>Unlimited transactions</li>
              <li>Up to $500.00 overdraft</li>
              <li>No fees!</li>
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
    </section>
  );
};

export default NewAccount;
