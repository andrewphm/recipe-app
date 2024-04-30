import { Box, ScrollView, Text } from 'native-base';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeItem from '../components/RecipeItem';

export default function CategoryScreen({ route, navigation }) {
  const { category } = route.params;
  const recipes = useSelector((state) => state.recipes);
  const categoryRecipes = recipes.filter(
    (recipe) =>
      recipe.type.toLowerCase() === category.toLowerCase() ||
      recipe.Cuisine.toLowerCase() === category.toLowerCase()
  );

  const handlePress = (recipe) => {
    navigation.navigate('DetailScreen', { recipe });
  };

  return (
    <SafeAreaView flex={1}>
      <Box px="5">
        <Text color={'orange.500'} bold fontSize="24" mt="3">
          {category} Recipes
        </Text>
      </Box>
      <ScrollView p={2} my={1} bgColor={'light.100'} rounded="lg">
        {categoryRecipes.map((recipe) => (
          <TouchableOpacity key={recipe.title} onPress={() => handlePress(recipe)}>
            <RecipeItem recipe={recipe} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
