import React, { Fragment, useEffect } from 'react';
import NewAccount from '../pages/NewAccount';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//SUBPAGES============
import Overview from './Overview';
import Sidebar from '../components/layout/Sidebar';

const Dashboard = ({ portfolio, loading, history }) => {
  return (
    <section className='container static flex-1 min-w-full flex'>
      {loading ? (
        <p>loading</p>
      ) : (
        <Fragment>
          {portfolio.accounts.length < 1 || portfolio.accounts === 'undefined' ? (
            <NewAccount />
          ) : (
            <Fragment>
              <Sidebar />
              <Overview portfolio={portfolio} history={history} />
            </Fragment>
          )}
        </Fragment>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  loading: state.portfolio.loading,
});

export default connect(mapStateToProps)(Dashboard);
