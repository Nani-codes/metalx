import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { mockUserProfile } from '../data/mockData';

const DashBoard = () => {
  const { boughtItems, soldItems, hiredExperts } = mockUserProfile;

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>User Profile</Typography>

      <Typography variant="h5" mt={4}>Bought Items</Typography>
      <Grid container spacing={3} mt={2}>
        {boughtItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: ${item.price}</Typography>
                <Typography>Purchase Date: {item.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" mt={4}>Sold Items</Typography>
      <Grid container spacing={3} mt={2}>
        {soldItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price: ${item.price}</Typography>
                <Typography>Sold Date: {item.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" mt={4}>Hired Experts</Typography>
      <Grid container spacing={3} mt={2}>
        {hiredExperts.map((expert) => (
          <Grid item xs={12} sm={6} md={4} key={expert.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{expert.name}</Typography>
                <Typography>Expertise: {expert.expertise}</Typography>
                <Typography>Rate: ${expert.rate}/hour</Typography>
                <Typography>Hired Date: {expert.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashBoard;