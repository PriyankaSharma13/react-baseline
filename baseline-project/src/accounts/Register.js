import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().required('Email Address is required').email('Invalid email format'),
            phone: Yup.string().required('Phone Number is required'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters'),
        }),
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:4000/user/register", {
                    name: `${values.firstName} ${values.lastName}`,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                });
            } catch (error) {
                console.error("Error during registration:", error);
            }
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
            marginTop: 8,
        }}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "sans-serif" }}>
                {/* <Avatar sx={{ m: 1, bgcolor: '#5F9EA0' }}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5"  sx={{fontFamily: "sans-serif", fontSize:"20px", fontWeight:700 }}>
                    Sign up
                </Typography>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        {...formik.getFieldProps('firstName')}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        {...formik.getFieldProps('lastName')}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
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
                        id="phone"
                        label="Phone Number"
                        {...formik.getFieldProps('phone')}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
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
                        Sign up
                    </Button>
                    <Typography variant="body2" align="center" style={{ marginTop: '16px' ,fontFamily: "sans-serif" }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: "#5F9EA0", fontSize:"16px",fontWeight:700,fontFamily: "sans-serif"}}>
                            Sign In
                        </Link>
                    </Typography>
                    
                </form>
            </Box>
        </Container>
    );
};

export default Register;
