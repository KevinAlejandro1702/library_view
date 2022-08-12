import { React, useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Swal from 'sweetalert2';

const theme = createTheme();

/*	
	SignUp

	Permite crear un nuevo usuario

  Envía a la base de datos los atributos necesarios para guaradar un nuevo registro de
  usuario en la tabla correspondiente, además, permite seleccionar el rol de usuario
*/

export default function SignUp() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    full_name: '',
    phone: 0,
    address: '',
    role: '',
    email: '',
    password: '',
  })

  const inputChange = ({ target }) => {
    const { name, value } = target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'User created',
      confirmButtonText: 'Go to Login',
    }).then(() => {
      navigate('/login')
    })

    const res = await fetch('http://localhost:4000/users', config);
    const data = await res.json();

    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 3,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#258dbe' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="full_name"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  onChange={inputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone number"
                  autoFocus
                  onChange={inputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="address"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  autoFocus
                  onChange={inputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="Rol"
                  name="role"
                  select
                  fullWidth
                  id="Rol"
                  label="Rol"
                  onChange={inputChange}
                >
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"Client"}>Client</MenuItem>
                </TextField>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={inputChange}
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
                  autoComplete="new_password"
                  onChange={inputChange}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}

              disabled={!user.full_name ||
                !user.phone ||
                !user.address ||
                !user.role ||
                !user.email ||
                !user.password}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}