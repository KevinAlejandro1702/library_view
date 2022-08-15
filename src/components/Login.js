import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

var variable_global = '';
var rol = '';
var idUser = '';

/*	
	Login

	Es la función que muestra la interfaz del Log In que permite ingresar a las demás
  funcionalidades de la página

  Valida el email y la contraseña ingresados con la información obtenida de la base
  de datos, para determinar si existe un usuario con el email y si la contraseña es
  la correcta para el mismo
*/

export default function Login() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const validateUser = () => {

    var emailMatch = false;
    var index = 0;
    console.log(users.length)
    for (var i = 0; i < users.length; i++) {
      if (JSON.stringify(users[i].email) === JSON.stringify(user.email)) {

        console.log('coincide el email')
        emailMatch = true
        index = i

        break;

      } else {
        console.log('no coincide el email')
        emailMatch = false
        index = i
      }
    }

    if (emailMatch) {
      if (JSON.stringify(users[index].password) === JSON.stringify(user.password)) {
        console.log('coincide la contraseña')
        navigate('/books')

      } else {
        console.log('no coincide la contraseña')
        Swal.fire({
          icon: 'error',
          title: 'Incorrect Password',
        })
      }

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Email not match',
      })
    }

    var us = user.email

    for (var j = 0; j < users.length; j++) {
      if (users[j].email === us) {
          rol = users[j].roles
          idUser = users[j].id_user
          console.log('rol', rol)
          console.log('id', idUser)
          break;
      } else {
          console.log('User not found')
      }
    }
  }


  const inputChangeEmail = ({ target }) => {
    const { value } = target
    setUser({
      ...user,
      email: value
    })
    setVariable(value)
  }

  const inputChangePass = ({ target }) => {
    const { value } = target
    setUser({
      ...user,
      password: value
    })
  }

  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch('http://localhost:4000/users')
    const data = await response.json()
    setUsers(data)
  };
  useEffect(() => { loadUsers() }, [])

  
  return (
    <Grid container component="main" fullWidth>
      <CssBaseline />

      <Grid
        sx={{
          width: 764,
          height: 764,
          backgroundImage: 'url(https://cdn.discordapp.com/attachments/681190491278147626/1004109396596502620/bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

      </Grid>

      <Grid item xs={12} sm={8} md={5.2} component={Paper} elevation={6} square >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1
              , bgcolor: '#258dbe'
            }}>

          </Avatar>

          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              auto
              fullWidth
              id="email"
              label="Email"
              autoFocus
              value={user.email}
              onChange={inputChangeEmail}
              name="email"
            />

            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              value={user.password}
              onChange={inputChangePass}
              name="password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={validateUser}
              disabled={!user.email ||
                !user.password
              }
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link to="/signup">
                  {"Don't you have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export function getRol(){
  return rol
}

export function getUserID(){
  return idUser
}

function setVariable(variable){
  variable_global = variable
}