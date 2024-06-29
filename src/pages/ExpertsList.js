import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardContent, Button, TextField, Box } from '@mui/material';
import { mockExperts } from '../data/mockData';
import { Link } from 'react-router-dom';

const ExpertsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredExperts = mockExperts.filter((expert) =>
    expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expert.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (id) => {
    navigate(`/experts/${id}`);
  };

  return (
    <Container style={{
      height: "100vh",
      marginTop: "122px"
    }}>
      <Box mb={2}>
        <Typography variant="h4">Machine Experts and Operators</Typography>
        <Button variant="contained" color="primary" component={Link} to="/register-expert">Register as Expert</Button>
      </Box>
      <TextField
        label="Search Experts"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={3} mt={2}>
        {filteredExperts.map((expert) => (
          <Grid item xs={12} sm={6} md={4} key={expert.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{expert.name}</Typography>
                <Typography>Expertise: {expert.expertise}</Typography>
                <Typography>Experience: {expert.experience}</Typography>
                <Typography>Rate: ${expert.rate}/hour</Typography>
                <Button variant="contained" color="primary" onClick={() => handleViewDetails(expert.id)}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExpertsList;
