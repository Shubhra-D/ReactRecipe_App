import { Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PiChefHatDuotone } from "react-icons/pi";
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
      <Flex>
      <PiChefHatDuotone fontSize={'2xl'}/>
      <Text fontWeight={'bold'} fontSize={'3xl'}>Recipe Receptor</Text>
      </Flex>
      <HStack gap={6} fontSize={"large"}>
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
