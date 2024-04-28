import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import DetailScreen from '../screens/DetailScreen';

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
    </Stack.Navigator>
  );
}
