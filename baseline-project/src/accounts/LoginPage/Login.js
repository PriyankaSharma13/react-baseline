import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import welcome from "../../assets/welcome/wel.png";
import styles from './login.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email Address is required').email('Invalid email format'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    }),
    onSubmit: async (values) => {
      if (formik.errors.email) {
        toast.error(formik.errors.email);
        return;
      }
      try {
        const response = await axios.post("http://localhost:4000/user/login", values);
        if (response.status === 200) {
          navigate('/home');
        } else {
          setError(response.data.message);
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error('Login error:', error);
        setError('An error occurred during login');
        toast.error('An error occurred during login');
      }
    },
  });

  return (
    <Box className={styles.mainContainer}>
       <ToastContainer />
      <Container component="main" maxWidth="md" className={styles.container}>
        <Box className={styles.content}>
          <Box className={styles.formContainer}>
            <Box className={styles.header}>
              <Avatar sx={{ m: 'auto', bgcolor: "#f1d625", width: 56, height: 56 }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className={styles.title}>
                Sign In
              </Typography>
              <form onSubmit={formik.handleSubmit} noValidate>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  {...formik.getFieldProps('email')}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  {...formik.getFieldProps('password')}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={styles.submitButton}
                  disabled={formik.isSubmitting}
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: "40px",
                    backgroundColor: "#f1d625",
                    color: "white",
                    fontWeight: "bold",
                    '&:hover': {
                      backgroundColor: "#f1d625",
                    },
                  }}
                >
                  {formik.isSubmitting && <span className="animate-spin inline-block mr-1"></span>}
                  Sign In
                </Button>
                <Typography variant="body2" align="center" className={styles.formFooter}>
                  Don't have an account?{' '}
                  <Link to="/register" className={styles.link}>
                    Sign Up
                  </Link>
                </Typography>

              </form>
            </Box>
          </Box>
          <Box className={styles.imageContainer}>
            <img src={welcome} alt="Welcome" className={styles.image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
