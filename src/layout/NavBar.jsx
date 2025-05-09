import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white flex items-center justify-between text-2xl shadow-md p-4 sticky top-0 w-full z-10 opacity-90'>
      <h1 className='font-bold text-yellow-400 cursor-pointer' ><a href='/'>TableFix</a></h1>
      <nav>
        <ul className='flex space-x-4 text-lg items-center'>
          <li>
            <a href='/login' className='hover:text-yellow-300'>Login</a>
          </li>
          <li>
            <a href='/signup' className='hover:text-yellow-300'>Signup</a>
          </li>
          <li>
            <a href='/admin' className='hover:text-yellow-300'>Admin</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
