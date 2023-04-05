import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Button,
  CssBaseline,
} from "@mui/material";
import { HandshakeTwoTone, Menu as MenuIcon } from "@mui/icons-material";
import { navItems } from "./navItems";
import { Link } from "react-router-dom";
import {
  StyledToolbar,
  LoginButton,
  LoginBox,
  LogoBox,
  MenuBox,
} from "./NavbarStyles";

const Header = (props) => {
  const drawerWidth = "50vw";
  const drawerHeight = "48.2vh";

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "#5d4037", color: "white" }}
    >
      <Typography variant='h6' sx={{ my: 2 }}>
        <HandshakeTwoTone />
        MyQuotes
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item.url}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // styles using styled components

  return (
    <>
      <CssBaseline />
      <AppBar component='nav' position='sticky'>
        <StyledToolbar>
          <LogoBox>
            <HandshakeTwoTone />

            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "1.75rem",
              }}
            >
              MyQuotes
            </Typography>
          </LogoBox>
          <MenuBox
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            {navItems.map((item, index) => {
              return (
                <Button
                  component={Link}
                  key={index}
                  to={item.url}
                  sx={{ color: "#DBE4C6", ":hover": "" }}
                >
                  {item.title}
                </Button>
              );
            })}
          </MenuBox>
          <LoginBox>
            <LoginButton component={Link} to='/LoginSignup' variant='contained'>
              Login
            </LoginButton>
            <MenuIcon
              onClick={handleDrawerToggle}
              sx={{
                fontSize: "2rem",
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            />
          </LoginBox>
        </StyledToolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
