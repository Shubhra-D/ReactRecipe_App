import React from "react";
import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box maxW="800px" mx="auto" p={6} textAlign="center">
      <Image 
        src='/about.jpeg'
        alt="Cooking Image" 
        borderRadius="md" 
        mb={4}
        width={'500px'} 
        height={'400px'}
      />
      <VStack spacing={4}>
        <Heading as="h1" size="xl" color="blue.500">
          About Our Recipe Website
        </Heading>
        <Text fontSize="lg">
          Welcome to our **Recipe Hub**, your go-to destination for discovering delicious recipes from around the world. Whether you're a home cook or a professional chef, we have something for everyone!
        </Text>
        <Text fontSize="md">
          Our platform allows you to explore a variety of dishes, search for your favorite meals, and even filter recipes based on different categories. We aim to make cooking easy, fun, and accessible for everyone.
        </Text>
        <Text fontSize="md" fontWeight="bold" color="blue.600">
          "Cooking is an art, and every meal is a masterpiece!"
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
