import {
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeProvider";
import SearchBar from "./SearchBar";
const Home = () => {
  const { filteredRecipes } = useContext(RecipeContext);

  return (
    <Container>
      <SearchBar/>
      <Grid templateColumns={"repeat(4,1fr)"} gap={8} m={6} p={6}>
        {filteredRecipes.length === 0 && (
          <HStack width={"full"}>
            <SkeletonCircle size={"10"} />
            <SkeletonText noOfLines={5} />
            <Skeleton height={"200px"} />
          </HStack>
        )}

        {filteredRecipes &&
          filteredRecipes.map((meal) => (
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
    </Container>
  );
};

export default Home;
