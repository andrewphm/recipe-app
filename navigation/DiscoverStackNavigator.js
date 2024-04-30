import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import DetailScreen from '../screens/DetailScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createStackNavigator();

export default function DiscoverStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" options={{ headerShown: false }} component={DiscoverScreen} />
      <Stack.Screen
        name="DetailScreen"
        options={({ route }) => ({ title: route.params.recipe.title })}
        component={DetailScreen}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params.category })}
      />
    </Stack.Navigator>
  );
}
