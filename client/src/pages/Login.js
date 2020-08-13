import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1 className='text-center text-4xl my-3'>
        <span className='font-bold'>Finance</span>Tracker
      </h1>
      <div className='w-full max-w-xs'>
        <form
          className='bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4'
          onSubmit={handleSubmit}
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              name='password'
              placeholder='******************'
              onChange={handleInput}
            />
          </div>
          <div className='flex items-center justify-between'>
            <Link to='/register'>
              <button className='bg-white hover:bg-gray-200 border text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                Register
              </button>
            </Link>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
