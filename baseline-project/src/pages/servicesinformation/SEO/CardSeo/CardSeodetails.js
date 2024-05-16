import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import onPage from "../../../../assets/servicesInfo/remove.png";
import Comprehensive from "../../../../assets/servicesInfo/service-five.png";
import seoServices from "../../../../assets/servicesInfo/service-six.png";
import offPage from "../../../../assets/servicesInfo/service-four.png";
import seoAnalytics from "../../../../assets/servicesInfo/service-five.png";
import sixLogo from "../../../../assets/servicesInfo/service-six.png";
import styles from "./card.module.css";

const CardDetails = () => {
  const SeoDetails = [
    {
      id: 1,
      image: onPage,
      heading: "On-Page SEO",
      description:
        "We’ll take a deep dive into your current strategy. We look for what’s working and what doesn’t, providing you with SEO professional services and feedback, including goals meta-tags, and more.",
    },
    {
      id: 2,
      image: Comprehensive,
      heading: "Comprehensive Content",
      description:
        "Content is king in the age of Google SEO, and we make sure that you receive high quality, compelling, relevant content as part of our SEO services.",
    },
    {
      id: 3,
      image: seoServices,
      heading: "Technical SEO Services",
      description:
        "Technical SEO is very important to your website optimization. We will do everything to remove all inconsistencies and make your website run fast and smooth.",
    },
    {
      id: 4,
      image: offPage,
      heading: "Link-Building and Off-Page SEO",
      description:
        "Many of the top ranking factors happen off of your website. We as website SEO agency make sure that you’re getting the right buzz, helping build links from high-quality websites in your industry.",
    },
    {
      id: 5,
      image: seoAnalytics,
      heading: "SEO Analytics",
      description:
        "We will determine what exactly are your website issues right now. Our experts can make the most out of Google Analytics, different managers, estimations, and reporting.",
    },
    {
      id: 6,
      image: sixLogo,
      heading: "Sustainable Growth",
      description:
        "Unlock the world of unlimited and sustainable growth opportunities with increased brand awareness, organic traffic, and leads.",
    },
  ];

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {SeoDetails.map((card) => (
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
    </>
  );
}

export default CardDetails;
