import React from "react";
import Navbar from "../../../common/navbar/Navbar";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import img from "../../../assets/images.jpg";
import { Link } from "react-router-dom";
import Frontend from "./frontendinfo/Frontend";
import Backend from "./backendinfo/Backend";
import Footer from "../../../components/footer/footer";

const Webdevelopment = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Box className="bg-white p-4 md:p-12">
          <Container maxWidth="xl" mb={10}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontFamily:"-moz-initial",
                    color: "#5F9EA0",
                    mb: 2,
                  }}
                >
                  <span style={{ color: "black" }}>Best Web</span> Development
                  Company In Mohali
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontFamily: "sans-serif",
                    color: "black",
                    mb: 4,
                  }}
                >
                  Web development services help create all types of web-based
                  software and ensure a great experience for web users.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontFamily: "sans-serif",
                    color: "black",
                    mb: 4,
                  }}
                >
                  Developing a website for your business is the first step in
                  climbing the digital marketing ladder, and we are experts at
                  giving your first step the recognition it deserves. As the
                  best web development company in Mohali, we know what it takes
                  to develop a creative, engaging, and user-friendly website.
                  Founded in Mohali in 2012, we have a team of the best website
                  developers in India who always go above and beyond to provide
                  you with a future-proof website. 
                  Baseline IT Development has been rated as one of the best web development companies in
                  India by various reputed online sources and review sites. We
                  have a large pool of talented, experienced web developers who
                  provide clients with nothing less than an award-winning
                  website.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={img}
                  alt="images"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xl" mb={10}>
            <Typography
              variant="h4"
              sx={{ fontFamily:"-moz-initial", color: "#5F9EA0", mb:2, fontWeight:"bold" }}
            >
              Web Development can be classified into two ways:
            </Typography>
            <MuiLink
              component={Link}
              to="Frontend"
              underline="none"
              sx={{ display: "block", color: "inherit" ,fontWeight:600, mb:2 ,fontFamily:"sans-serif"}}
            >
              Frontend Development
            </MuiLink>
            <MuiLink
              component={Link}
              to="Backend"
              underline="none"
              sx={{ display: "block", color: "inherit" ,fontWeight:600,fontFamily:"sans-serif" }}
            >
              Backend Development
            </MuiLink>
          </Container>

          <Frontend/>
          <Backend/>
        </Box>



        <Box>
          <Footer/>
        </Box>
      </Box>
    </>
  );
};

export default Webdevelopment;
