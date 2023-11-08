import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/storelogin'; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      username: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      password: event.target.value,
    }));
  };

  const isVerifiedUser = () => {
    fetch(`http://localhost:3030/login?user=${formData.username}&password=${formData.password}`)
      .then(response => response.json())
      .then(response => {
        if (response) {
          if (Object.keys(response.data).length === 0) {
            setError('Usuario y/o contraseña incorrectos');
            console.log('Usuario y/o contraseña incorrectos');
          } else {
            if (response.data.nombre !== undefined) {
              dispatch(
                loginActions.login({
                  name: response.data.nombre,
                  rol: response.data.rol,
                })
              );
              navigate('/home');
            }
          }
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === '' || formData.password === '') {
      setError('Por favor, complete todos los campos.');
      console.log('Por favor, complete todos los campos.');
    } else {
      isVerifiedUser();
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Paper sx={{ margin: 'auto', padding: 2 }} elevation={6}>
        <Avatar sx={{ backgroundColor: 'primary.main', margin: 'auto', width: 100, height: 100  }}>
          <img src="/images/login.png" alt="Avatar" />
        </Avatar>
        <Typography component="h5" variant="h5" sx={{ textAlign: 'center', margin: 2 }}>
          Acceder
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de usuario"
            name="username"
            value={formData.username}
            onChange={handleUsernameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            value={formData.password}
            onChange={handlePasswordChange}
          />
          <Button
            type="Onsubmit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Acceder
          </Button>
        </Box>
        {error && (
          <Typography variant="body2" color="error" sx={{ textAlign: 'center', margin: 2 }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Grid>
  );
};

export default Login;

//Judit Mendoza Santana 