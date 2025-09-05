import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  NativeSelectField,
  NativeSelectIndicator,
  NativeSelectRoot,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Mood = () => {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState("");
  const [diet, setDiet] = useState("");
  const [country, setCountry] = useState("");
  const [quiz, setQuiz] = useState({ speed: "", taste: "", diet: "" });
  const [recipe, setRecipe] = useState([]);


   // Fetch helper
  const fetchRecipes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipe(data.meals || []);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle mood submit
  const handleMoodSubmit = (e) => {
    e.preventDefault();
    let url = "";

    switch (mood.toLowerCase()) {
      case "happy":
        url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
        break;
      case "sad":
        url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
        break;
      case "tired":
        url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Snack";
        break;
      case "stressed":
        url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
        break;
      case "bored":
        url = "https://www.themealdb.com/api/json/v1/1/random.php";
        break;
      case "romantic":
        if (diet === "veg") {
          url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
        } else if (diet === "non-veg") {
          url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";
        } else {
          alert("Please select Veg or Non-Veg for romantic mood!");
          return;
        }
        break;
      default:
        url = "https://www.themealdb.com/api/json/v1/1/random.php";
    }

    fetchRecipes(url);
  };

  // Handle country submit
  const handleCountrySubmit = (e) => {
    e.preventDefault();
    if (!country) return;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
    fetchRecipes(url);
  };

  // Handle quiz submit
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let url = "";
    if (quiz.speed === "quick" && quiz.taste === "savory") {
      url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Snack";
    } else if (quiz.speed === "quick" && quiz.taste === "sweet") {
      url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
    } else if (quiz.speed === "elaborate" && quiz.taste === "savory") {
      url =
        quiz.diet === "veg"
          ? "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
          : "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    } else if (quiz.speed === "elaborate" && quiz.taste === "sweet") {
      url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
    } else {
      url = "https://www.themealdb.com/api/json/v1/1/random.php";
    }
    fetchRecipes(url);
  };
  return (
    <Box
      minH="100vh"
      py={8}
    >
      <Container maxW="6xl" px={6}>
        {/* Header */}
        <VStack spacing={8} textAlign="center" mb={10}>
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            letterSpacing="tight"
          >
            🍽️ Your Mood, Our Food
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.900"
            maxW="600px"
            lineHeight="1.6"
          >
            Discover the perfect recipe based on how you're feeling today
          </Text>
        </VStack>

        {/* Main Content Card */}
        <Box
          borderRadius="3xl"
          boxShadow="2xl"
          p={{ base: 6, md: 10 }}
          mx="auto"
          maxW="4xl"
          bgGradient="to-r"
      gradientFrom={'#667eea'}
      gradientVia={'pink.500'}
      gradientTo={'#764ba2'}
        >
          {/* Select the type */}
          {step === 0 && (
            <VStack spacing={8}>
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                color="teal.700"
                mb={4}
              >
                How would you like to find your perfect meal?
              </Text>
              <VStack gap={6} w="full">
                <Button
                  onClick={() => setStep(1)}
                  size="lg"
                  h="120px"
                  w="full"
                  maxW="300px"
                  color="teal.500"
                  borderRadius="2xl"
                  fontSize="xl"
                  fontWeight="bold"
                  boxShadow="lg"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                  _active={{ transform: "translateY(-2px)" }}
                  transition="all 0.3s ease"
                  border="3px solid"
                  borderColor="whiteAlpha.300"
                >
                  <VStack spacing={2}>
                    <Text fontSize="3xl">😃</Text>
                    <Text>My Mood</Text>
                  </VStack>
                </Button>
                <Button
                  onClick={() => setStep(2)}
                  size="lg"
                  h="120px"
                  w="full"
                  maxW="300px"
                  color="yellow.500"
                  borderRadius="2xl"
                  fontSize="xl"
                  fontWeight="bold"
                  boxShadow="lg"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                    bgGradient: "linear(45deg, #fa709a 0%, #fee140 100%)",
                  }}
                  _active={{ transform: "translateY(-2px)" }}
                  transition="all 0.3s ease"
                  border="3px solid"
                  borderColor="whiteAlpha.300"
                >
                  <VStack spacing={2}>
                    <Text fontSize="3xl">🌍</Text>
                    <Text>Country Food</Text>
                  </VStack>
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  size="lg"
                  h="120px"
                  w="full"
                  maxW="300px"
                  
                  borderRadius="2xl"
                  color={'orange.600'}
                  fontSize="xl"
                  fontWeight="bold"
                  boxShadow="lg"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                  _active={{ transform: "translateY(-2px)" }}
                  transition="all 0.3s ease"
                  border="3px solid"
                  borderColor="whiteAlpha.300"
                >
                  <VStack spacing={2}>
                    <Text fontSize="3xl">❓</Text>
                    <Text>Take Quiz</Text>
                  </VStack>
                </Button>
              </VStack>
            </VStack>
          )}

          {/* First choice - Mood */}
          {step === 1 && (
            <VStack spacing={6}>
              <Button
                onClick={() => setStep(0)}
                variant="ghost"
                color="gray.600"
                alignSelf="flex-start"
              >
                ← Back
              </Button>
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                What's your mood today? 🎭
              </Text>
              <Box as="form" onSubmit={handleMoodSubmit} w="full" maxW="400px">
                <VStack spacing={4}>
                  <Input
                    type="text"
                    placeholder="Tell us your mood (e.g., happy, sad, tired...)"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    size="lg"
                    borderRadius="xl"
                    borderColor="gray.300"
                    _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)" }}
                    bg="gray.50"
                    color={'gray.800'}
                  />
                  {mood.toLowerCase() === "romantic" && (
                    <NativeSelectRoot>
                      <NativeSelectField
                        placeholder="Select Diet Type"
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                        size="lg"
                        borderRadius="xl"
                        borderColor="gray.300"
                        bg="gray.50"
                      >
                        <option value="veg">🥗 Vegetarian</option>
                        <option value="non-veg">🍖 Non-Vegetarian</option>
                      </NativeSelectField>
                      <NativeSelectIndicator />
                    </NativeSelectRoot>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bg="blue.600"
                    color="white"
                    borderRadius="xl"
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(45deg, #5a67d8 0%, #6b46c1 100%)",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Find My Mood Food 🍽️
                  </Button>
                </VStack>
              </Box>
            </VStack>
          )}

          {/* Second choice - Country */}
          {step === 2 && (
            <VStack spacing={6}>
              <Button
                onClick={() => setStep(0)}
                variant="ghost"
                color="gray.600"
                leftIcon={<Text>←</Text>}
                alignSelf="flex-start"
              >
                Back
              </Button>
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                Choose Your Culinary Adventure 🌍
              </Text>
              <Box as="form" onSubmit={handleCountrySubmit} w="full" maxW="400px">
                <VStack spacing={4}>
                  <NativeSelectRoot>
                    <NativeSelectField
                      placeholder="Select a Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      size="lg"
                      borderRadius="xl"
                      borderColor="gray.300"
                      bg="gray.50"
                      color={'gray.900'}
                    >
                      <option value="Indian">🇮🇳 Indian</option>
                      <option value="Italian">🇮🇹 Italian</option>
                      <option value="Chinese">🇨🇳 Chinese</option>
                      <option value="Mexican">🇲🇽 Mexican</option>
                      <option value="American">🇺🇸 American</option>
                    </NativeSelectField>
                    <NativeSelectIndicator />
                  </NativeSelectRoot>
                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bgGradient={'to-r'}
                    gradientFrom={'#fa709a '}
                    gradientTo={'#fee140'}
                    color="white"
                    borderRadius="xl"
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(45deg, #e53e3e 0%, #dd6b20 100%)",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Get Recipes 🍳
                  </Button>
                </VStack>
              </Box>
            </VStack>
          )}

          {/* Third choice - Quiz */}
          {step === 3 && (
            <VStack spacing={6}>
              <Button
                onClick={() => setStep(0)}
                variant="ghost"
                color="gray.600"
                leftIcon={<Text>←</Text>}
                alignSelf="flex-start"
              >
                Back
              </Button>
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                Quick Food Quiz 📝
              </Text>
              <Box as="form" onSubmit={handleQuizSubmit} w="full" maxW="400px">
                <VStack spacing={4}>
                  <Box w="full">
                    <Text fontSize="lg" fontWeight="medium" color="gray.700" mb={2}>
                      ⏰ How much time do you have?
                    </Text>
                    <NativeSelectRoot>
                      <NativeSelectField
                        placeholder="Choose..."
                        value={quiz.speed}
                        onChange={(e) => setQuiz({ ...quiz, speed: e.target.value })}
                        size="lg"
                        borderRadius="xl"
                        borderColor="gray.300"
                        bg="gray.50"
                        color={'gray.600'}
                      >
                        <option value="quick">⚡ Quick & Easy</option>
                        <option value="elaborate">👨‍🍳 Elaborate</option>
                      </NativeSelectField>
                      <NativeSelectIndicator />
                    </NativeSelectRoot>
                  </Box>

                  <Box w="full">
                    <Text fontSize="lg" fontWeight="medium" color="gray.700" mb={2}>
                      👅 What taste are you craving?
                    </Text>
                    <NativeSelectRoot>
                      <NativeSelectField
                        placeholder="Choose..."
                        value={quiz.taste}
                        onChange={(e) => setQuiz({ ...quiz, taste: e.target.value })}
                        size="lg"
                        borderRadius="xl"
                        borderColor="gray.300"
                        bg="gray.50"
                         color={'gray.600'}
                      >
                        <option value="sweet">🍰 Sweet</option>
                        <option value="savory">🧂 Savory</option>
                      </NativeSelectField>
                      <NativeSelectIndicator />
                    </NativeSelectRoot>
                  </Box>

                  {quiz.speed === "elaborate" && quiz.taste === "savory" && (
                    <Box w="full">
                      <Text fontSize="lg" fontWeight="medium" color="gray.700" mb={2}>
                        🥬 Diet Preference?
                      </Text>
                      <NativeSelectRoot>
                        <NativeSelectField
                          placeholder="Choose..."
                          value={quiz.diet}
                          onChange={(e) => setQuiz({ ...quiz, diet: e.target.value })}
                          size="lg"
                          borderRadius="xl"
                          borderColor="gray.300"
                          bg="gray.50"
                           color={'gray.600'}
                        >
                          <option value="veg">🥗 Vegetarian</option>
                          <option value="non-veg">🍖 Non-Vegetarian</option>
                        </NativeSelectField>
                        <NativeSelectIndicator />
                      </NativeSelectRoot>
                    </Box>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bgGradient="to-r"
                    gradientFrom={' #a8edea '}
                    gradientTo={'#fed6e3'}
                    color="gray.700"
                    borderRadius="xl"
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(45deg, #81e6d9 0%, #f687b3 100%)",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Get My Recipes 🎯
                  </Button>
                </VStack>
              </Box>
            </VStack>
          )}

          {/* Recipe Results */}
          {step !== 0 && (
            <Box mt={10}>
              {recipe.length > 0 ? (
                <VStack spacing={6}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.700"
                    textAlign="center"
                  >
                    Perfect Recipes for You! 🎉
                  </Text>
                  <Box
                    display="grid"
                    gridTemplateColumns={{
                      base: "1fr",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    }}
                    gap={6}
                    w="full"
                  >
                    {recipe.slice(0, 6).map((meal) => (
                      <Box
                        key={meal.idMeal}
                        bg="white"
                        borderRadius="2xl"
                        boxShadow="lg"
                        overflow="hidden"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{
                          transform: "translateY(-8px)",
                          boxShadow: "2xl",
                        }}
                        transition="all 0.3s ease"
                        cursor="pointer"
                      >
                        <Box position="relative" overflow="hidden">
                          <Image
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            w="full"
                            h="200px"
                            objectFit="cover"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                          />
                          <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            bottom="0"
                            bgGradient="linear(to-t, rgba(0,0,0,0.3) 0%, transparent 50%)"
                          />
                        </Box>
                        <Box p={4}>
                          <Text
                            fontWeight="bold"
                            fontSize="lg"
                            color="gray.800"
                            textAlign="center"
                            lineHeight="1.4"
                          >
                            {meal.strMeal}
                          </Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  {recipe.length > 6 && (
                    <Text color="gray.600" textAlign="center">
                      Showing 6 of {recipe.length} recipes
                    </Text>
                  )}
                </VStack>
              ) : (
                <VStack spacing={4} textAlign="center" py={8}>
                  <Text fontSize="6xl">😅</Text>
                  <Text fontSize="xl" fontWeight="bold" color="gray.700">
                    Oops! No recipes found
                  </Text>
                  <Text color="gray.600">
                    Try a different mood or selection
                  </Text>
                  <Button
                    onClick={() => setStep(0)}
                    colorScheme="blue"
                    variant="outline"
                    borderRadius="xl"
                  >
                    Try Again
                  </Button>
                </VStack>
              )}
            </Box>
          )}
          
        </Box>
      </Container>
    </Box>
  );
};

export default Mood;
