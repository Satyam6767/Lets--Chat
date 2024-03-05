import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={3}
        bg="transparent"
        w="100vw"
      // m="40px 0 15px 0"
      >
        <Text
          fontSize="4xl"
          fontFamily="cursive"
          fontWeight="bold" color="gold"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
          Let's-Chat
        </Text>
      </Box>
      <Box
  bg="white"
  w="100%"
  p={4}
  borderRadius="xl"
  borderWidth="2px"
  borderColor="gold"
  boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
>
  <Tabs isFitted variant="enclosed-colored" colorScheme="teal">
    <TabList mb="1em">
      <Tab _selected={{ color: "white", bg: "teal.500" }}>Login</Tab>
      <Tab _selected={{ color: "white", bg: "teal.500" }}>Sign Up</Tab>
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


    </Container>
  );
}

export default Homepage;