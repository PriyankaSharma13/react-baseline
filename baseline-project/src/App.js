import React, { Suspense, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./accounts/LoginPage/Login";
import Register from "./accounts/RegisterPage/Register";
import Contact from "./pages/contact/Contact";
import HomePage from "./components/banner/Banner";
import About from "./pages/about/About";
import Webdevelopment from "./pages/servicesinformation/webdevelopment/Webdevelopment";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/earth/Earth";
import WebDesigning from './pages/servicesinformation/webdesigning/webdesigning';
import Digitalmarketing from './pages/servicesinformation/digitalMarketing/digitalmarketing';
import SeoPage from './pages/servicesinformation/SEO/seo';
import ClientWork from "./pages/clientWork/client";
import Navbar from "./common/navbar/Navbar";

 export const ThemeContext = createContext(null)
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/client" element={<ClientWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevelopment" element={<Webdevelopment/>} />
        <Route path="/webdesigning" element={<WebDesigning/>} />
        <Route path="/digitalmarketing" element={<Digitalmarketing/>} />
        <Route path="/seo" element={<SeoPage/>} />

      </Routes>
    </Router>
    </ThemeContext.Provider>
  );
};


export default App;
