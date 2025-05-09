import React, { useState } from 'react';
import Navbar from '../layout/navBar';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validate form
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate sign-up process
    setTimeout(() => {
      setSuccess(true);
      alert('Sign-up successful!');
    }, 1500);
  };

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md'>
          <h2 className='text-3xl font-bold text-center'>Create an Account</h2>
          <div className='mt-10 bg-gray-100 p-6 rounded-lg shadow'>
            {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
            {success && <p className='text-green-500 text-center mb-4'>Sign-up successful!</p>}
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-medium'>Name</label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full mt-2 p-2 border rounded'
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-medium'>Email</label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full mt-2 p-2 border rounded'
                  placeholder='Enter your password'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='confirmPassword' className='block text-gray-700 font-medium'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='w-full mt-2 p-2 border rounded'
                  placeholder='Confirm your password'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600'
              >
                Sign Up
              </button>
            </form>
          </div>
          <p className='text-center text-gray-500 mt-4'>
            Already have an account? <a href='/login' className='text-yellow-500 hover:underline'>Login here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

