import React, { useState, useMemo } from 'react';
import { Container, Grid, TextField, Button, MenuItem, Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {mockAuctions } from '../data/mockData'; // Import the mock auctions

const AuctionItems = () => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredAuctions = useMemo(() => {
    return mockAuctions.filter(auction => {
      const categoryMatch = category === '' || auction.category === category;
      const minPriceMatch = minPrice === '' || auction.startingPrice >= parseFloat(minPrice);
      const maxPriceMatch = maxPrice === '' || auction.startingPrice <= parseFloat(maxPrice);
      return categoryMatch && minPriceMatch && maxPriceMatch;
    });
  }, [category, minPrice, maxPrice]);

  return (
    <Container>
      <Box mt={4} mb={2}>
        <Typography variant="h4">Auction Items</Typography>
      </Box>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Machinery">Machinery</MenuItem>
            <MenuItem value="Tools">Tools</MenuItem>
            {/* Add more categories as needed */}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Min Price"
            variant="outlined"
            fullWidth
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Max Price"
            variant="outlined"
            fullWidth
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredAuctions.map((auction) => (
          <Grid item xs={12} sm={6} md={4} key={auction.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{auction.name}</Typography>
                <Typography>{auction.description}</Typography>
                <Typography variant="h6">Starting Price: ${auction.startingPrice}</Typography>
                <Typography variant="h6">Highest Bid: ${auction.highestBid}</Typography>
                <Button variant="contained" color="primary" component={Link} to={`/auction/${auction.id}`}>
                  Bid Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AuctionItems;
