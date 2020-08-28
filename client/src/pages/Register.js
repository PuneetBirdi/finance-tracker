import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { styles } from '../css/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';

const Register = ({ loading, error, user, register, isAuthenticated }) => {
  //COMPONENT LEVEL STATE
  const [credentials, setCredentials] = useState({});
  const [profile, setProfile] = useState({});

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleProfile = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const formCheck = () => {
    if (
      profile.firstName &&
      profile.lastName &&
      profile.phone &&
      profile.dob &&
      profile.street &&
      profile.city &&
      profile.province &&
      profile.country &&
      profile.zip &&
      credentials.email &&
      credentials.password &&
      credentials.password2
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.password2 !== credentials.password) {
      console.log('ERROR: Passwords do not match.');
    } else {
      const registration = {
        email: credentials.email,
        password: credentials.password,
        firstName: profile.firstName,
        lastName: profile.lastName,
        phone: profile.phone,
        dob: new Date(profile.dob).toISOString(),
        address: {
          street: profile.street,
          city: profile.city,
          province: profile.province,
          country: profile.country,
          zip: profile.zip,
        },
      };

      register(registration);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/newaccount' />;
  }
  return (
    <section className='container w-11/12 mx-auto flex flex-col flex-auto justify-center items-center'>
      <h1 className='text-left text-3xl my-3'>
        <span className='font-semibold'>Lets Get Started</span>
      </h1>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className='flex'>
          <div className='w-1/2 mx-6'>
            <h3 className='text-left text-gray-700 font-bold text-xl my-2'>
              About You
            </h3>
            <fieldset className='mb-3'>
              <legend className='block text-gray-700 text-sm font-bold mb-2'>
                Name
              </legend>
              <div className='flex'>
                <div className='mr-2'>
                  <input
                    className={styles.textInput}
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder='First'
                    required
                    value={profile.firstName}
                    onChange={handleProfile}
                  />
                </div>
                <div className='ml-2'>
                  <input
                    className={styles.textInput}
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder='Last'
                    required
                    value={profile.lastName}
                    onChange={handleProfile}
                  />
                </div>
              </div>
            </fieldset>
            <div className='mb-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Phone
              </label>
              <input
                className={styles.textInput}
                id='phone'
                type='text'
                name='phone'
                placeholder='123-456-7890'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                required
                value={profile.phone}
                onChange={handleProfile}
              />
            </div>
            <div className='mb-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='dob'
              >
                Date of Birth
              </label>
              <input
                className={styles.textInput}
                id='dob'
                type='date'
                name='dob'
                required
                onChange={handleProfile}
              />
            </div>
            <fieldset className='mb-3'>
              <legend className='block text-gray-700 text-sm font-bold mb-2'>
                Address
              </legend>
              <div className='flex'>
                <div className='mr-2'>
                  <input
                    className={styles.textInput}
                    id='street'
                    type='text'
                    name='street'
                    placeholder='Street address'
                    required
                    onChange={handleProfile}
                  />
                </div>
                <div className='ml-2'>
                  <input
                    className={styles.textInput}
                    id='city'
                    type='text'
                    name='city'
                    placeholder='City'
                    required
                    onChange={handleProfile}
                  />
                </div>
              </div>
              <input
                className={styles.textInput}
                id='province'
                type='text'
                name='province'
                placeholder='State/Province'
                required
                onChange={handleProfile}
              />
              <input
                className={styles.textInput}
                id='country'
                type='text'
                name='country'
                placeholder='Country'
                required
                onChange={handleProfile}
              />
              <input
                className={styles.textInput}
                id='zip'
                type='text'
                name='zip'
                placeholder='ZIP Code'
                pattern='^([ABCEGHJKLMNPRSTVXY][0-9][A-Z][ ]*[0-9][A-Z][0-9])$'
                required
                onChange={handleProfile}
              />
            </fieldset>
          </div>
          <div className='w-1/2 mx-6'>
            <h3 className='text-left text-gray-700  font-bold text-xl my-2'>
              Credentials
            </h3>
            <div className='mb-3'>
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
                placeholder='mickey@disney.com'
                required
                onChange={handleCredentials}
              />
            </div>
            <div className='mb-1'>
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
                required
                onChange={handleCredentials}
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password2'
              >
                Password Confirmation
              </label>
              <input
                className={styles.textInput}
                id='password2'
                type='password'
                name='password2'
                placeholder='******************'
                required
                onChange={handleCredentials}
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Link to='/login'>
            <button className={styles.buttonLight} type='button'>
              Back
            </button>
          </Link>
          {error ? (
            <div className='w-full text-red-600 text-center mb-3'>
              <p className='text-sm font-semibold'>{error}</p>
            </div>
          ) : null}
          {loading ? (
            <button
              className='bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-no-wrap items-center'
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
              Setting Up
            </button>
          ) : (
            <button
              className={
                formCheck() ? styles.buttonPrimary : styles.buttonDisabled
              }
              type='submit'
            >
              Continue
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.user,
  error: state.auth.error,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
