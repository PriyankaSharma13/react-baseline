import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../common/navbar/Navbar'

const About = () => {
    return (
        <Box>
            <Navbar />
            <Box className="container mx-auto mt-8 mb-4 align-center" >
                <Typography variant="h2" className="text-[20px] font-bold mb-4 ">About Us</Typography>
            </Box>
        </Box>
    )
}
export default About;
