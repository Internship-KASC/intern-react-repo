import React from 'react'
import './App.css';
import { Container, Box, Text, Tabs, TabPanel, TabPanels, TabList, Tab } from "@chakra-ui/react";
import Login from './components/Authencation/Login';
import Signup from './components/Authencation/Signup';
const Homepage = () => {
    return (
        <Container maxW='x1' centerContent>
            <Box
                d='flex'
                p={3}
                bg={"white"}
                w="60%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                textAlign="center"

            >
                <Text
                    fontSize="4x1"
                    fontFamily="work sans"
                    color="black"
                >
                    Talk-A-Tive
                </Text>
            </Box>
            <Box
                bg="white"
                w="50%"
                p={4}
                borderRadius="lg"
                borderWidth="1px"
            >
                <Tabs variant='soft-rounded' >
                    < TabList mb="1em">
                        <Tab Width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container >
    )
}

export default Homepage