// In HomePage.js
import React from 'react';
import Navbar from '../../common/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import OurServices from '../../contents/OurServices';
import Footer from '../../components/footer/footer';

const HomePage = () => (
  <>
    <Navbar />
    <Banner />
    <OurServices />
    <Footer />
  </>
);

export default HomePage;