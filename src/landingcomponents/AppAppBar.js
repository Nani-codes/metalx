import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { Link } from "react-router-dom";
import FactoryIcon from "@mui/icons-material/Factory";

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "11px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <PrecisionManufacturingIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                color: "black",
                fontSize: 50,
              }}
            />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 5,
                display: { xs: "none", md: "flex" },
                fontFamily: "aial",
                fontWeight: "bolder",
                letterSpacing: ".2rem",
                color: "secondary",
                textDecoration: "none",
              }}
            >
              MetalX
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  component={Link}
                  to="Buy"
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    component={Link}
                    to="Buy"
                    sx={{ textDecoration: "none" }}
                    variant="body2"
                    color="text.primary"
                  >
                    Buy
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    component={Link}
                    to="Sell"
                    sx={{ textDecoration: "none" }}
                    variant="body2"
                    color="text.primary"
                  >
                    Sell
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("highlights")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    component={Link}
                    to="Auction"
                    sx={{ textDecoration: "none" }}
                    variant="body2"
                    color="text.primary"
                  >
                    Auctions
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("pricing")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    component={Link}
                    to="Experts"
                    sx={{ textDecoration: "none" }}
                    variant="body2"
                    color="text.primary"
                  >
                    Experts
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <MenuItem
                onClick={() => scrollToSection("pricing")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  component={Link}
                  to="Profile"
                  sx={{ textDecoration: "none" }}
                  variant="body2"
                  color="text.primary"
                >
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("pricing")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  component={Link}
                  to="Dashboard"
                  sx={{ textDecoration: "none" }}
                  variant="body2"
                  color="text.primary"
                >
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("pricing")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  component={Link}
                  to="cart"
                  sx={{ textDecoration: "none" }}
                  variant="body2"
                  color="text.primary"
                >
                  Cart
                </Typography>
              </MenuItem>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/login"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/signup"
              >
                Sign up
              </Button>
            </Box>
            <Box
              display="flex"
              width="100%"
              sx={{
                display: {
                  md: "none",
                  display: "flex",
                  justifyContent: "space-between",
                },
              }}
            >
              <FactoryIcon
                sx={{
                  display: { xs: "", md: "flex" },
                  mr: 2,
                  color: "black",
                  fontSize: 50,
                }}
              />
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  display: { xs: "", md: "flex" },
                  fontFamily: "aial",
                  fontWeight: "bolder",
                  letterSpacing: ".2rem",
                  color: "secondary",
                  textDecoration: "none",
                }}
              >
                MetalX
              </Typography>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <MenuItem component={Link} to="Buy">
                    Buy
                  </MenuItem>
                  <MenuItem component={Link} to="Sell">
                    Sell
                  </MenuItem>
                  <MenuItem component={Link} to="Auction">
                    Auction
                  </MenuItem>
                  <MenuItem component={Link} to="Experts">
                    Experts
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    color="secondary"
                    variant="text"
                    component={Link}
                    to="Profile"
                  >
                    <Typography color="secondary">Profile</Typography>
                  </MenuItem>
                  <MenuItem color="secondary" component={Link} to="Dashboard">
                    <Typography color="secondary">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem color="secondary" component={Link} to="cart">
                    <Typography color="secondary">Cart</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/login"
                      target=""
                      sx={{ width: "100%" }}
                    >
                      Sign In
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/signup"
                      target=""
                      sx={{ width: "100%" }}
                    >
                      Sign Up
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
