import React from "react";
import Navbar from "../../../common/navbar/Navbar";
import { Box, Grid, Typography, Link } from "@mui/material";
import img from "../../../assets/images.jpg";
import Footer from "../../../components/footer/footer";
import styles from "./styles.module.css";
import Frontend from "./frontendinfo/Frontend";
import Backend from "./backendinfo/Backend";

const WebDevelopment = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ backgroundColor: "black" }}>
        <Box maxWidth="xl" className={styles.container}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className={styles.heading}>
                <span className={styles.whiteText}>Best Web</span> Development Company In Mohali
              </Typography>
              <Typography variant="body1" className={styles.text}>
                Web development services help create all types of web-based software and ensure a great experience for web users.
              </Typography>
              <Typography variant="body1" className={styles.text}>
                Developing a website for your business is the first step in climbing the digital marketing ladder, and we are experts at giving your first step the recognition it deserves. As the best web development company in Mohali, we know what it takes to develop a creative, engaging, and user-friendly website. Founded in Mohali in 2012, we have a team of the best website developers in India who always go above and beyond to provide you with a future-proof website. Baseline IT Development has been rated as one of the best web development companies in India by various reputed online sources and review sites. We have a large pool of talented, experienced web developers who provide clients with nothing less than an award-winning website.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={img} alt="images" className={styles.image} />
            </Grid>
          </Grid>
        </Box>

        <Box maxWidth="xl" className={styles.container}>
          <Typography variant="h4" className={styles.heading}>
            Web Development can be classified into two ways:
          </Typography>
          <Link component={Link} to="/frontend" underline="none" className={styles.link}>
            Frontend Development
          </Link>
          <Link component={Link} to="/backend" underline="none" className={styles.link}>
            Backend Development
          </Link>

          <Frontend />
          <Backend />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default WebDevelopment;
