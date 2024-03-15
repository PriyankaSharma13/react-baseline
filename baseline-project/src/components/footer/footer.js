import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/new-logo.png";
import styles from "../footer/styles.module.css";

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" alignItems="flex-start">

                    {/* ----------------- Left Section  ------------------- */}
                    <Grid item xs={12} md={3} textAlign={{ xs: 'center', md: 'left' }}>
                        <Box mb={{ xs: 2, md: 0 }} textAlign="center">
                            <img
                                src={logo}
                                alt="Logo"
                                width={180}
                                sx={{ display: 'block', margin: '0 auto', mb: 2 }}
                               
                            />
                            <Typography variant="body2" sx={{ color: "#FFFFFF", fontSize: "16px", fontFamily: "sans-serif" }}>
                                Baseline Development is a web services and solutions company with a dedicated development center in Mohali and a presence in the USA. We have been serving our global clients.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* ------------------ Middle Section --------------- */}
                    <Grid item xs={12} md={3} textAlign="center">
                        <Box>
                            <Typography variant="h2" className={styles.navLink} sx={{ color: '#FFFFFF', fontSize: "18px", fontFamily: "sans-serif", mb: 2 }}>
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
                        </Box>
                    </Grid>

                    {/* ------------- Programs Section ---------------- */}
                    <Grid item xs={12} md={3} textAlign="center">
                        <Box>
                            <Typography variant="h2" className={styles.navLink} sx={{ color: '#FFFFFF', fontSize: "18px", fontFamily: "sans-serif", mb: 2 }}>
                                Programs
                            </Typography>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                                Web Development
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                                Market Research
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                                Online Support
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                                SEO services
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', color: '#FFFFFF', mb: 1 }}>
                                Web designing
                            </Link>
                        </Box>
                    </Grid>

                    {/* ------------Right Section ------------------ */}
                    <Grid item xs={12} md={3} textAlign={{ xs: 'center', md: 'right' }}>
                        <Box>
                            <Typography variant="h2" className={styles.navLink} sx={{ color: '#FFFFFF', fontSize: "18px", fontFamily: "sans-serif", mb: 2 }}>
                                Connect with us
                            </Typography>
                            <Box sx={{ fontSize: "18px", mb: 2 }}>
                                <Link href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener" sx={{ textDecoration: 'none', cursor: 'pointer', color: '#FFFFFF'}}>
                                    <InstagramIcon />
                                </Link>
                                <Link href="https://www.whatsapp.com/download" target="_blank" rel="noopener" sx={{ textDecoration: 'none', cursor: 'pointer', color: '#FFFFFF'}}>
                                    <WhatsAppIcon />
                                </Link>
                                <Link href="https://in.linkedin.com/" target="_blank" rel="noopener" sx={{ textDecoration: 'none', cursor: 'pointer', color: '#FFFFFF' }}>
                                    <LinkedInIcon />
                                </Link>
                            </Box>
                            <Typography variant="body2" sx={{ fontSize: "14px", fontFamily: "sans-serif", mb: 1, cursor: 'pointer', color: '#FFFFFF'}}>
                                Email: info@example.com
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: "14px", fontFamily: "sans-serif", cursor: 'pointer', color: '#FFFFFF' }}>
                                Phone: +123 456 789
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* ---------------Copyright Section--------------------- */}
                <Grid container justifyContent="center" alignItems="center" mt={4} sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: 2 }}>
                    <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
                        © {new Date().getFullYear()} Baseline IT Development
                    </Typography>
                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;
