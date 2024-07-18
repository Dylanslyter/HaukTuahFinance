import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  function logout() {}
  return (
    <Box as="nav" p="4" bg="teal.500" color="white" boxShadow="md">
      <Flex align="center">
        <Heading as="h1" size="lg" fontFamily="'Pacifico', cursive" color="white">
          Finance Frenzy
        </Heading>
        <Spacer />
        <Flex>
          <Button
            as={Link}
            to="/"
            variant="solid"
            mr="4"
            bg="white"
            color="black"
            _hover={{ bg: "purple.400", color: "white" }}
          >
            Home
          </Button>
          <Button
            as={Link}
            to=""
            variant="solid"
            bg="white"
            color="black"
            _hover={{ bg: "purple.400", color: "white" }}
          >
            Donate
          </Button>
          <Button
            as={Link}
            onclick ={logout}
            ml="4"
            variant="solid"
            bg="white"
            color="black"
            _hover={{ bg: "purple.400", color: "white" }}
          >
            Log Out
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;



