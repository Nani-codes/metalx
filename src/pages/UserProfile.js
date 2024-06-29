import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

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
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          margin="normal"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          label="State"
          variant="outlined"
          fullWidth
          margin="normal"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          label="Zip"
          variant="outlined"
          fullWidth
          margin="normal"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update Profile
        </Button>
      </form>
    </Container>
  );
};

export default UserProfile;