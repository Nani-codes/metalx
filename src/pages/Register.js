import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [certifications, setCertifications] = useState('');
  const [languages, setLanguages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update user profile
  };

  return (
    <Container style={{
      height: "100%",
      marginTop: "122px"
    }} maxWidth="sm">
      <Typography variant="h2">User Profile</Typography>
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
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <TextField
          label="Rate"
          variant="outlined"
          fullWidth
          margin="normal"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          label="Availability"
          variant="outlined"
          fullWidth
          margin="normal"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />
        <TextField
          label="Certifications"
          variant="outlined"
          fullWidth
          margin="normal"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
        />
        <TextField
          label="Languages"
          variant="outlined"
          fullWidth
          margin="normal"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update Profile
        </Button>
      </form>
    </Container>
  );
};

export default Register;