import React, { Fragment } from 'react';
import NewAccount from '../pages/NewAccount';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
//SUBPAGES============
import AccountOverview from './AccountOverview';
import Sidebar from '../components/layout/Sidebar';

const AccountSummary = ({ portfolio, loading }) => {
  const { accountID } = useParams();
  return (
    <section className='container static flex-1 h-full max-h-full min-w-full flex'>
      {loading ? (
        <p>loading</p>
      ) : (
        <Fragment>
          {portfolio.accounts.length < 1 ? (
            <NewAccount />
          ) : (
            <Fragment>
              <Sidebar />
              <AccountOverview portfolio={portfolio} account={accountID} />
            </Fragment>
          )}
        </Fragment>
      )}
    </section>
  );
};

AccountSummary.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  loading: state.portfolio.loading,
});

export default connect(mapStateToProps)(AccountSummary);
