import React, { useEffect } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";
import Chatting from "../animations/Chatting.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Chatting,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Box
      width="100vw"
      maxHeight="fit-content"
      height="100vh"
      display="flex"
      justifyContent={{ base: "center", md: "center", lg: "space-between" }}
    >
      <Box
        width={{ base: "90vw", md: "70vw" }}
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Box
          display="flex"
          justifyContent="center"
          padding={3}
          bg="white"
          width={{ base: "90vw", md: "40vw" }}
          marginBottom={5}
          borderRadius="lg"
          borderWidth="1px"
          zIndex={5}
        >
          <Text fontSize="4xl" fontFamily="Roboto Slab">
            CHiTTHI
          </Text>
        </Box>
        <Box
          bg="white"
          w={{ base: "90vw", md: "40vw" }}
          p={4}
          borderRadius="lg"
          color="black"
          borderWidth="1px"
        >
          <Tabs variant="soft-rounded" colorScheme="facebook">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
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
      </Box>
      <Box
        position="absolute"
        top="20vh"
        right="3vw"
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <Lottie
          options={defaultOptions}
          width={450}
          height="auto"
          style={{ marginBottom: 15, marginLeft: 0 }}
        />
      </Box>
    </Box>
  );
};

export default Homepage;
