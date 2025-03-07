import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Flex,
  Image,
  List,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(response.data.meals[0]);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchMealDetails();
  }, [id]);

  if (loading) return <Text>Loading meal details...</Text>;
  if (error) return <Text color="red.500">Error: {error}</Text>;
  if (!meal) return <Text>No meal found.</Text>;
  return (
    <Container
      boxShadow={"rgba(0,0,0.12) 0px 5px 10px"}
      border={"1px solid skyblue"}
      width={"70%"}
      borderRadius={"2xl"}
    >
      <Box m={5} p={6}>
        <Flex justifyContent={"space-evenly"} alignItems={"flex-start"}>
          <Image
            src={meal.strMealThumb}
            alt="photo"
            w={"400px"}
            h={"400px"}
            borderRadius={"2xl"}
            border={"none"}
          />
          <Flex flexDirection={"column"} p={5} justifyContent={"left"}>
            <Text color={"blue.500"} marginTop={6} fontWeight={"bold"}>
              {meal.strMeal}
            </Text>
            <Text color={"blue.500"}>{meal.strArea}</Text>
            <Heading color={"blue.500"} m={6}>
              Watch the video here....
            </Heading>
            <AspectRatio border={"none"} borderRadius={"lg"} p={6} m={2}>
              <iframe
                title="meal-video"
                src={meal.strYoutube.replace("watch?v=", "embed/")}
                allowFullScreen
              />
            </AspectRatio>
          </Flex>
        </Flex>
      </Box>
      <Box p={5} m={5} bg={"blue.100"} borderRadius={"2xl"}>
        <Heading
          color={"blue.500"}
          textAlign={"center"}
          marginBottom={4}
          fontWeight={"bold"}
        >
          Key Ingredients
        </Heading>
        <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
          <List.Root color={"blue.500"}>
            <List.Item>{meal.strIngredient1}</List.Item>
            <List.Item>{meal.strIngredient2}</List.Item>
            <List.Item>{meal.strIngredient3}</List.Item>
            <List.Item>{meal.strIngredient4}</List.Item>
            <List.Item>{meal.strIngredient5}</List.Item>
          </List.Root>
          <List.Root color={"blue.500"}>
            <List.Item>{meal.strMeasure1}</List.Item>
            <List.Item>{meal.strMeasure2}</List.Item>
            <List.Item>{meal.strMeasure3}</List.Item>
            <List.Item>{meal.strMeasure4}</List.Item>
            <List.Item>{meal.strMeasure5}</List.Item>
          </List.Root>
        </Flex>
      </Box>
      <Box p={5} m={2} bg={"blue.50"} borderRadius={"2xl"}>
        <Heading
          color={"blue.600"}
          fontWeight={"bold"}
          m={4}
          textAlign={"center"}
        >
          Cook like this
        </Heading>
        <Text color={"blue.500"}>{meal.strInstructions}</Text>
      </Box>
      <Link to={'/'}><Button m={5} bg="blue.100" color="blue.500">All Recipes</Button></Link>
    </Container>
  );
};

export default Recipe;
