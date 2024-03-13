import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import logo from "../../assets/logo1.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box   bgcolor={"#90dbf4"} color="#fff" py={4}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="space-between">

                    {/* ----------------- Left Section  ------------------- */}
                    <Grid item xs={12} md={3} textAlign={"center"}>
                        <Box mb={{ xs: 2, md: 0 }} textAlign={{ xs: 'center', md: 'left' }}>
                            <img
                                src={logo}
                                alt="Logo"
                                width={150}
                                sx={{ display: 'block', margin: '0 auto', mb: 2 }}
                            />
                            <Typography variant="body2" sx={{ color: "#FFFFFF", fontSize: "16px", fontFamily: "sans-serif", mt: 3 }}>
                                Baseline Development is a web services and solutions company with a dedicated development center in Mohali and a presence in the USA. We have been serving our global clients.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* ------------------ Middle Section --------------- */}
                    <Grid item xs={12} md={3} textAlign={"center"}>
                        <Typography variant="h2" sx={{ color: "black", fontSize: "18px", fontFamily: "sans-serif", mb: 2 }}>
                            Company
                        </Typography>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                            About
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                            Services
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                            Contact Us
                        </Link>
                    </Grid>

                    {/* ------------- Programs Section ---------------- */}
                    <Grid item xs={12} md={3} textAlign={"center"}>
                        <Typography variant="h2" sx={{ color: "black", fontSize: "18px", fontFamily: "sans-serif", mb: 2 }}>
                            Programs
                        </Typography>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                            Web Development
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                            Market Research
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF#FFFFFF', mb: 1 }}>
                            Online Support
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF#FFFFFF', mb: 1 }}>
                            SEO services
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF#FFFFFF', mb: 1 }}>
                            Web designing
                        </Link>
                    </Grid>

                    {/* ------------Right Section ------------------ */}
                    <Grid item xs={12} md={3} textAlign={"center"}>
                        <Box textAlign={{ xs: 'center', md: 'right' }}>
                            <Typography variant="h2" sx={{color: "black", fontSize: "18px", fontFamily: "sans-serif", mb: 2 }}>
                                Connect with us
                            </Typography>
                            <Box sx={{ fontSize: "18px", mb: 2 }}>
                                <Link to="https://www.instagram.com/accounts/login/" sx={{ textDecoration: 'none',cursor: 'pointer', color: 'inherit' }}>
                                    <InstagramIcon />
                                </Link>
                                <Link to="https://www.whatsapp.com/download" sx={{ textDecoration: 'none', cursor: 'pointer',color: 'inherit' }}>
                                    <WhatsAppIcon />
                                </Link>
                                <Link to="https://twitter.com/" sx={{ textDecoration: 'none', cursor: 'pointer',color: 'inherit' }}>
                                    <XIcon />
                                </Link>
                                <Link to="https://in.linkedin.com/" sx={{ textDecoration: 'none',cursor: 'pointer', color: 'inherit' }}>
                                    <LinkedInIcon />
                                </Link>
                            </Box>
                            <Typography variant="body2" sx={{ fontSize: "14px", fontFamily: "sans-serif", mb: 1,cursor: 'pointer'}}>
                                Email: info@example.com
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: "14px", fontFamily: "sans-serif" ,cursor: 'pointer' }}>
                                Phone: +123 456 789
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* ---------------Copyright Section--------------------- */}
                <Grid container mt={4}>
                    <Typography variant="body2" sx={{color: "black",}}>
                    © 2023 Baseline IT Development
                    </Typography>
                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;
