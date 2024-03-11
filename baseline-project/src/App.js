import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './common/navbar/Navbar';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Contact from './components/Contact'; 
import HomePage from './components/banner/Banner';
import About from './components/About';

const App = () => {
  return (
    <Router>

      <Routes>
 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </Router>
  );
};

export default App;
