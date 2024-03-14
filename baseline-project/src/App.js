import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Contact from './pages/contact/Contact'; 
import HomePage from './components/banner/Banner';
import About from './pages/about/About';
import Webdevelopment from './components/servicesinformation/webdevelopment/Webdevelopment'
import {Particle} from './components/particle/Particle';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevelopment" element={<Webdevelopment/>} />
      </Routes>


    </Router>
  );
};

export default App;
