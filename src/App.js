import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BrowseItems from './pages/BrowseItems';
import ListItem from './pages/ListItem';
import AuctionItems from './pages/AuctionItems';
import RegisterExpert from './pages/RegisterExpert';
import BrowseExperts from './pages/BrowseExperts';
import UserProfile from './pages/UserProfile';
import Sell from './pages/Sell';
import ProductDetails from './pages/ProductDetails'; 
import AuctionDetails from './pages/AuctionDetails';
import ExpertsList from './pages/ExpertsList';
import ExpertDetails from './pages/ExpertDetails';
import Footer from './components/Footer';
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';
// import TableFooter from '@mui/material/TableFooter';


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/Home" element={<Home />} />        
        <Route path="/Sell" element={<Sell />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Buy" element={<BrowseItems />} />
        <Route path="/list-item" element={<ListItem />} />
        <Route path="/auction" element={<AuctionItems />} />
        <Route path="/register-expert" element={<RegisterExpert />} />
        <Route path="/experts" element={<ExpertsList />} />
        <Route path="/experts/:id" element={<ExpertDetails />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/auction/:id" element={<AuctionDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
