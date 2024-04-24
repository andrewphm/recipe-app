import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

function ExploreScreen() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{JSON.stringify(recipes[0])}</Text>
    </View>
  );
}

export default ExploreScreen;
