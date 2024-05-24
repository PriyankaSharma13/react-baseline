import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import welcome from "../../assets/welcome/wel.png";
import styles from "./register.module.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            // lastName: '',
            email: '',
            phone: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required('First Name is required'),
            email: Yup.string().required('Email Address is required').email('Invalid email format'),
            phone: Yup.string().required('Phone Number is required'),
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
                await axios.post("http://localhost:4000/user/register", {
                    firstName: values.firstName,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                });
                console.log(`Registered user's first name: ${values.firstName}`);
                navigate('/login');
            } catch (error) {
                console.error("Error during registration:", error);
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
                                        borderRadius: "40px",
                                        backgroundColor: "#f1d625",
                                        color: "white",
                                        fontWeight: "bold",
                                        '&:hover': {
                                            backgroundColor: "#f1d625",
                                        },
                                    }}
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting && <span className="animate-spin inline-block mr-1"></span>}
                                    Sign up
                                </Button>
                                <Typography variant="body2" align="center" className={styles.formFooter}>
                                    Already have an account?{' '}
                                    <Link to="/login" className={styles.link}>
                                        Sign In
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

export default Register;
