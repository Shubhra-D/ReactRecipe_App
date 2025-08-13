import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgPic from "../../assets/formbg.png";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError(null);
    localStorage.setItem("user", JSON.stringify({ name, email }));
    alert(`${name}! Logged in successfully`);
    navigate("/");
  };

  return (
    <Flex minH="100vh">
      {/* Left side with form */}
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="420px">
          <Box
            p={6}
            borderRadius="lg"
            bg="rgba(255,255,255,0.05)"
            boxShadow="lg"
          >
            <Text
              fontSize="2xl"
              color="white"
              fontWeight="bold"
              textAlign="center"
              mb={6}
            >
              Login
            </Text>

            <VStack spacing={4}>
              <Box w={'100%'}>
                <Text mb={1} fontWeight="medium" color="gray.200">
                Name
              </Text>
              <Input
                name="name"
                value={name}
                onChange={()=>setName(e.target.value)}
                bg="rgba(255,255,255,0.1)"
                border="none"
                color="white"
                _placeholder={{ color: "gray.400" }}
                placeholder="Enter your name"
                required
              />
              </Box>
              <Box w={'100%'}>
                <Text mb={1} fontWeight="medium" color="gray.200">
                Email
              </Text>
                <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="rgba(255,255,255,0.1)"
                border="none"
                color="white"
                _placeholder={{ color: "gray.400" }}
              />
              </Box>

              <Box w={'100%'}>
                <Text mb={1} fontWeight="medium" color="gray.200">
                Password
              </Text>
                <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="rgba(255,255,255,0.1)"
                border="none"
                color="white"
                _placeholder={{ color: "gray.400" }}
              />
              </Box>
              

              {error && <Text color="red.500">{error}</Text>}

              <Button
                onClick={handleLogin}
                w="full"
                borderRadius="full"
                mt={2}
              >
                Login
              </Button>
            </VStack>

            {/* OR Divider */}
            <HStack my={6}>
              <Box flex={"1"} h={"2px"} bg={"gray.400"} />
              <Text fontSize="sm" color="gray.400">
                or
              </Text>
              <Box flex={"1"} h={"2px"} bg={"gray.400"} />
            </HStack>

            {/* Signup */}
            <Text textAlign="center" fontSize="sm" color={"gray.400"}>
              Don't have an account?{" "}
              <Link to="/signup" fontWeight="medium">
                SignUp
              </Link>
            </Text>
          </Box>
        </Container>
      </Box>

      {/* Right side with image */}
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
};

export default Login;
