import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Router, Link, Redirect } from 'react-router-dom';
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
import { FaHome, FaPiggyBank, FaRegMoneyBillAlt, FaPlus } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';

const Sidebar = (props) => {
  return (
    <aside className='bg-gray-700 h-screen absolute top-0 left-0 shadow-xl font-semibold'>
      <ul className='my-16 w-full'>
        <Link>
          <li className='pl-4 pr-4 py-2 hover:bg-blue-600 flex items-center'>
            <FaHome style={{ marginRight: 8 }} />
            Home
          </li>
        </Link>
        <Link>
          <li className='pl-4  py-2 hover:bg-red-600 flex items-center'>
            <GiTakeMyMoney style={{ marginRight: 8 }} />
            Withdraw
          </li>
        </Link>
        <Link>
          <li className='pl-4  py-2 hover:bg-green-600 flex items-center'>
            <GiPayMoney style={{ marginRight: 8 }} /> Deposit
          </li>
        </Link>
        <li className='pl-4 py-2 mt-4'>
          Accounts
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
              <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800 font-light'>
                <FaPlus style={{ marginRight: 8 }} />
                New Account
              </li>
            </Link>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
