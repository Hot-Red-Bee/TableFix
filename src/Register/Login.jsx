import React, { useState } from 'react';
import Navbar from '../layout/navBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
      } else {
        setError('Invalid email or password.');
      }
    }, 1500);
  };

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md'>
          <h2 className='text-3xl font-bold text-center'>Login to Your Account</h2>
          <div className='mt-10 bg-gray-100 p-6 rounded-lg shadow'>
            {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
            <form onSubmit={handleSubmit}>
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
              <button
                type='submit'
                className={`w-full py-2 rounded text-white ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
                }`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
          <p className='text-center text-gray-500 mt-4'>
            <a href='/forgot-password' className='text-yellow-500 hover:underline'>Forgot your password?</a>
          </p>
          <p className='text-center text-gray-500 mt-4'>
            Don't have an account? <a href='/signup' className='text-yellow-500 hover:underline'>Sign up here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

