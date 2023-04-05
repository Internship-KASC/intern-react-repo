import React from "react";
import {
  Grid,
  styled,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { HandshakeTwoTone, LinkSharp, PersonPin } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { QuickLinks, FooterContact, SocialIcon } from "./FooterData";

const Footer = () => {
  const FooterTitle = styled(Typography)({
    marginBottom: "1em",
    marginTop: "1.5em",
    textAlign: "center",
    alignContent: "center",
    fontSize: "1.75rem",
  });

  const getCurrentFullYear = () => {
    return new Date().getFullYear();
  };

  const ListIcon = styled(ListItemIcon)({
    color: "white",
  });

  const AboutContent = styled(Typography)({
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  });

  const CopyTypography = styled(Typography)({
    marginBottom: "1rem",
    marginTop: "1rem",
    fontSize: "1rem",
    textAlign: "center",
    alignContent: "center",
  });

  const FooterMainBox = styled(Box)({
    background: "#5d4037",
    color: "#DBE4C6",
  });

  const FooterTitleBox = styled(Box)({
    alignItems: "center",
  });

  return (
    <FooterMainBox>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FooterTitleBox>
            <FooterTitle variant='h5'>
              <HandshakeTwoTone /> MyQuotes
            </FooterTitle>
            <Divider />
            <AboutContent>
              We are an excellent platform for clients to get all their services
              at the doorstep in affordable price
            </AboutContent>
          </FooterTitleBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FooterTitleBox>
            <FooterTitle variant='h5'>
              <LinkSharp sx={{ transform: "rotate(130deg)" }} /> Quick Links
            </FooterTitle>
            <Divider />
            <List>
              {QuickLinks.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    component={Link}
                    to={item.url}
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      sx={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      {item.title}{" "}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </FooterTitleBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FooterTitleBox>
            <FooterTitle variant='h5'>
              <PersonPin /> Contact
            </FooterTitle>
            <Divider />
            <List>
              {FooterContact.map((item, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.url}
                      sx={{ textAlign: "center" }}
                    >
                      <ListIcon>{item.icon}</ListIcon>
                      <ListItemText>{item.title}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </FooterTitleBox>
        </Grid>
      </Grid>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CopyTypography>
          &#169; {getCurrentFullYear()} MyQuote's Inc. All Rights Reserved.
        </CopyTypography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {SocialIcon.map((item, index) => {
            return (
              <ListItem key={index} component={Link} to={item.url}>
                <ListIcon>{item.icon}</ListIcon>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </FooterMainBox>
  );
};

export default Footer;
