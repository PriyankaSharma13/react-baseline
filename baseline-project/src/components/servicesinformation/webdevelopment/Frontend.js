import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

function Frontend() {
  const frontendTechnologies = [
    {
      name: "HTML",
      description: "HTML stands for HyperText Markup Language. It is used to design the front end portion of web pages using markup language. It acts as a skeleton for a website since it is used to make the structure of a website."
    },
    {
      name: "CSS",
      description: "Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. It is used to style our website."
    },
    {
      name: "JavaScript",
      description: "JavaScript is a scripting language used to provide dynamic behavior to our website."
    },
    {
      name: "Bootstrap",
      description: "Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular CSS framework for developing responsive, mobile-first websites. Nowadays, websites are perfect for all browsers (IE, Firefox, and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones)."
    },
    {
      name: "Bootstrap 4",
      description: ""
    },
    {
      name: "Bootstrap 5",
      description: ""
    }
  ];

  return (
    <Box>
      <Box className=" p-4 md:p-12">
        <Container maxWidth="xl" mb={5}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h1" align="center" sx={{ fontSize: "42px", fontWeight: 600, color: "#5F9EA0" }}>
                Frontend Development
              </Typography>
              <Typography variant="body1" align="center" sx={{ fontSize: "20px", fontFamily: "sans-serif", color: 'black' }}>
                The part of a website where the user interacts directly is termed as front end. It is also referred to as the ‘client side’ of the application.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" sx={{ fontSize: "24px", mb: 2, fontFamily: "-moz-initial", color: "#5F9EA0", fontWeight: 600 , textDecoration: "underline"}}>
              Popular Frontend Technologies 
              </Typography>
              {frontendTechnologies.map((technology, index) => (
                <Typography key={index} variant="body1" sx={{ fontFamily: "sans-serif", color: "black" }}>
                  {technology.description ? (
                    <strong style={{ color: "#5F9EA0" , textDecoration: "underline"}}>{technology.name}:</strong>
                  ) : (
                    <strong style={{ color: "#5F9EA0", fontWeight: 600 }}>{technology.name}</strong>
                  )} {technology.description}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Frontend;
