import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10 mt-16'>
      <div className='text-center'>
        <p>&copy; 2025 TableFix. All rights reserved.</p>
        <div className='flex justify-center space-x-4 mt-2'>
          <Link to='/about' className='hover:underline'>About Us</Link>
          <Link to='/contact' className='hover:underline'>Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
