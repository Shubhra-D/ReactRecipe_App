import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const  RecipeContext = createContext();
const RecipeProvider = ({children}) => {
  const [recipes,setRecipes] = useState([])//stores all recipes
  const [filteredRecipes,setFilteredRecipes] = useState([]);
  //fetch the rrecipes
  useEffect(()=>{
    const fetchRecipes = async()=>{
        try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
            setRecipes(response.data.meals);
            setFilteredRecipes(response.data.meals)
        }catch(err){
          console.log(err,"error fetching the meal")
        }
    }
      fetchRecipes()
  },[]);

  //function to Edit the Recipes
  const updateRecipes = (updateRecipe)=>{
    setRecipes((prev)=>{
      prev.map((recipe)=>
         recipe.idMeal === updateRecipe.idMeal ? updateRecipe : recipe
      )
    })
  }
    return (
    <RecipeContext.Provider value={{recipes,filteredRecipes,setFilteredRecipes,updateRecipes}}>
          {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider