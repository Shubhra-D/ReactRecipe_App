import { useAuth } from "../../Context/AuthProvider"
import { Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PiChefHatDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const {user,logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    logout();
    navigate('/')
  }
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
        {user ? (
          <>
           <Text as={'span'} marginRight={3}>👋{user.name}!</Text>
           <Button bg={'blue.400'} onClick={handleLogout}>Logout</Button>
          </>
        ):(
          <Link to={'/login'}>
            <Button bg={'blue.400'}>👤Login</Button>
          </Link>
        )}
      </Heading>
    </Flex>
  );
};

export default Navbar;
