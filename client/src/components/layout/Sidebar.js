import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
import {
  FaNewspaper,
  FaHome,
  FaPiggyBank,
  FaRegMoneyBillAlt,
  FaPlus,
} from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import TransactionInput from '../modals/TransactionInput';
import NewAccountModal from '../modals/NewAccountModal';

const Sidebar = (props) => {
  const [transactionModal, setTransactionModal] = useState({
    open: false,
    type: null,
  });
  const [accountModal, setAccountModal] = useState(false);

  return (
    <aside className='bg-gray-700 shadow-xl font-normal'>
      <ul className=' mt-4 w-full'>
        <Link to='/'>
          <li className='pl-4 pr-4 py-2 hover:bg-blue-600 flex items-center'>
            <FaHome style={{ marginRight: 8 }} />
            Overview
          </li>
        </Link>
        <Link>
          <li
            className='pl-4  py-2 hover:bg-red-600 flex items-center'
            onClick={(e) =>
              setTransactionModal({
                open: true,
                type: 'withdrawal',
              })
            }
          >
            <GiTakeMyMoney style={{ marginRight: 8 }} />
            Withdraw
          </li>
        </Link>
        <Link>
          <li
            className='pl-4  py-2 hover:bg-green-600 flex items-center'
            onClick={(e) =>
              setTransactionModal({
                open: true,
                type: 'deposit',
              })
            }
          >
            <GiPayMoney style={{ marginRight: 8 }} /> Deposit
          </li>
        </Link>
        <li className='pl-4 py-2 mt-4'>
          <p className='font-semibold'>Accounts</p>
          <ul className='pr-4'>
            <Link>
              <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800'>
                <BsGraphUp style={{ marginRight: 8 }} />
                Investing
              </li>
              <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800'>
                <FaPiggyBank style={{ marginRight: 8 }} />
                Savings
              </li>
              <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800'>
                <FaRegMoneyBillAlt style={{ marginRight: 8 }} />
                Chequing
              </li>
              <button
                className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800 font-thin'
                onClick={(e) => setAccountModal(!accountModal)}
              >
                <FaPlus style={{ marginRight: 8 }} />
                New Account
              </button>
            </Link>
          </ul>
        </li>
        <li className='pl-4 py-2 mt-4'>
          <p className='font-semibold'>Information</p>
          <ul className='pr-4'>
            <Link>
              <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800'>
                <FaNewspaper style={{ marginRight: 8 }} />
                News
              </li>
            </Link>
          </ul>
        </li>
      </ul>
      {transactionModal.open ? (
        <TransactionInput
          closeModal={() => setTransactionModal(!transactionModal)}
          type={transactionModal.type}
        />
      ) : null}
      {accountModal ? (
        <NewAccountModal closeModal={() => setAccountModal(!accountModal)} />
      ) : null}
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
