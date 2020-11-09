import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AccountCard from './AccountCard';



const AccountList = ({ accounts, history }) => {


  return (
    <div className='text-gray-600 pt-2 pb-2 mb-2 mt-12 w-full flex flex-wrap align-center justify-center'>
          {accounts.map((account, key) => {
            return (
                <AccountCard 
                balance={account.balance}
                type={account.type} 
                snapshots={account.snapshots} 
                name={account.name} 
                id={account._id}
                history={history}/>
            );
          })}

    </div>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.portfolio.accounts,
});

export default connect(mapStateToProps)(AccountList);
