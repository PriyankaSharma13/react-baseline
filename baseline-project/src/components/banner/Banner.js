import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../common/navbar/Navbar";
import OurServices from "../../pages/home/contents/ourservices/OurServices"
import { Particle } from "../particle/Particle";

function Banner() {
  
  return (
    <>
      {/* ----------------------- */}
      <Navbar />

      {/* ----------------Banner Section------------------ */}
      <Particle />
      <Box>
        <OurServices />
      </Box>
    </>
  );
}

export default Banner;
