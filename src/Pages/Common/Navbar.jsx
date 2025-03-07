import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      fontWeight={"bolder"}
      borderRadius={"10px"}
      justifyContent={"space-between"}
      color={"blue.600"}
      alignItems={"center"}
      bg={"blue.50"}
      m={4}
      p={4}
    >
      <Heading>🥘Recipe Receptor</Heading>
      <HStack gap={6} fontSize={"xl"}>
        <Link to="/">🏡Home</Link>
        <Link to="/about">About</Link>
      </HStack>
      <Heading>
        <Link to="login">
          <Button bg={"blue.400"}> 👤Login</Button>
        </Link>
      </Heading>
    </Flex>
  );
};

export default Navbar;
