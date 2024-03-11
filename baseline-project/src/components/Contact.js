import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Box,  Typography } from '@mui/material';
import Navbar from '../common/navbar/Navbar';
import Footer from './footer/footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <Box sx={{  }}>
        <Navbar />
        <Box className="container mx-auto mt-8 mb-4">
          <Typography variant="h2" className="text-2xl font-bold mb-4">Contact Us</Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Name"
              type="text"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              name="message"
              variant="outlined"
              fullWidth
              value={formData.message}
              onChange={handleChange}
              required
            />
            
            <Button  type="submit" variant="contained" className="text-white w-full md:w-[200px]" 
                   sx={{ '&:hover': { backgroundColor: '#5F9EA0' } , backgroundColor:"#5F9EA0"}}>
                    Submit
            </Button>
          </form>
        </Box>

      {/* </Container> */}
      </Box>
      <Box mt={16}>
          <Footer/>
      </Box>
        
 
    </>
  );
}

export default Contact;
