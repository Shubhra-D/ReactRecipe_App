import { AspectRatio, Box, Container, Flex, Image, List, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
   <Container>
     <Box m={5} p={6}>
      <Flex justifyContent={"space-evenly"} alignItems={"flex-start"}>
        <Image
          src={meal.strMealThumb}
          alt="photo"
          w={"400px"}
          p={4}
          m={4}
          h={"400px"}
        />
        <Flex flexDirection={"column"} p={5} justifyContent={"left"}>
          <Text>{meal.strMeal}</Text>
          <Text>{meal.strArea}</Text>
          <AspectRatio>
            <iframe title="meal-video" src={meal.strYoutube} allowFullScreen />
          </AspectRatio>
        </Flex>
       
      </Flex>
    </Box>
    <Flex>
          <Box>
            <List.Root>
              <List.Item>{meal.strIngredient1}</List.Item>
              <List.Item>{meal.strIngredient2}</List.Item>
              <List.Item>{meal.strIngredient3}</List.Item>
              <List.Item>{meal.strIngredient4}</List.Item>
              <List.Item>{meal.strIngredient5}</List.Item>
            </List.Root>
          </Box>
        </Flex>
   </Container>
  );
};

export default Recipe;
