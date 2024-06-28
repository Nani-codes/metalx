import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const RegisterExpert = () => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to register as an expert
  };

  return (
    <Container maxWidth="sm">
      <h2>Register as an Expert</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Expertise"
          variant="outlined"
          fullWidth
          margin="normal"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
        />
        <TextField
          label="Experience"
          variant="outlined"
          fullWidth
          margin="normal"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterExpert;
