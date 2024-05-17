import React, { Suspense } from "react";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevelopment" element={<Webdevelopment/>} />
        <Route path="/webdesigning" element={<WebDesigning/>} />
        <Route path="/digitalmarketing" element={<Digitalmarketing/>} />
        <Route path="/seo" element={<SeoPage/>} />

      </Routes>
    </Router>
  );
};

        // <Canvas style={{width:'100vw', height: '100vh', background:'black'}}>
            //   <Suspense fallback={null}>
            //     <Earth />
            //   </Suspense>
            // </Canvas>

export default App;
