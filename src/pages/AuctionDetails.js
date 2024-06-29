import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Divider,
  Grid,
  CardMedia,
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { mockAuctions } from "../data/mockData"; // Import the mock auctions

const AuctionDetails = () => {
  const { id } = useParams();
  const auction = mockAuctions.find((item) => item.id === parseInt(id, 10));
  const [bid, setBid] = useState("");

  if (!auction) {
    return <Typography variant="h6">Auction item not found</Typography>;
  }

  const handleBidSubmit = () => {
    if (parseFloat(bid) > auction.highestBid) {
      auction.highestBid = parseFloat(bid);
      alert(`Your bid of $${bid} has been placed successfully!`);
    } else {
      alert("Your bid must be higher than the current highest bid.");
    }
  };

  return (
    <Container
      style={{
        height: "100%",
        marginTop: "122px",
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={auction.image?.data?.[0]?.attributes?.url}
        alt={auction.name}
      />
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Box mt={10} mb={2}>
            <Typography variant="h4">{auction.name}</Typography>
          </Box>
          <Typography variant="h6">Category: {auction.category}</Typography>
          <Typography>Description: {auction.description}</Typography>
          <Typography variant="h6">
            Starting Price: ${auction.startingPrice}
          </Typography>
          <Typography variant="h6">
            Current Highest Bid: ${auction.highestBid}
          </Typography>
          <Typography variant="h6">Auction Ends: 01/07/2024</Typography>
          <Typography variant="h6">Seller: Nagaraju Traders</Typography>
          <Typography variant="h6">Location: Hyderabad</Typography>
        </Grid>
        <Grid item mt={10} xs={6} md={4}>
          <Typography>
            <Typography variant="h5">
              Hire a Pre-Purchase Inspector for Your Used Machinery
            </Typography>
            <Button variant="contained" href="/Experts" color="primary">
              Hire Expert
            </Button>
            <Divider />" Save a significant amount of money compared to buying
            new without sacrificing quality. Our platform offers a wide
            selection of used welding machines that have been inspected to
            ensure they meet performance standards. You'll find top brands at a
            fraction of the cost, perfect for tackling your welding projects.
          </Typography>
        </Grid>
      </Grid>

      <Box mt={2} mb={2}></Box>
      <Box mt={2} mb={2}>
        <TextField
          label="Your Bid"
          variant="outlined"
          fullWidth
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleBidSubmit}>
        Place Bid
      </Button>
    </Container>
  );
};

export default AuctionDetails;
