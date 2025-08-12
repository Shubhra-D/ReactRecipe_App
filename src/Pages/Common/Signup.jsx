import React, { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";

export default function SignUpForm() {
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
    console.log("Form Data:", formData);
    // send to backend later
  };

  return (
    <Box
      w="100%"
      maxW="420px"
      mx="auto"
      mt={10}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="blue.100"
    >
      <Heading size="lg" textAlign="center" mb={6}>
        Sign Up
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Box w="100%">
            <Text mb={1} fontWeight="medium">
              Name
            </Text>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Box>

          <Box w="100%">
            <Text mb={1} fontWeight="medium">
              Number
            </Text>
            <Input
              name="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </Box>

          <Box w="100%">
            <Text mb={1} fontWeight="medium">
              Email
            </Text>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>

          <Box w="100%">
            <Text mb={1} fontWeight="medium">
              Password
            </Text>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Box>

          <Button type="submit" colorScheme="teal" w="full">
            Create Account
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
