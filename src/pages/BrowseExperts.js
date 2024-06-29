import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import {mockExperts} from '../data/mockData';

const BrowseExperts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    // Simulate API call with JSON data
    setExperts(mockExperts);
  }, []);

  return (
    <Container style={{
      height: "100%",
      marginTop: "122px",
    }}>
      <Grid container  spacing={4}>
        {experts.map((expert) => (
          <Grid item key={expert.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{expert.name}</Typography>
                <Typography>Specialty: {expert.specialty}</Typography>
                <Typography>Experience: {expert.experience}</Typography>
                <Typography>Contact: {expert.contact}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BrowseExperts;
