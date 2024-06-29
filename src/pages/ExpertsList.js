import React, { useState, useMemo } from "react";
import {
  Avatar,
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
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { mockExperts } from "../data/mockData"; // Import the mock data
import CustomPagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const ExpertsList = () => {
  const [category, setCategory] = useState("");
  const [minRate, setMinRate] = useState("");
  const [maxRate, setMaxRate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(""); // Add a state for the sort by filter
  const itemsPerPage = 6;

  const filteredExperts = useMemo(() => {
    let filteredExperts = mockExperts.filter((expert) => {
      const nameMatch = expert.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const expertiseMatch = expert.expertise
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryFilter = category === "" || expert.expertise === category;
      const minRateMatch = minRate === "" || expert.rate >= parseFloat(minRate);
      const maxRateMatch = maxRate === "" || expert.rate <= parseFloat(maxRate);
      return (
        (nameMatch || expertiseMatch) &&
        categoryFilter &&
        minRateMatch &&
        maxRateMatch
      );
    });

    // Apply the sort by filter
    if (sortBy === "lowToHigh") {
      filteredExperts = filteredExperts.sort((a, b) => a.rate - b.rate);
    } else if (sortBy === "highToLow") {
      filteredExperts = filteredExperts.sort((a, b) => b.rate - a.rate);
    }

    return filteredExperts;
  }, [searchTerm, category, minRate, maxRate, sortBy]);

  const pageCount = Math.ceil(filteredExperts.length / itemsPerPage);
  const displayedExperts = filteredExperts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/experts/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Container>
      <Box mt={10} mb={2}>
        <Typography variant="h4">Machine Experts and Operators</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register-expert"
        >
          Register as Expert
        </Button>
      </Box>
      <TextField
        label="Search Experts"
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
            label="Min Rate"
            variant="outlined"
            fullWidth
            value={minRate}
            onChange={(e) => setMinRate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Max Rate"
            variant="outlined"
            fullWidth
            value={maxRate}
            onChange={(e) => setMaxRate(e.target.value)}
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
            <MenuItem value="lowToHigh">Rate: Low to High</MenuItem>
            <MenuItem value="highToLow">Rate: High to Low</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {displayedExperts.map((expert) => (
          <Grid item xs={12} sm={6} md={4} key={expert.id}>
            <Card>
              <CardContent>
                <Avatar
                  sx={{ bgcolor: "black"}}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                >
                  {expert.name[0]}
                </Avatar>
                <Typography variant="h5">{expert.name}</Typography>
                <Typography>Expertise: {expert.expertise}</Typography>
                <Typography>Experience: {expert.experience}</Typography>
                <Typography>Rate: ${expert.rate}/hour</Typography>
                <Typography>Location: {expert.location}</Typography>
                <Typography>Availability: {expert.availability}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleViewDetails(expert.id)}
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
        style={{ marginTop: 20 }}
      />
    </Container>
  );
};

export default ExpertsList;
