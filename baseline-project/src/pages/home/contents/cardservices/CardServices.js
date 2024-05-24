import React from "react";
import Footer from "../../../../components/footer/footer";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import reactLogo from "../../../../assets/react.png";
import phplogo from "../../../../assets/php.png";
import digitallogo from "../../../../assets/digital-marketing.png";
import laravellogo from "../../../../assets/laravel-framework-logo.png";
import cartlogo from "../../../../assets/shopping-bag.png";
import weblogo from "../../../../assets/web-article.png";
import styles from "./styles.module.css";


const cardData = [
  {
    id: 1,
    image: reactLogo,
    heading: "React Js",
    description:
      "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.",
  },
  {
    id: 2,
    image: phplogo,
    heading: "Php Developer",
    description:
      "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.",
  },
  {
    id: 3,
    image: digitallogo,
    heading: "Digital Marketing",
    description:
      "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.",
  },
  {
    id: 4,
    image: cartlogo,
    heading: "Big Commerce",
    description:
      "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.",
  },
  {
    id: 5,
    image: weblogo,
    heading: "Web Designing",
    description:
      "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.",
  },
  {
    id: 6,
    image: laravellogo,
    heading: "Laravel",
    description:
      "The ReactJS Web and Mobile app development services we provide are best suited for startups and established enterprises.",
  },
];

const CardServices = () =>{
 
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id} sx={{marginBottom: 4}}>
              <div
                className={styles.customCard}
              >
                <img
                  src={card.image}
                  alt={card.heading}
                  className={styles.cardImage}
                />
                <Box
                  className={styles.overlay}
                  style={{ backgroundColor: card.bgColor }}
                ></Box>
                <CardContent style={{ flex: 1, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                      mb: 2,
                    }}
                  >
                    {card.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box mt={6}>
        <Footer />
      </Box>
    </>
  );
}

export default CardServices;


