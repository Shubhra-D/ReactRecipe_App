import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const handleLogin = ()=>{
  if(!name||!email||!password){
    setError("All Fields are Requird")
    return;
  }
  setError(null)
  localStorage.setItem("user",JSON.stringify({name,email}))
  console.log(name,email);
  alert(`${name}! logged in Successfully `)
  navigate("/")
}

  return (
    <Container centerContent>
      <Box>
        <Text fontSize={'2xl'} color={"blue.600"} fontWeight={'bold'} textAlign={"center"}>Login</Text>
        <VStack>
          <Input
            placeholder="Name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            bg={"blue.200"}
            border={'none'}
            color={'blue.500'}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg={"blue.200"}
            border={'none'}
            color={'blue.500'}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg={"blue.200"}
            border={'none'}
            color={'blue.500'}
          />
          {error && <Text color={"red"}>{error}</Text>}
          <Button onClick={handleLogin} bg={"blue.600"} color={'whiteAlpha.900'}>
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
