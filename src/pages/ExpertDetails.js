import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { mockExperts } from '../data/mockData';

const ExpertDetails = () => {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);

  useEffect(() => {
    const expertItem = mockExperts.find((item) => item.id === parseInt(id, 10));
    if (expertItem) {
      setExpert(expertItem);
    } else {
      console.error(`Expert with ID ${id} not found.`);
    }
  }, [id]);

  if (!expert) {
    return <Typography variant="h6">Expert not found</Typography>;
  }

  return (
    <Container style={{
      height: "100vh",
      marginTop: "122px"
    }}>
      <Box mt={4} mb={2}>
        <Typography variant="h4">{expert.name}</Typography>
      </Box>
      <Typography variant="h6">Expertise: {expert.expertise}</Typography>
      <Typography>Experience: {expert.experience}</Typography>
      <Typography>Rate: ${expert.rate}/hour</Typography>
      <Typography>Description: {expert.description}</Typography>
    </Container>
  );
};

export default ExpertDetails;
