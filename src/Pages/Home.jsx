import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        setMeals(response.data.meals);
      } catch (err) {
        console.error(err.message);
        setError("Failed to fetch the Meals");
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  return (
    <Grid templateColumns={"repeat(4,1fr)"} gap={8} m={6} p={6}>
      {loading && <Text>Meals are on the Way....</Text>}
      {error && <Text color={"red.300"}>{error}</Text>}

      {meals &&
        meals.map((meal) => (
          <GridItem
            key={meal.idMeal}
            borderRadius={"2xl"}
            bg={"blue.100"}
            textAlign={"left"}
            color={"blue.500"}
          >
            <Link to={`/meal/${meal.idMeal}`}>
              <Image
                src={meal.strMealThumb}
                alt="meal-pic"
                borderRadius={"8px"}
              />
              <Text paddingLeft={6} paddingTop={3} fontWeight={"bold"}>
                {meal.strMeal}
              </Text>
              <Text paddingLeft={6} paddingBottom={3}>
                {meal.strArea}
              </Text>
            </Link>
          </GridItem>
        ))}
    </Grid>
  );
};

export default Home;
