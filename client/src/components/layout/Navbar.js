import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
      <div className='text-sm lg:flex-grow'></div>
      <div>
        <a
          href='#!'
          className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          onClick={logout}
        >
          Logout
        </a>
      </div>
    </div>
  );

  const guestLinks = (
    <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
      <div className='text-sm lg:flex-grow'></div>
      <div>
        <a
          href='#!'
          className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          onClick={logout}
        >
          More Info
        </a>
      </div>
    </div>
  );
  return (
    <nav className='w-full flex items-center justify-between flex-wrap bg-gray-800 p-3 shadow-xl z-50'>
      <div className='flex flex-1 items-center flex-shrink-0 text-white mr-6'>
        <span className='text-2xl tracking-tight z-20 bg-transparent'>
          <span className='font-bold'>Finance</span>Tracker
        </span>
      </div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
