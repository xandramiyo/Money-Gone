import { useState, Component } from 'react'
import { signUp } from '../../utilities/users-service'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUpForm({ setUser }) {
  const [ formData, setFormData ] = useState({
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
  })
  const disable = formData.password !== formData.confirm;

  function handleChange(evt) {
      setFormData({
          ...formData,
          [evt.target.name]: evt.target.value,
          error: ''
      })
  }

  async function handleSubmit(evt) {
      evt.preventDefault()
      try {
          const formDataCopy = {...formData}
          delete formDataCopy.error
          delete formDataCopy.confirm
          const user = await signUp(formDataCopy)
          setUser(user)
      } catch {
          setFormData({
              ...formData,
              error: 'Sign Up Failed - Try Again'
          })
      }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="family-name"
                    value={formData.name} 
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email} 
                    onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={formData.password} 
                    onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="confirm"
                    label="Confirm Password"
                    type="password"
                    id="confirm"
                    value={formData.confirm} 
                    onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disable}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}