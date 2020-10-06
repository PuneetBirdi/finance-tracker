import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const Sidebar = ({ accounts, loading, url }) => {
  const [transactionModal, setTransactionModal] = useState({
    open: false,
    type: null,
  });
  const [accountModal, setAccountModal] = useState(false);

  const returnIcon = (type) => {
    if (type === 'investing') {
      return <BsGraphUp style={{ marginRight: 8 }} />;
    } else if (type === 'savings') {
      return <FaPiggyBank style={{ marginRight: 8 }} />;
    } else if (type === 'chequing') {
      return <FaRegMoneyBillAlt style={{ marginRight: 8 }} />;
    } else {
      console.log(type);
    }
  };

  return (
    <aside className='bg-gray-700 shadow-xl font-normal'>
      <ul className=' mt-4 w-full'>
        <Link to={`/dashboard`}>
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
            {loading ? (
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
              accounts.map((account) => {
                return (
                  <Link to={`/accounts/${account._id}`}>
                    <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800'>
                      {returnIcon(account.type)}
                      {account.name.toUpperCase()}
                    </li>
                  </Link>
                );
              })
            )}
            <Link>
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
        {/* <li className='pl-4 py-2 mt-4'>
          <p className='font-semibold'>Information</p>
          <ul className='pr-4'>
            <Link to='/news'>
              <li className='px-4 py-2 my-2 rounded-full flex items-center align-center hover:bg-gray-800'>
                <FaNewspaper style={{ marginRight: 8 }} />
                News
              </li>
            </Link>
          </ul>
        </li> */}
      </ul>
      {transactionModal.open ? (
        <TransactionInput
          closeModal={() => setTransactionModal(!transactionModal)}
          type={transactionModal.type}
        />
      ) : null}
      {accountModal ? (
        <NewAccountModal
          closeModal={() => setAccountModal(!accountModal)}
          modalStatus={accountModal}
        />
      ) : null}
    </aside>
  );
};

Sidebar.propTypes = {
  accounts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.portfolio.accounts,
  loading: state.portfolio.loading,
});
export default connect(mapStateToProps)(Sidebar);
