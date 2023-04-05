import React, { useState } from "react";
import { Box, Container, Typography, styled, Tabs, Tab } from "@mui/material";
import { HandshakeTwoTone } from "@mui/icons-material";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Header from "../navbar-mui/Header";
import Footer from "../Footer/Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginSignup = () => {
  const FormMainContainer = styled(Container)({
    height: "100vh",
    marginTop: "12vh",
  });

  const SignupBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  });

  const SignupHeading = styled(Typography)({
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: 15,
    marginBottom: 15,
  });

  const TabSelectBox = styled(Box)({
    background: "white",
    borderRadius: 10,
    padding: 4,
    width: "100%",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  });

  const HeadingTab = styled(Tabs)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  });

  const OptionTab = styled(Tab)({
    textDecoration: "none",
    borderRadius: 10,
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <FormMainContainer maxWidth='sm'>
        <SignupBox>
          <SignupHeading>
            <HandshakeTwoTone /> MyQuote's
          </SignupHeading>
        </SignupBox>
        <TabSelectBox>
          <HeadingTab
            size='lg'
            value={value}
            onChange={handleChange}
            textColor='secondary'
            variant='fullWidth'
            indicatorColor='secondary'
            component={Box}
            centered
            aria-label='secondary tabs example'
          >
            <OptionTab label='Sign - in' {...a11yProps(0)} />
            <OptionTab label='Register' {...a11yProps(1)} />
          </HeadingTab>
        </TabSelectBox>
        <TabSelectBox>
          <TabPanel size='xl' value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup />
          </TabPanel>
        </TabSelectBox>
      </FormMainContainer>
      <Footer />
    </>
  );
};

export default LoginSignup;
