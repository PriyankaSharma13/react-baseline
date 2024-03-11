import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import OurServices from '../../contents/OurServices'
import banner from "../../assets/banner.jpg"

function Banner() {
  return (
    <>
     {/* ----------------------- */}
     <Navbar/>

     {/* ----------------Banner Section------------------ */}
     
         <Box className="bg-white p-4 md:p-12">
           <Container maxWidth="xl">
             <Grid container spacing={4} alignItems="center" justifyContent="space-between">
     
               {/* ----------- Content Section ---------- */}
               <Grid item xs={12} md={4}>
                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                   <Typography variant="h1" sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: "sans-serif", color: '#5F9EA0', mb: 2 }}>
                     <span style={{ color: 'black' }}>Team</span> Of Professionals
                   </Typography>
                   <Typography variant="h2" sx={{ fontSize: '16px', fontFamily: "sans-serif", color: 'black', mb: 4 }}>
                     Baseline IT Development has a team of professionals with one mission of empowering 
                     the lives through intense solutions of technology. We invite clients, partners, and employees to join us for business development as well as career development. Our experts provide top-tier services in web development, designing, maintenance, support, testing, and optimization. 24/7 assistance, great support, and quality coding are in priority while working. Newcomers working here will be exposed to a variety of learning opportunities across projects and challenges, all of which are meant to bring out the best in them every day.
                   </Typography>
                   <Button variant="contained" className="text-white w-full md:w-[200px]" 
                   sx={{ '&:hover': { backgroundColor: '#5F9EA0' } , backgroundColor:"#5F9EA0"}}>
                     View
                   </Button>
                 </Box>
               </Grid>
     
               {/* ------------Image Section ----------- */}
               <Grid item xs={12} md={7}>
                 <Box>
                   <img src={banner} alt="Banner" style={{ width: '100%', height: '400px', borderRadius: '8px' }} />
                 </Box>
               </Grid>
               
             </Grid>
           </Container>
         </Box>
         <Box>
             <OurServices/>
         </Box>
         </>
  )
}

export default Banner
