import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import AboutP from "../assets/about.jpeg";

const About = () => {
  return (
    <Box maxW="800px" mx="auto" p={6} textAlign="center">
      <Image
        src={AboutP}
        alt="Cooking Image"
        borderRadius="2xl"
        mb={4}
        p={"10px"}
        width={"90%"}
        height={"400px"}
      />
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="blue.500">
          About Our Recipe Website
        </Heading>
        <Text fontSize="lg" color={"whiteAlpha.800"}>
          Welcome to our **Recipe Hub**, your go-to destination for discovering
          delicious recipes from around the world. Whether you're a home cook or
          a professional chef, we have something for everyone!
        </Text>
        <Text fontSize="md" color={"whiteAlpha.800"}>
          Our platform allows you to explore a variety of dishes, search for
          your favorite meals, and even filter recipes based on different
          categories. We aim to make cooking easy, fun, and accessible for
          everyone.
        </Text>
        <Text fontSize="md" fontWeight="bold" color="blue.600">
          "Cooking is an art, and every meal is a masterpiece!"
        </Text>
      </VStack>
      <Stack textAlign="center" m={6} p={2} color="gray.600" spacing={2}>
        <Flex align="center" justify="center" gap={2} flexWrap="wrap">
          <Text>Made with love</Text>
          <FaHeart color="purple" />
          <Text>
            and care by <strong>Frontend Developer Shubhra Dwivedi</strong> and{" "}
            <strong>Backend Developer Bhavya</strong>
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500">
          Can Suggest &copy; March 2025
        </Text>
      </Stack>
    </Box>
  );
};

export default About;
