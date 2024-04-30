import { AspectRatio, Box, Container, ScrollView, Image, Text, HStack, Icon } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import RecipeItem from '../components/RecipeItem';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import Categories from '../components/Categories';

function DiscoverScreen({ navigation }) {
  const recipes = useSelector((state) => state.recipes);
  const recipe = [recipes[0], recipes[1]];
  const handlePress = (recipe) => {
    navigation.navigate('DetailScreen', { recipe });
  };

  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };
  return (
    <>
      <Box
        bg={['orange.500']}
        px="8"
        py="4"
        minHeight={200}
        flex={1}
        roundedBottom="30"
        roundedTop="50"
        m="1"
        marginBottom={5}
        justifyContent={['flex-end']}
      >
        <Search />
      </Box>
      <ScrollView px="5">
        <Categories handleCategoryPress={handleCategoryPress} />
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
      </ScrollView>
    </>
  );
}

export default DiscoverScreen;
