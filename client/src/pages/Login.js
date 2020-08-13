import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../css/styles';

const Login = () => {
  //COMPONENT LEVEL STATE
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <section>
      <h1 className='text-center text-4xl my-3'>
        <span className='font-bold'>Finance</span>Tracker
      </h1>
      <div className='w-full max-w-xs'>
        <form className={styles.card} onSubmit={handleSubmit}>
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
              onChange={handleInput}
            />
          </div>
          <div className='flex items-center justify-between'>
            <Link to='/register'>
              <button className={styles.buttonLight}>Register</button>
            </Link>
            <button className={styles.buttonPrimary} type='submit'>
              Log In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
