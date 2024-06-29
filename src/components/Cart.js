import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { mockCart } from "../data/mockData";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Container
      style={{
        height: "100%",
        marginTop: "122px",
      }}
    >
      <Typography variant="h4" mt={4} mb={2}>
        Shopping Cart
      </Typography>
      <Grid container spacing={3} mt={2}>
        {mockCart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: ${item.price}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
                <Typography>Subtotal: ${item.price * item.quantity}</Typography>
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button variant="contained" color="secondary">
                    Remove
                  </Button>
                  <Button variant="contained" color="primary">
                    Update Quantity
                  </Button>
                </Box>
                <br />
                <Chip
                  label={item.status}
                  color={item.status === "In Stock" ? "success" : "error"}
                  mt={2}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="flex-end">
        <Typography variant="h6">
          Total: $
          {mockCart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </Typography>
        <br/>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/checkout"
          ml={2}
        >
          Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
