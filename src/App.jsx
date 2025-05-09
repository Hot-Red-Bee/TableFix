import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './LandingPage/Landing';
import Contact from './LandingPage/contact';
import About from './LandingPage/About';
import Footer from './layout/Footer';
import Login from './Register/Login';
import SignUp from './Register/SignUp';
import Admin from './Register/Admin';

const App = () => {
  return (
    <Router>
      <div id="app">
        <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
