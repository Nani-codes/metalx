import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = { name, email, password };
      await axios.post('http://localhost:5000/api/auth/register', newUser);
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
