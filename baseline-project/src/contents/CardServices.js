import React from 'react'
import Footer from '../components/footer/footer';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import reactLogo from "../assets/react.png"

function CardServices() {
  const cardData = [
    {
      id: 1,
      image: reactLogo,
      heading: 'React Js',
      description: 'The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.'
    },
    {
      id: 2,
      image: reactLogo,
      heading: 'Php Developer',
      description: 'The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.'
    },
    {
      id: 3,
      image: reactLogo,
      heading: 'Digital Marketing',
      description: 'The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.'
    },
    {
      id: 4,
      image: reactLogo,
      heading: 'Big Commerce',
      description: 'The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.'
    },
    {
      id: 5,
      image: reactLogo,
      heading: 'Web Designing',
      description: 'The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.'
    },
    {
      id: 6,
      image: reactLogo,
      heading: 'Laravel',
      description: 'The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.'
    },
    
  ];
  return ( 
    <>
     <Container>
      <Grid container spacing={3}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
            }}>
              <img
                src={card.image}
                alt={card.heading}
                style={{
                  width: '80px',
                  height: '90px',
                  objectFit: 'cover',
                  marginTop: '16px',
                  // borderRadius: '50%', 
                
                }}
              />
              <CardContent style={{ flex: 1, textAlign: 'center' }}>
                <Typography variant="h6" component="div" sx={{color:"black", fontSize:"20px" , fontFamily:"sans-serif", fontWeight:"700",mb:2}}>
                  {card.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize:"16px" , fontFamily:"sans-serif", fontWeight:"500"}}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>


      <Box mt={6}>
        <Footer />
      </Box>
    

    </>
  )
}

export default CardServices
