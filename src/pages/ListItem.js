import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const ListItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newItem = { name, description, price, seller: 'seller-id' }; // Replace 'seller-id' with actual seller ID
      await axios.post('http://localhost:5000/api/items', newItem);
      alert('Item listed successfully');
    } catch (error) {
      console.error('Error listing item:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>List an Item for Sale</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">List Item</Button>
      </form>
    </Container>
  );
};

export default ListItem;
