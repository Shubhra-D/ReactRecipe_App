import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeProvider";
import SearchBar from "./SearchBar";
const Home = () => {
  const { filteredRecipes, setFilteredRecipes } = useContext(RecipeContext);
const [isOpen,setisOpen] = useState(false);
const onOpen = ()=>setisOpen(true);
const onClose = ()=>setisOpen(false);
  console.log(" Filter Dialog Opened", isOpen);

  //categories and ingredient data
  const categories = [
    { emoji: "🍞", name: "Side" },
    { emoji: "🦞", name: "Seafood" },
    { emoji: "🥗", name: "Vegetarian" },
    { emoji: "🥩", name: "Beef" },
    { emoji: "🐖", name: "Pork" },
    { emoji: "🍝", name: "Pasta" },
    { emoji: "🍰", name: "Dessert" },
    { emoji: "🍗", name: "Lamb" },
    { emoji: "🍗", name: "Chicken" },
    { emoji: "🍗", name: "Miscellaneous" },
  ];
  const keyIngredient = [
    { emoji: "🍞", name: "Bread" },
    { emoji: "🍶", name: "SoySauce" },
    { emoji: "🧅", name: "Onion" },
    { emoji: "🍛", name: "Lentils" },
    { emoji: "🥕", name: "Carrots" },
    { emoji: "🧀", name: "Cheese" },
    { emoji: "🥔", name: "Potatoes" },
    { emoji: "🧂 ", name: "Cumin" },
    { emoji: "🥚", name: "Eggs" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  
  const applyFilter = async () => {
    try {
      let apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
      let queryParams = [];
  
      if (selectedCategory) queryParams.push(`c=${encodeURIComponent(selectedCategory)}`);
      if (selectedIngredient) queryParams.push(`i=${encodeURIComponent(selectedIngredient)}`);
  
      if (queryParams.length > 0) {
        apiUrl += queryParams.join("&"); // Correctly joining query parameters
      }
  
      console.log("Final API URL:", apiUrl); // Debugging step
  
      const response = await axios.get(apiUrl);
      console.log("API Response:", response.data); // Debugging step
  
      if (response.data.meals) {
        setFilteredRecipes(response.data.meals);
      } else {
        console.warn("No recipes found for the selected filters.");
        setFilteredRecipes([]);
      }
    } catch (err) {
      console.error("Error fetching filtered recipes:", err);
      setFilteredRecipes([]);
    }
  
    onClose(); // Close the filter modal after applying the filter
  };
  

  return (
    
    <Container>

      <HStack gap={3}>
        <SearchBar />
        <Button
          color={"blue.600"}
          bg={"blue.200"}
          onClick={isOpen ? onClose : onOpen}
          my={4}
          marginRight={"24px"}
        >
          {isOpen ? "Hide Filter" : "Show Filter"}
        </Button>
      </HStack>

      {/* FITLER SELECTION */}
      {isOpen && (
        <Box
          position={"fixed"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          bg={"blue.50"}
          p={6}
          boxShadow={"lg"}
          borderRadius={"12px"}
          zIndex={10}
          width={"600px"}
        >
          <Heading textAlign={"center"} color={"blue.600"}>Filter Selection</Heading>
          {/* Categories section */}
          <Text textAlign={"start"} color={"blue.500"}>Categories</Text>
          <HStack wrap={"wrap"}>
            {categories.map((category) => (
              <Button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                color={selectedCategory === category.name ? "blue.400" : "grey"}
                m={2}
                bg={"blue.200"}
                 
              >
                {category.emoji}
                {category.name}
              </Button>
            ))}
          </HStack>
          {/* ingredient Section */}
          <Text textAlign={"start"}  color={"blue.500"}>Ingredients</Text>
          <HStack wrap={"wrap"}>
            {keyIngredient.map((ingredient) => (
              <Button
                key={ingredient.name}
                onClick={() => setSelectedIngredient(ingredient.name)}
                color={
                  selectedIngredient === ingredient.name ? "blue.400" : "grey" }
                 m={2}
                 bg={"blue.200"}
              >
                {ingredient.emoji}
                {ingredient.name}
              </Button>
            ))}
          </HStack>
          {/* Close and apply buttons */}
          <Button
            m={4}
            onClick={applyFilter}
            color={"blue.500"}
            bg={"blue.200"}
          >
            Apply Filter
          </Button>
          <Button
            m={4}
           
            onClick={onClose}
            bg={"blue.200"}
            color={"blue.500"}
          >
            Close
          </Button>
        </Box>
      )}
      {/* Display Recipes */}
      <Grid templateColumns={"repeat(4,1fr)"} gap={8} m={6} p={6}>
        {filteredRecipes.length === 0 && (
          <HStack width={"full"}>
            <SkeletonCircle size={"10"} />
            <SkeletonText noOfLines={5} />
            <Skeleton height={"200px"} />
          </HStack>
        )}
    {filteredRecipes.length>0 &&
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
