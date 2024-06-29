import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, MenuItem } from '@mui/material';

const Sell = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [images, setImages] = useState([]);
  const [certificationFiles, setCertificationFiles] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend server
    console.log({
      productName,
      description,
      price,
      category,
      condition,
      images,
      certificationFiles,
      sellerName,
      sellerEmail,
      sellerPhone,
    });
    // Reset form
    setProductName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setCondition('');
    setImages([]);
    setCertificationFiles([]);
    setSellerName('');
    setSellerEmail('');
    setSellerPhone('');
  };

  const handleImageChange = (e) => {
    setImages([...images, e.target.files[0]]);
  };

  const handleCertificationFileChange = (e) => {
    setCertificationFiles([...certificationFiles, e.target.files[0]]);
  };

  return (
    <Container style={{
      height: "100%",
      marginTop: "122px"
    }}>
      <Typography variant="h4" gutterBottom>Sell Your Product</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mb={2}>
              <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <TextField
                select
                label="Category"
                variant="outlined"
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Home Goods">Home Goods</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <TextField
                select
                label="Condition"
                variant="outlined"
                fullWidth
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Used">Used</MenuItem>
                <MenuItem value="Refurbished">Refurbished</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h6">Images</Typography>
              <input type="file" multiple onChange={handleImageChange} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h6">Certification Files</Typography>
              <input type="file" multiple onChange={handleCertificationFileChange} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h6">Seller Information</Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={sellerEmail}
                onChange={(e) => setSellerEmail(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Sell;