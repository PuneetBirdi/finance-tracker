import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../css/styles';

const Register = () => {
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
      const formattedProfile = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        phone: profile.phone,
        dob: Date(profile.dob).toISOString(),
        address: {
          street: profile.street,
          province: profile.province,
          country: profile.country,
          zip: profile.zip,
        },
      };

      console.log(credentials, formattedProfile);
    }
  };
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
                    value={profile.firstName}
                    required
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
                    value={profile.lastName}
                    required
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
                value={profile.phone}
                required
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
                htmlFor='password'
              >
                Password Confirmation
              </label>
              <input
                className={styles.textInput}
                id='password'
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
            <button className={styles.buttonLight}>Back</button>
          </Link>
          <button
            className={
              formCheck() ? styles.buttonPrimary : styles.buttonDisabled
            }
            type='submit'
          >
            Continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
