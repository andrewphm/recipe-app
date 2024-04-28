import { AspectRatio, Box, Container, ScrollView, Image, Text, HStack, Icon } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import RecipeItem from '../components/RecipeItem';
import { TouchableHighlight, TouchableOpacity } from 'react-native';

function DiscoverScreen({ navigation }) {
  const recipes = useSelector((state) => state.recipes);
  const recipe = [recipes[0], recipes[1]];
  const handlePress = (recipe) => {
    navigation.navigate('DetailScreen', { recipe });
  };
  return (
    <>
      <Box
        bg={['orange.500']}
        px="8"
        py="4"
        maxHeight={200}
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
        {recipe.map((recipe) => (
          <TouchableOpacity key={recipe.id} onPress={() => handlePress(recipe)}>
            <RecipeItem {...recipe} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

export default DiscoverScreen;
