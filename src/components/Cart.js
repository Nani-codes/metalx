import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { mockCart } from '../data/mockData';

const Cart = () => {
  return (
    <Container style={{
      height: "100vh",
      marginTop: "122px"
    }}>
      <Typography variant="h4" mt={4} mb={2}>Shopping Cart</Typography>
      <Grid container spacing={3} mt={2}>
        {mockCart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: ${item.price}</Typography>
                <Button variant="contained" color="secondary" mt={2}>Remove</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;
