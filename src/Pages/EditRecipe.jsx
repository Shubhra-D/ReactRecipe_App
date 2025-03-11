import { Box, Button, Flex, Input, RatingGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoHeart } from "react-icons/io5";

const EditRecipe = ({ recipe, onSave, onCancel }) => {
  const [editRecipe, setEditRecipe] = useState({
    idMeal: recipe.idMeal,
    strMeal: recipe.strMeal,
    strArea: recipe.strArea,
    strThumb: recipe.strThumb,
    rating: recipe.rating || 0,
  });

  //handle input change
  const handleChange = (e)=>{
       const {name,value} = e.target;
       setEditRecipe({...editRecipe,[name]:value})
  }
  return (
    <Box bg={'blue.400'} p={3} borderRadius={'2xl'}>
      <Text fontSize={'md'} textAlign={'center'} textDecoration={'underline'} marginBottom={2} color={'whiteAlpha.900'}>Edit Recipe</Text>
      <Input
       border={'none'}
       color={'grey'}
       bg={'blue.50'}
       p={3}
       marginBottom={2}
       placeholder="Paste Image URL"
        type="text"
        name="strThumb"
        value={editRecipe.strThumb}
        onChange={handleChange}
      />
      <Input
       border={'none'}
       color={'grey'}
       bg={'blue.50'}
       marginBottom={2}
        type="text"
        name="strMeal"
        value={editRecipe.strMeal}
        onChange={handleChange}
      />
      <Input
       border={'none'}
       color={'grey'}
       bg={'blue.50'}
       marginBottom={2}
        type="text"
        name="strArea"
        value={editRecipe.strArea}
        onChange={handleChange}
      />
      <RatingGroup.Root allowHalf count={5} p={2}  defaultValue={1} colorPalette={'red'} size={'md'}>
         <RatingGroup.HiddenInput/>
         <RatingGroup.Label color={'red'} fontWeight={'bold'}>Rating:</RatingGroup.Label>
         <RatingGroup.Control>
            {Array.from({length:5}).map((_,index)=>(
                <RatingGroup.Item key={index} index={index + 1}>
                     <RatingGroup.ItemIndicator icon={<IoHeart/>}/>
                </RatingGroup.Item>
            ))}
         </RatingGroup.Control>
      </RatingGroup.Root>
      <Flex m={2} justifyContent={'center'} alignItems={'center'} gap={2}>
      <Button onClick={()=>onSave(editRecipe)} bg={'blue.500'}>Save</Button>
      <Button onClick={onCancel} bg={'red.500'}>Cancel</Button>
      </Flex>
    </Box>
  );
};

export default EditRecipe;
