import { createStackNavigator } from '@react-navigation/stack';
import FavouritesScreen from '../screens/FavouritesScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function FavouritesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourites"
        options={{ headerShown: false }}
        component={FavouritesScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        options={({ route }) => ({ title: route.params.recipe.title })}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}
