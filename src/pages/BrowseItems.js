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
import { mockItems } from "../data/mockData"; // Import the mock data
import CustomPagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const BrowseItems = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems = useMemo(() => {
    return mockItems.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryFilter = category === "" || item.category === category;
      const minPriceMatch = minPrice === "" || item.price >= parseFloat(minPrice);
      const maxPriceMatch = maxPrice === "" || item.price <= parseFloat(maxPrice);
      return (nameMatch || categoryMatch) && categoryFilter && minPriceMatch && maxPriceMatch;
    });
  }, [searchTerm, category, minPrice, maxPrice]);

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Box mt={4} mb={2}>
        <Typography variant="h4">Browse Items</Typography>
      </Box>
      <TextField
        label="Search Items"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
                <Typography variant="h6">${item.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/product/${item.id}`}
                >
                  View Details
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