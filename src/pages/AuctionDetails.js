import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import {mockAuctions} from '../data/mockData'; // Import the mock auctions

const AuctionDetails = () => {
  const { id } = useParams();
  const auction = mockAuctions.find((item) => item.id === parseInt(id, 10));
  const [bid, setBid] = useState('');

  if (!auction) {
    return <Typography variant="h6">Auction item not found</Typography>;
  }

  const handleBidSubmit = () => {
    if (parseFloat(bid) > auction.highestBid) {
      auction.highestBid = parseFloat(bid);
      alert(`Your bid of $${bid} has been placed successfully!`);
    } else {
      alert('Your bid must be higher than the current highest bid.');
    }
  };

  return (
    <Container>
      <Box mt={4} mb={2}>
        <Typography variant="h4">{auction.name}</Typography>
      </Box>
      <Typography variant="h6">Category: {auction.category}</Typography>
      <Typography>Description: {auction.description}</Typography>
      <Typography variant="h6">Starting Price: ${auction.startingPrice}</Typography>
      <Typography variant="h6">Current Highest Bid: ${auction.highestBid}</Typography>
      <Box mt={2} mb={2}>
        <TextField
          label="Your Bid"
          variant="outlined"
          fullWidth
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleBidSubmit}>Place Bid</Button>
    </Container>
  );
};

export default AuctionDetails;
