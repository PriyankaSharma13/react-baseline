import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Navbar from '../../common/navbar/Navbar';
import style from './contact.module.css';
import data from './data';
import contactus from "../../assets/clientImg/contactus.jpg";
import Footer from '../../components/footer/footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
      country: '',
    });
  };

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <Box className={style.fullWidthBox}>
          <div className={style.contentContainer}>Get In Touch With Us</div>
          <Box className={style.shortContainer}>
            {data.map((item, index) => (
              <Box key={index} className={style.mailContent}>
                <img src={item.icon} width={70} height={70} alt={item.alt || item.title} />
                <Typography variant="h6" className={style.contentHeading}>{item.title}</Typography>
                {item.address && <Typography className={style.paragraph}>{item.address}</Typography>}
                {item.content && item.content.map((text, idx) => (
                  <Typography key={idx} className={style.paragraph}>{text}</Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={style.main}>
          <Box className={style.formContainer}>
            <Box className={style.leftContainer}>
              <img src={contactus} alt="Contact Us" className={style.image} />
            </Box>
            <Box className={style.rightContainer}>

              <form onSubmit={handleSubmit}>
                <Typography variant="h3"  sx={{fontWeight:700}} className={style.formHeading}>Get In Touch With Us</Typography>
                <Box className={style.formGroup}>
                  <TextField
                    id="name"
                    name="name"
                    label="Enter your Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    className={style.textField}
                  />
                </Box>

                <Box className={style.formGroup}>
                  <TextField
                    id="email"
                    name="email"
                    label="Enter your Email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={style.textField}
                  />
                </Box>

                <Box className={style.formGroup}>
                  <FormControl variant="outlined" className={style.textField}>
                    <InputLabel id="country-label">Enter your Country</InputLabel>
                    <Select
                      labelId="country-label"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      label="Enter your Country"
                    >
                      <MenuItem value="australia">Australia</MenuItem>
                      <MenuItem value="canada">Canada</MenuItem>
                      <MenuItem value="usa">USA</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className={style.formGroup}>
                  <TextField
                    id="message"
                    name="message"
                    label="Enter your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={style.textField}
                  />
                </Box>

                <Button type="submit" variant="contained" className={style.submitButton}>
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
