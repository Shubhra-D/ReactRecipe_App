import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  RatingGroup,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeProvider";
import SearchBar from "./SearchBar";
import EditRecipe from "./EditRecipe";
import Slide from "./Slide";
import { FaHeart } from "react-icons/fa6";
const Home = () => {
  const { filteredRecipes, setFilteredRecipes } = useContext(RecipeContext);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const [rating, setRating] = useState(1);
  const onOpen = () => setisOpen(true);
  const onClose = () => setisOpen(false);
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
const icons = [
    "fa-solid fa-utensils",
    "fa-solid fa-mug-saucer",
    "fa-solid fa-pizza-slice",
    "fa-solid fa-spoon",
    "fa-solid fa-burger",
     "fa-solid fa-wine-bottle"
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const applyFilter = async () => {
    try {
      let apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
      let queryParams = [];

      if (selectedCategory)
        queryParams.push(`c=${encodeURIComponent(selectedCategory)}`);
      if (selectedIngredient)
        queryParams.push(`i=${encodeURIComponent(selectedIngredient)}`);

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

  // click edit button
  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    alert("Editing the recipe");
  };

  //saving the changes/editing
  const handleSave = (updateRecipe) => {
    setFilteredRecipes(
      filteredRecipes.map((recipe) =>
        recipe.idMeal === updateRecipe.idMeal ? updateRecipe : recipe
      )
    );
    setEditingRecipe(null); //close the edit box
  };

  //cancel the chanfges
  const handleCancel = () => {
    setEditingRecipe(null);
  };

  //handle deleting the recipe
  const handleDelete = (id) => {
    setFilteredRecipes(
      filteredRecipes.filter((recipe) => recipe.idMeal !== id)
    );
    alert(`Deleted`);
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
          p={{ base: 4, md: 6 }}
          boxShadow={"lg"}
          borderRadius={"12px"}
          zIndex={10}
          width={{ base: "90%", sm: "80%", md: "600px" }}
          maxHeight={{ base: "80vh" }}
          overflow={{ base: "auto" }}
        >
          <Heading
            textAlign={"center"}
            color={"blue.400"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Filter Selection
          </Heading>
          {/* Categories section */}
          <Text textAlign={"start"} color={"blue.500"} marginLeft={4}>
            Categories
          </Text>
          <HStack wrap={"wrap"} marginLeft={4} p={3}>
            {categories.map((category) => (
              <VStack
                color={"grey"}
                fontSize={{ base: "xs", md: "sm" }}
                key={category.name}
              >
                <Button
                  onClick={() => setSelectedCategory(category.name)}
                  bg={selectedCategory === category.name ? "grey" : "blue.50"}
                  m={1}
                  borderColor={"blue.200"}
                  _hover={{ bg: "blue.100" }}
                >
                  {category.emoji}
                </Button>
                {category.name}
              </VStack>
            ))}
          </HStack>
          {/* ingredient Section */}
          <Text
            textAlign={"start"}
            color={"blue.500"}
            marginLeft={4}
            marginTop={4}
          >
            Ingredients
          </Text>
          <HStack
            wrap={"wrap"}
            marginLeft={4}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            {keyIngredient.map((ingredient) => (
              <VStack
                color={"grey"}
                fontSize={{ base: "xs", md: "sm" }}
                key={ingredient.name}
              >
                <Button
                  onClick={() => setSelectedIngredient(ingredient.name)}
                  bg={
                    selectedIngredient === ingredient.name ? "grey" : "blue.50"
                  }
                  m={1}
                  borderColor={"blue.200"}
                  _hover={{ bg: "blue.100" }}
                >
                  {ingredient.emoji}
                </Button>
                {ingredient.name}
              </VStack>
            ))}
          </HStack>
          {/* Close and apply buttons */}
          <Flex justifyContent={"center"} wrap={"wrap"} gap={4} m={4}>
            <Button
              onClick={applyFilter}
              color={"blue.500"}
              bg={"blue.50"}
              borderColor={"blue.200"}
              _hover={{ bg: "blue.100" }}
            >
              Apply Filter
            </Button>
            <Button
              onClick={onClose}
              bg={"blue.50"}
              borderColor={"blue.200"}
              color={"blue.500"}
              _hover={{ bg: "blue.100" }}
            >
              Close
            </Button>
          </Flex>
        </Box>
      )}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        {" "}
        <Flex gap={2} align="center" fontSize="2xl" fontWeight="bold">
          <Text color={"white"} fontSize={'3xl'}>Welcome to the</Text>
          <FaHeart color="green" />
          <Text color={"white"} fontSize={'3xl'}>of Food</Text>
        </Flex>
        {/* Decorative line with star */}
        <Flex align="center" mt={2} width="100%" maxW="400px">
          <Box flex="1" height="2px" bg={'whiteAlpha.500'}/>
          <Text mx={2} color={'whiteAlpha.500'}>*</Text>
          <Box flex="1" height="2px" bg={'whiteAlpha.500'}/>
        </Flex>
      </Flex>
      {/* Slide Show */}
      <Slide />
      {/* Little Icons Flex */}
      <Flex gap={4} align="center" justify="center" mt={4}>
      {icons.map((iconClass, index) => (
        <Flex
          key={index}
          alignItems="center"
          gap={8}
          justify='center'
          border="2px solid gray"
          borderRadius="full"
          p="10px"
          color="whiteAlpha.500"
          fontSize="20px"
          marginTop={3}
          _hover={{
            bg: "whiteAlpha.200",
            transform: "scale(1.1)",
            transition: "0.2s"
          }}
        >
          <i className={iconClass}></i>
        </Flex>
      ))}
    </Flex>
      {/* Display Recipes */}
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={8}
        m={6}
        p={6}
      >
        {filteredRecipes.length === 0 && (
          <HStack width={"full"}>
            <SkeletonCircle size={"10"} />
            <SkeletonText noOfLines={5} />
            <Skeleton height={"200px"} />
          </HStack>
        )}
        {filteredRecipes.length > 0 &&
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
                  border={"1px solid blue.50"}
                  borderRadius={"2xl"}
                  padding={2}
                />
                <Text paddingLeft={6} paddingTop={3} fontWeight={"bold"}>
                  {meal.strMeal}
                </Text>
                <Text paddingLeft={6} paddingBottom={3}>
                  {meal.strArea}
                </Text>
              </Link>
              <Flex padding={3} justifyContent={"space-between"}>
                <RatingGroup.Root
                  allowHalf
                  count={5}
                  value={rating}
                  onValueChange={(e) => setRating(e.value)}
                  colorPalette={"yellow"}
                >
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </RatingGroup.Root>
                <Text>5k reviews</Text>
              </Flex>

              {/* Editing button */}
              <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                <Button
                  onClick={() => handleEdit(meal)}
                  marginBottom={2}
                  fontWeight={"bold"}
                  bg={"blue.400"}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(meal.idMeal)}
                  marginBottom={2}
                  fontWeight={"bold"}
                  bg={"blue.400"}
                >
                  Delete
                </Button>
              </Flex>
              {editingRecipe?.idMeal === meal.idMeal && (
                <EditRecipe
                  recipe={editingRecipe}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              )}
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
