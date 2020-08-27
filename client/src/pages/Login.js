import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { styles } from '../css/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated, loading, error, user }) => {
  //COMPONENT LEVEL STATE
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
  };

  const testAccount = (e) => {
    setCredentials({ email: 'test@gmail.com', password: 'password' });
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='container w-11/12 mx-auto flex flex-col flex-auto justify-center items-center'>
      <h1 className='text-center text-4xl my-3'>
        <span className='font-bold'>Finance</span>Tracker
      </h1>
      <div className='w-full max-w-xs'>
        <form className={styles.card} onSubmit={(e) => handleSubmit(e)}>
          <div className='flex justify-end'>
            <button
              className={
                'bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-no-wrap items-center'
              }
              type='button'
              onClick={testAccount}
            >
              Test Account
            </button>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className={styles.textInput}
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              value={credentials.email}
              onChange={handleInput}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className={styles.textInput}
              id='password'
              type='password'
              name='password'
              placeholder='******************'
              value={credentials.password}
              onChange={handleInput}
            />
          </div>
          {error ? (
            <div className='w-full text-red-600 text-center mb-3'>
              <p className='text-sm font-semibold'>{error}</p>
            </div>
          ) : null}
          <div className='flex items-center justify-between'>
            <Link to='/register'>
              <button className={styles.buttonLight} type='button'>
                Register
              </button>
            </Link>
            {loading ? (
              <button
                className='bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-no-wrap items-center'
                type='none'
                disabled
              >
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
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
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Loading
              </button>
            ) : (
              <button className={styles.buttonPrimary} type='submit'>
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.auth.error,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login })(Login);
