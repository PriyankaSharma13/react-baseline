import React from "react";
import Navbar from "../../common/navbar/Navbar";
import { Box, Typography } from "@mui/material";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <Navbar />
      <Box className={styles.aboutContainer}>
        <Typography variant="h1">
          About Page
        </Typography>

        <Typography variant="h2" className="text-white">
          Coming Soon....
        </Typography>
      </Box>
    </>
  );
};

export default About;
