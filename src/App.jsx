import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './LandingPage/Landing';
import Contact from './LandingPage/contact';
import About from './LandingPage/About';
import Footer from './layout/Footer';
import Login from './Register/Login';
import SignUp from './Register/SignUp';
import Admin from './Register/Admin';
import RestaurantListPage from '../pages/RestaurantListPage';
import MyReservationsPage from '../pages/MyReservationsPage';
import ReservationFormPage from '../pages/ReservationFormPage';
import ReservationSuccessPage from '../pages/ReservationSuccessPage';


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
            <Route path='/restaurants' element={<RestaurantListPage />} />
            <Route path='/my-reservations' element={<MyReservationsPage />} />
            <Route path='/reserve' element={<ReservationFormPage />} />
            <Route path="/reservation-success" element={<ReservationSuccessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
