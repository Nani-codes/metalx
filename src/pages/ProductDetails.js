import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import {mockItems} from '../data/mockData';

const ProductDetails = () => {
    const { id } = useParams();
    const product = mockItems.find((item) => item.id === parseInt(id, 10));
  
    if (!product) {
      return <Typography variant="h6">Product not found</Typography>;
    }
  
    return (
      <Container style={{
        height: "100vh",
        marginTop: "122px"
      }}>
        <Box mt={10} mb={2}>
          <Typography variant="h4">{product.name}</Typography>
        </Box>
        <Typography variant="h6">Category: {product.category}</Typography>
        <Typography>Description: {product.description}</Typography>
        <Typography variant="h6">Price: ${product.price}</Typography>
        <Button variant="contained" color="primary" mt={2}>Contact Seller</Button>
      </Container>
    );
  };
  
  export default ProductDetails;