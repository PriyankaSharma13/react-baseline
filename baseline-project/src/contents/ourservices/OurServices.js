import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CardServices from '../cardservices/CardServices'

const OurServices = () => {
    
    return (
        <>
            <Box sx={{ textAlign: 'center', position:"relative", zIndex:1, backgroundColor:"black" }}>
                <Box className=" p-4 md:p-12">
                    <Container maxWidth="xl">
                        <Box className='banner'>
                            <Typography variant='h2' sx={{ color: "#fff", zIndex:999 }}>
                                Our Services
                            </Typography>
                            <Typography variant='body2' sx={{ fontSize: '18px', fontFamily: 'sans-serif', color: "#fff", zIndex:999 }}>
                                Despite being the most trusted website development & web designing company in Mohali,
                                we also offer result-driven digital marketing solutions.We do everything for your impeccable growth, from providing you with the best SEO services in Mohali to other digital solutions.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <CardServices />
            </Box>
        </>
    )
}

export default OurServices
