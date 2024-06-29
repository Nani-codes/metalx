import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { mockItems } from "../data/mockData";
import {
  CssBaseline,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockItems.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }
  return (
    <Container style={{ height: "100%", marginTop: "122px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="400"
              image={product.image?.data?.[0]?.attributes?.url}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h4">{product.name}</Typography>
              <Typography variant="h6">Category: {product.category}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={2}>
            <Typography variant="body1">Description:</Typography>
            <Typography variant="body2">{product.description}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">Price:</Typography>
            <Typography variant="h6">${product.price}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">Additional Details:</Typography>
            {product.additionalDetails && (
              <ul>
                {Object.entries(product.additionalDetails).map(
                  ([key, value]) => (
                    <li key={key}>
                      <b>{key}:</b> {value}
                    </li>
                  )
                )}
              </ul>
            )}
          </Box>
          <CardActions sx={{ mt: "auto" }}>
            <Button variant="outlined" href="" color="primary">
              Contact Seller
            </Button>
            <Button variant="contained" href="/Checkout" color="primary">
              Purchase
            </Button>
          </CardActions>
            <br/>
            <Divider />
          <CssBaseline />
          <Box position="relative " mt="20">
           
            <Typography>
              <Typography variant="h5">Hire a Pre-Purchase Inspector for Your Used Machinery</Typography>
            <br/>
              <Button variant="contained" href="/Experts" color="primary">
              Hire Expert
            </Button>
            <br/>

            <br/>
            <Divider/>
              " Save a significant amount of money compared to buying new
              without sacrificing quality. Our platform offers a wide selection
              of used welding machines that have been inspected to ensure they
              meet performance standards. You'll find top brands at a fraction
              of the cost, perfect for tackling your welding projects.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
