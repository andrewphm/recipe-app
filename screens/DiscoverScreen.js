import { Box, ScrollView, Text, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import RecipeItem from '../components/RecipeItem';
import { TouchableOpacity } from 'react-native';
import Categories from '../components/Categories';

function DiscoverScreen({ navigation }) {
  const recipes = useSelector((state) => state.recipes);
  const [search, setSearch] = useState('');
  const handlePress = (recipe) => {
    navigation.navigate('DetailScreen', { recipe });
  };
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };

  useEffect(() => {
    setFilteredRecipes(
      recipes.filter((recipe) => {
        if (search === '') return false;
        return (
          recipe.title.toLowerCase().includes(search.toLowerCase()) ||
          recipe.Cuisine.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, recipes]);
  return (
    <>
      <Box
        bg={['orange.500']}
        px="8"
        py="4"
        height={200}
        roundedBottom="30"
        roundedTop="50"
        m="1"
        marginBottom={5}
        justifyContent={['flex-end']}
      >
        <Search search={search} setSearch={setSearch} />
      </Box>
      <ScrollView px="5">
        <Categories handleCategoryPress={handleCategoryPress} />
        {!search.trim() && (
          <Box>
            <HStack space={2} alignItems="center" justifyContent={'space-between'} mb="2">
              <Text fontSize="xl" fontWeight="bold">
                Popular Recipes
              </Text>
              <Text fontWeight={'semibold'} color="orange.500">
                See all
              </Text>
            </HStack>
            {recipes.map((recipe, i) => (
              <TouchableOpacity key={recipe.title + i} onPress={() => handlePress(recipe)}>
                <RecipeItem recipe={recipe} />
              </TouchableOpacity>
            ))}
          </Box>
        )}
        {search && (
          <Box>
            <HStack space={2} alignItems="center" justifyContent={'space-between'} mb="2">
              <Text fontSize="xl" fontWeight="bold">
                Search Results
              </Text>
            </HStack>
            {filteredRecipes.map((recipe, i) => (
              <TouchableOpacity key={recipe.title + i} onPress={() => handlePress(recipe)}>
                <RecipeItem recipe={recipe} />
              </TouchableOpacity>
            ))}
          </Box>
        )}
      </ScrollView>
    </>
  );
}

export default DiscoverScreen;
