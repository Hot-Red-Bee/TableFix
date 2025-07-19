import React, { useState } from 'react';
import Navbar from '../layout/navBar';

const Admin = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md bg-white p-6 rounded-lg shadow'>
          <h2 className='text-2xl font-bold text-center'>
            {isLogin ? 'Admin Login' : 'Admin Sign Up'}
          </h2>
          <form className='mt-6'>
            {!isLogin && (
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-medium'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='w-full mt-2 p-2 border rounded'
                  placeholder='Enter your name'
                  required={!isLogin}
                />
              </div>
            )}
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 font-medium'>Email</label>
              <input
                type='email'
                id='email'
                className='w-full mt-2 p-2 border rounded'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-gray-700 font-medium'>Password</label>
              <input
                type='password'
                id='password'
                className='w-full mt-2 p-2 border rounded'
                placeholder='Enter your password'
                required
              />
            </div>
            {!isLogin && (
              <div className='mb-4'>
                <label htmlFor='confirmPassword' className='block text-gray-700 font-medium focus'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  className='w-full mt-2 p-2 border rounded'
                  placeholder='Confirm your password'
                  required={!isLogin}
                />
              </div>
            )}
            <button
              type='submit'
              className='w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600'
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className='text-center text-gray-500 mt-4'>
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={toggleForm}
                  className='text-yellow-500 hover:underline'
                >
                  Sign up here
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={toggleForm}
                  className='text-yellow-500 hover:underline'
                >
                  Login here
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

