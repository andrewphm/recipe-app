import { AspectRatio, Box, Container, ScrollView, Image, Text, HStack, Icon } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import RecipeItem from '../components/RecipeItem';

function DiscoverScreen() {
  const recipes = useSelector((state) => state.recipes);
  const recipe = [recipes[0], recipes[1]];

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
          <RecipeItem {...recipe} />
        ))}
      </ScrollView>
    </>
  );
}

export default DiscoverScreen;
