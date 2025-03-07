import { Container, Input, List, ListItem } from "@chakra-ui/react";
import { RecipeContext } from "../Context/RecipeProvider";
import React, { useContext, useState } from "react";

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
    <Container>
      <Input
        placeholder="Search Meal..."
        value={searchTerm}
        onChange={handleSearch}
        display={"block"}
        width={"60%"}
        borderRadius={"2xl"}
        marginLeft={3}
      />
      
      
    </Container>
  );
};

export default SearchBar;
