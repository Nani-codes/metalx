import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Industrial Marketplace
        </Typography>
        <Button color="inherit" component={Link} to="/Home">Home</Button>
        <Button color="inherit" component={Link} to="/browse-items">Buy</Button>
        <Button color="inherit" component={Link} to="/sell">Sell</Button>
        <Button color="inherit" component={Link} to="/auctions">auction</Button>
        <Button color="inherit" component={Link} to="/experts">Experts</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
