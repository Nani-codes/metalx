import React, { useState, useMemo } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { mockAuctions } from "../data/mockData"; // Import the mock data
import CustomPagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const BrowseItems = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(""); // Add a state for the sort by filter
  const itemsPerPage = 6;

  const filteredItems = useMemo(() => {
    let filteredItems = mockAuctions.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch = item.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryFilter = category === "" || item.category === category;
      const minPriceMatch =
        minPrice === "" || item.startingPrice >= parseFloat(minPrice);
      const maxPriceMatch =
        maxPrice === "" || item.highestBid <= parseFloat(maxPrice);
      return (
        (nameMatch || categoryMatch) &&
        categoryFilter &&
        minPriceMatch &&
        maxPriceMatch
      );
    });

    // Apply the sort by filter
    if (sortBy === "lowToHigh") {
      filteredItems = filteredItems.sort(
        (a, b) => a.startingPrice - b.startingPrice
      );
    } else if (sortBy === "highToLow") {
      filteredItems = filteredItems.sort((a, b) => b.highestBid - a.highestBid);
    }

    return filteredItems;
  }, [searchTerm, category, minPrice, maxPrice, sortBy]);

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/auction/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Container
      style={{
        height: "100%",
        marginTop: "122px",
      }}
    >
      <Box mt={10} mb={2}>
        <Typography variant="h4">Browse Items</Typography>
      </Box>
      <TextField
        label="Search Items"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container mt={2} spacing={2} mb={4}>
        <Grid item xs={4} sm={0}>
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
        <Grid item xs={12} sm={4}>
          <TextField
            label="Sort by"
            variant="outlined"
            fullWidth
            select
            value={sortBy}
            onChange={handleSortByChange}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="lowToHigh">Starting Price: Low to High</MenuItem>
            <MenuItem value="highToLow">Highest Bid: High to Low</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {displayedItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image.data[0].attributes.url}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography>{item.description}</Typography>
                <Typography variant="h6">
                  Starting Price: ${item.startingPrice}
                </Typography>
                <Typography variant="h6">
                  Highest Bid: ${item.highestBid}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/auction/${item.id}`}
                >
                  Bid Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CustomPagination
        count={pageCount}
        page={page}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default BrowseItems;
