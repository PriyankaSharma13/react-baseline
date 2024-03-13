import React from "react";
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from "@mui/material";

function Backend() {
  const backendTechnologies = [
    {
      name: "PHP",
      description:
        "This PHP tutorial will give you an in-depth understanding of the PHP scripting language. Whether you are a beginner or a professional PHP developer this free PHP tutorial gives you in-depth insights into PHP scripting language. PHP (Hypertext Preprocessor) is a versatile and widely used server-side scripting language for creating dynamic and interactive web applications. Whether you’re a seasoned developer or a beginner eager to delve into the world of web development, this PHP tutorial is your gateway to mastering the intricacies of PHP programming.",
    },
    {
      name: "Java",
      description:
        "Java is one of the most popular and widely used programming languages. It is highly scalable. Java is fast, reliable and secure. From desktop to web applications, scientific supercomputers to gaming consoles, cell phones to the Internet, Java is used in every nook and corner. Java is easy to learn and its syntax is simple and easy to understand. It is based on C++ (so easier for programmers who know C++). Java has removed many confusing and rarely-used features e.g. explicit pointers, operator overloading etc. Java also takes care of memory management and for that, it provides an automatic garbage collector. This collects the unused objects automatically.",
    },
    {
      name: "Python",
      description:
        "Python is a programming language that lets you work quickly and integrate systems more efficiently. Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, and Machine Learning applications, along with all cutting-edge technology in Software Industry. Python language is being used by almost all tech-giant companies like – Google, Amazon, Facebook, Instagram, Dropbox, Uber… etc.",
    },
    {
      name: "Node.Js",
      description:
        "NodeJS or Node.js is one of the powerful open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.",
    },
  ];

  return (
    <Box>
      <Box className="bg-white p-4 md:p-12">
        <Container maxWidth="xl">
          <Grid container spacing={2} justifyContent="center" alignItems="center" mb={6}>
            <Grid item xs={12}>
              <Typography variant="h1" align="center" sx={{ fontSize: { xs: "28px", md: "42px" }, fontWeight: 600, color: "#5F9EA0" }}>
                Backend Development
              </Typography>
              <Typography variant="body1" align="center" sx={{ fontSize: "20px", fontFamily: "sans-serif", color: "black", mt: 2 }}>
                Backend is the server side of a website. It is part of the website that users cannot see and interact with. It is the portion of software that does not come in direct contact with the users. It is used to store and arrange data.
              </Typography>
            </Grid>
          </Grid>
          
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" sx={{ fontSize: "24px", mb: 2, fontFamily: "-moz-initial", color: "#5F9EA0", fontWeight: 600, textDecoration: "underline" }}>
                Popular Backend Technologies
              </Typography>
              {backendTechnologies.map((technology, index) => (
                <Typography key={index} variant="body1" sx={{ fontFamily: "sans-serif", color: "black", mt: 2 }}>
                  <strong style={{ color: "#5F9EA0", textDecoration: "underline" }}>{technology.name}:</strong> {technology.description}
                </Typography>
              ))}
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center" alignItems="center" mt={5}>
            <Grid item xs={12}>
              <Typography variant="h1" align="center" sx={{ fontSize: { xs: "28px", md: "42px" }, fontWeight: 600, color: "#5F9EA0", fontFamily: "-moz-initial" }}>
                One-Stop Destination For All Your Web Development Needs
              </Typography>
              <Typography variant="body1" align="center" sx={{ fontSize: "20px", fontFamily: "sans-serif", color: "black", mt: 2 }}>
                As the best web development company in Mohali, we offer our customers an extensive range of website development services all under one roof. By doing so, we hope to ease the burden on businesses that require multiple types of websites based on their specializations and industries.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <List sx={{ backgroundColor: 'white'  }}>
                {['Php Development', 'React.js', 'Bigcommerce', 'Laravel', 'Shopify', 'Wordpress', 'Web Developer'].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={item} sx={{ color: "#5F9EA0", textDecoration: "underline", fontWeight: 600, cursor: "pointer"}} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Backend;
