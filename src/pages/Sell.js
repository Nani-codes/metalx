import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Sell = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend server
    console.log({
      productName,
      description,
      price,
    });
    // Reset form
    setProductName('');
    setDescription('');
    setPrice('');
  };

  return (
    <Container style={{
      height: "100vh",
      marginTop: "122px"
    }}>
      <Typography variant="h4" gutterBottom>Sell Your Product</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

export default Sell;
