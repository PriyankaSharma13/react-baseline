import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = () => {
  const navigate = useNavigate();
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
    onSubmit: (values) => {
      console.log(values,"hgbhbhj");
      navigate('/home');
    },
  });

  return (
    <Container component="main" maxWidth="sm" sx={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop:"100px"
      
    }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "sans-serif" }}>
        <Avatar sx={{ m: 2, bgcolor: '#5F9EA0', width: 50, height: 50 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: 700 }}>
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
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#5F9EA0",
              fontFamily: "sans-serif",
              color: "white",
              '&:hover': {
                backgroundColor: "#5F9EA0",
              },
            }}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting && <span className="animate-spin inline-block mr-1 "></span>}
            Sign In
          </Button>
          <Typography variant="body2" align="center" style={{ marginTop: '16px', fontFamily: "sans-serif" }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: "#5F9EA0", fontSize: "16px", fontWeight: 700, fontFamily: "sans-serif" }}>
              Sign Up
            </Link>
          </Typography>
          <Typography variant="body2" align="center" style={{ marginTop: '16px', fontFamily: "sans-serif" }}> 
            <Link to="/" style={{ color: "#5F9EA0", fontSize: "16px", fontWeight: 700, fontFamily: "sans-serif" }}>
             home
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
