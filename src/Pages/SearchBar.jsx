import { Box, Container, Flex, Input } from "@chakra-ui/react";
import { RecipeContext } from "../Context/RecipeProvider";
import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { recipes, setFilteredRecipes } = useContext(RecipeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((meal) =>
        meal.strMeal.toLowerCase().includes(value)
      );
      console.log("Filtered recipes", filtered);
      setFilteredRecipes(filtered.length > 0 ? filtered : []);
    }
  };

  return (
    <Container mt={4} mb={4}>
      <Flex
        width={["90%", "70%", "50%"]}
        bg="rgba(255, 255, 255, 0.08)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        borderRadius="full"
        align="center"
        px={3}
        position="relative"
        backdropFilter="blur(10px)"
        _hover={{ borderColor: "blue.400" }}
      >
        <Box mr={2} color="rgba(255, 255, 255, 0.7)">
          <FaSearch />
        </Box>
        <Input
          placeholder="Search Meal..."
          value={searchTerm}
          onChange={handleSearch}
          display={"block"}
          width={"70%"}
          borderRadius={"2xl"}
          marginTop={2}
          marginLeft={8}
          color={"antiquewhite"}
          border="none"
          outline="none"
          _placeholder={{ color: "gray.400" }}
          bg="transparent"
        />
      </Flex>
    </Container>
  );
};

export default SearchBar;
