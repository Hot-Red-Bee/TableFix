import React, { useEffect ,useState} from 'react';
import Navbar from '../layout/navBar';

const Contact = () => {
  const [email, setEmail] = useState('');
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='mt-16 px-4 scroll-smooth'>
        {/* Page Title */}
        <h2 className='text-3xl font-bold text-center'>Get in Touch</h2>
        <p className='text-center text-gray-500 mt-4'>
          We'd love to hear from you! Fill out the form below or reach out to us directly.
        </p>

        {/* Contact Form */}
        <div className='mt-10 max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow'>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700 font-medium'>Name</label>
              <input
                type='text'
                id='name'
                className='w-full mt-2 p-2 border rounded'
                placeholder='Your Name'
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
                placeholder='Your Email'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-gray-700 font-medium'>Message</label>
              <textarea
                id='message'
                className='w-full mt-2 p-2 border rounded'
                rows='4'
                placeholder='Your Message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600'
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Contact Information */}
        <div className='mt-10 text-center'>
          <h3 className='text-xl font-semibold'>Other Ways to Reach Us</h3>
          <p className='text-gray-500 mt-4'>
            Email: <a href='mailto:support@tablefix.com' className='text-yellow-500'>support@tablefix.com</a>
          </p>
          <p className='text-gray-500'>
            Phone: <a href='tel:+1234567890' className='text-yellow-500'>+1 234 567 890</a>
          </p>
          <p className='text-gray-500'>
            Address: 123 TableFix Lane, Food City, FC 12345
          </p>
        </div>

        {/* Social Media Links */}
        <div className='mt-10 text-center'>
          <h3 className='text-xl font-semibold'>Follow Us</h3>
          <div className='flex justify-center space-x-4 mt-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Facebook</a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>Twitter</a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-pink-500 hover:underline'>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
