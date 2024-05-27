import React, { useState } from 'react';

import Banner from '../../components/banner/Banner';
import OurServices from '../../contents/ourservices/OurServices';
import Footer from '../../components/footer/footer';

const HomePage = () => {

  return (
    <>
      <Banner />
      <OurServices />
      <Footer />
    </>
  );
};

export default HomePage;
