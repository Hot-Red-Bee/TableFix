import React, { useEffect } from 'react';
import Navbar from '../layout/navBar';

const About = () => {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='mt-16 px-4'>
        {/* Hero Section */}
        <div className='bg-yellow-500 text-white py-10 rounded-lg shadow-lg'>
          <h1 className='text-3xl font-bold text-center'>Welcome to TableFix</h1>
          <p className='text-center text-lg mt-4'>
            Revolutionizing the way you dine by connecting you with your favorite restaurants effortlessly.
          </p>
        </div>

        {/* Mission Section */}
        <div className='mt-10'>
          <h3 className='text-2xl font-semibold text-center'>Our Mission</h3>
          <p className='text-center text-gray-500 mt-4'>
            At TableFix, our mission is to simplify dining experiences by providing a seamless platform for diners and restaurants alike.
          </p>
        </div>

        {/* Features Section */}
        <div className='mt-10'>
          <h3 className='text-2xl font-semibold text-center'>Why Choose TableFix?</h3>
          <ul className='mt-6 space-y-4'>
            <li className='flex items-start'>
              <span className='text-yellow-500 mr-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </span>
              <p className='text-gray-500'>Easy-to-use platform for booking tables.</p>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-500 mr-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </span>
              <p className='text-gray-500'>Real-time availability updates for restaurants.</p>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-500 mr-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </span>
              <p className='text-gray-500'>Personalized recommendations based on your preferences.</p>
            </li>
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div className='mt-10 text-center'>
          <h3 className='text-2xl font-semibold'>Join Us Today!</h3>
          <p className='text-gray-500 mt-4'>
            Whether you're a diner or a restaurant owner, TableFix is here to make your life easier. Sign up now and experience the difference!
          </p>
          <a
            href='/signup'
            className='inline-block mt-6 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 shadow-lg'
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
