import { View, Text, Box, Center } from 'native-base';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import RecipeItem from '../components/RecipeItem';

function FavoritesScreen({ navigation }) {
  const favouriteRecipes = useSelector((state) => state.favourites);
  const handlePress = (recipe) => {
    navigation.navigate('DetailScreen', { recipe });
  };
  return (
    <>
      <Box
        bg={['orange.500']}
        px="8"
        pb="10"
        minHeight={150}
        alignItems={'center'}
        justifyContent={'flex-end'}
      >
        <Center>
          <Text fontSize="xl" fontWeight="bold" color="white">
            Favorite Recipes
          </Text>
        </Center>
      </Box>
      <Box
        flex={1}
        minHeight="100%"
        roundedTop="30"
        p="5"
        position={'relative'}
        bottom={6}
        bgColor={'light.100'}
        shadow="2"
        justifyContent={favouriteRecipes.length === 0 ? 'center' : 'flex-start'}
      >
        {favouriteRecipes.map((recipe, i) => (
          <TouchableOpacity key={recipe.title + i} onPress={() => handlePress(recipe)}>
            <RecipeItem recipe={recipe} />
          </TouchableOpacity>
        ))}
        {favouriteRecipes.length === 0 && (
          <Center pb={100}>
            <Text fontWeight="medium" fontSize="18">
              No favourite recipes yet.
            </Text>
          </Center>
        )}
      </Box>
    </>
  );
}

export default FavoritesScreen;
