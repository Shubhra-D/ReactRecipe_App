import { useAuth } from "../../Context/AuthProvider";
import {
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerPositioner,
  DrawerRoot,
  Flex,
  IconButton,
  Portal,
  VStack,
  Text,
  DrawerHeader,
  DrawerTitle,
  DrawerCloseTrigger,
  CloseButton,
  DrawerTrigger,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PiChefHatDuotone} from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Flex
      zIndex={1000}
      fontWeight={"bolder"}
      borderRadius={"10px"}
      justifyContent={"space-between"}
      color={"blue.600"}
      alignItems={"center"}
      marginTop={1}
      bg={"blue.50"}
      p={4}
    >
      <Flex alignItems={"center"}>
        <PiChefHatDuotone fontSize={"2xl"} />
        <Text fontWeight={"bold"} fontSize={{base:"xl",md:"3xl"}} ml={2}>
          Recipe Receptor
        </Text>
      </Flex>

      <Flex
        gap={6}
        fontSize={"large"}
        alignItems={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <Link to="/">🏡Home</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            <Text as={"span"} marginRight={3}>
              👋{user.name}!
            </Text>
            <Button bg={"blue.400"} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Link to={"/login"}>
            <Button bg={"blue.400"}>👤Login</Button>
          </Link>
        )}
      </Flex>
      {/* Mobile view hamburger*/}
      
      {/* Monile Drawer */}
      <DrawerRoot
        open={open}
        onOpenChange={(e) => setIsOpen(e.open)}
        placement={"left"}
      >
        <DrawerTrigger asChild  aria-label="Open Menu" marginLeft={6} display={{ base: "flex", md: "none" }}  fontSize={"larger"}>
            <FiMenu/>
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner>
            <DrawerContent>
              <DrawerHeader>
                <Flex justifyContent={'space-between'}>
                <DrawerTitle color={"blue.400"}>Menu</DrawerTitle>
                <DrawerCloseTrigger asChild pos={'initial'}>
                    <CloseButton placement/>
                </DrawerCloseTrigger>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} mt={3} p={4}  align="start" fontWeight="bold" color="blue.400">
                  <Link to="/" >👉 🏡Home</Link>
                  <Link to="/about">👉 About</Link>
                  {user ? (
                    <>
                      <Text as="span">👋{user.name}!</Text>
                      <Button bg="blue.400" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link to="/login">
                      <Button bg="blue.400">👤Login</Button>
                    </Link>
                  )}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </Flex>
  );
};

export default Navbar;
