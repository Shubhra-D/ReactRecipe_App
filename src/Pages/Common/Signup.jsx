import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";
import bgPic from "../../assets/formbg.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

export default function Signup() {
  const {signup} = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup({
      name:formData.name,
      email:formData.email,
      phone:formData.phone,
      password:formData.password
    });
    if(result.success){
      alert("SignUp Successful !");
      navigate("/mood");
    }else{
      alert(result.message);
    }
  };

  return (
    <Flex h="100vh">
      {/* Left side image */}
      <Flex
        flex="1"
        align="center"
        justify="center"
        bg="rgba(0, 0, 0, 0.85)"
        backdropFilter="blur(10px)"
      >
        <Box
          w="100%"
          maxW="420px"
          p={8}
          borderRadius="xl"
          bg="rgba(255,255,255,0.05)"
          boxShadow="lg"
        >
          <Heading size="lg" textAlign="center" mb={6} color="white">
            Sign Up
          </Heading>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Box w="100%">
                <Text mb={1} fontWeight="medium" color="gray.200">
                  Name
                </Text>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  placeholder="Enter your name"
                  required
                />
              </Box>

              <Box w="100%">
                <Text mb={1} fontWeight="medium" color="gray.200">
                  Phone
                </Text>
                <Input
                  name="number"
                  type="tel"
                  value={formData.number}
                  onChange={handleChange}
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  placeholder="Enter your number"
                  required
                />
              </Box>

              <Box w="100%">
                <Text mb={1} fontWeight="medium" color="gray.200">
                  Email
                </Text>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  placeholder="Enter your email"
                  required
                />
              </Box>

              <Box w="100%">
                <Text mb={1} fontWeight="medium" color="gray.200">
                  Password
                </Text>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  placeholder="Enter your password"
                  required
                />
              </Box>

              <Button
                type="submit"
                colorScheme="teal"
                w="full"
                borderRadius="full"
                mt={2}
              >
                Create Account
              </Button>
            </VStack>
          </form>
          {/* or login  */}
          <HStack my={6}>
            <Box flex={"1"} h={"2px"} bg={"gray.400"} />
            <Text fontSize="sm" color="gray.400">
              or
            </Text>
            <Box flex={"1"} h={"2px"} bg={"gray.400"} />
          </HStack>
          <Text textAlign="center" fontSize="sm" color={'gray.400'}>
            Already have an account?{" "}
            <Link to="/login" fontWeight="medium">
              Login
            </Link>
          </Text>
        </Box>
      </Flex>

      {/* Right side Pic */}

      <Box
        flex="1"
        h={"100vh"}
        bgImage={`url(${bgPic})`}
        bgSize="cover"
        ml={4}
        bgPosition="50% 50%"
        bgRepeat={"no-repeat"}
      />
    </Flex>
  );
}
