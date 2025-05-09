import React from 'react';
import NavBar from '../layout/navBar';

const Landing = () => {
  return (
    <div>
      <NavBar />
      <div>
        {/* Hero Section */}
        <h1 className='text-4xl font-bold text-center mt-20'>Welcome to TableFix</h1>
        <p className='text-lg text-center mt-4'>Your one-stop solution for restaurant reservations.</p>
        <h2 className='text-xl text-center mt-2 text-gray-400'>
          Book your favorite restaurant table in just a few clicks!
        </h2>
        <div className='flex justify-center mt-10'>
          <a href='/login' className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600'>Get Started</a>
        </div>
        <div className='flex justify-center mt-10'>
          <img
            src='https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
            alt='A beautifully set restaurant table'
            className='rounded-lg shadow-lg'
          />
        </div>

        {/* Features Section */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-center'>Why Choose TableFix?</h2>
          <div className='flex justify-center mt-8 space-x-8'>
            <div className='text-center'>
              <h3 className='text-lg font-semibold'>Easy Reservations</h3>
              <p className='text-sm text-gray-500'>Book tables in seconds.</p>
            </div>
            <div className='text-center'>
              <h3 className='text-lg font-semibold'>Real-Time Availability</h3>
              <p className='text-sm text-gray-500'>See live table availability.</p>
            </div>
            <div className='text-center'>
              <h3 className='text-lg font-semibold'>User-Friendly</h3>
              <p className='text-sm text-gray-500'>Simple and intuitive design.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-center'>What Our Users Say</h2>
          <div className='flex justify-center mt-8 space-x-8'>
            <div className='text-center'>
              <p className='italic'>"TableFix made booking so easy!"</p>
              <p className='text-sm text-gray-500'>- Mason Evans</p>
            </div>
            <div className='text-center'>
              <p className='italic'>"I love the real-time availability feature."</p>
              <p className='text-sm text-gray-500'>- Jane Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

