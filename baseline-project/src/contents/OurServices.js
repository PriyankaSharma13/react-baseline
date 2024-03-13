import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CardServices from './CardServices'

const OurServices = () => {
    
    return (
        <>
            <Box sx={{ textAlign: 'center',}}>
                <Box className=" p-4 md:p-12">
                    <Container maxWidth="xl">
                        <Box className="">
                            <Typography variant='h2' sx={{ color: "black", }}>
                                Our Services
                            </Typography>
                            <Typography variant='body2' sx={{ fontSize: '18px', fontFamily: 'sans-serif', color: "black" }}>
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
