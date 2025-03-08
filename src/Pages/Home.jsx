import {
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeProvider";
import SearchBar from "./SearchBar";
const Home = () => {
  const { filteredRecipes } = useContext(RecipeContext);
  const {isOpen,onOpen,onClose} = useDisclosure()

  //categories and ingredient data 
  const categories = [{
   emoji: "🍞",name:"Side",
   emoji: "🦞",name:"Seafood",
   emoji: "🥗" ,name:"Vegetarian",
   emoji: "🥩" ,name:"Beef",
   emoji: "🐖" ,name:"Pork",
   emoji: "🍝" ,name:"Pasta",
   emoji: "🍰" ,name:"Dessert",
   emoji: "🍗" ,name:"Lamb",
   emoji: "🍗" ,name:"Chicken",
   emoji: "🍗" ,name:"Miscellaneous"
  }]
  const keyIngredient = [{
    label:"🍞",value:"Bread",
    emoji:"🍶",name:"SoySauce",
    emoji:"🧅",name:"Onion",
    emoji:"🍛",name:"Lentils",
    emoji:"🥕",name:"Carrots",
    emoji:"🧀",name:"Cheese",
    emoji:"🥔",name:"Potatoes",
    emoji:"🧂 ",name:"Cumin",
    emoji:"🥚",name:"Eggs"}]
  return (
    <Container>
      <HStack gap={3}>
      <SearchBar/>
      <Button color={'blue.600'} bg={'blue.200'} onClick={onOpen} my={4} marginRight={'24'}>{isOpen ? "Hide Filter":"Show Filter"}</Button>
      </HStack>


      {/* Display Recipes */}
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
