import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import FavoritesScreen from '../screens/FavouritesScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import { Ionicons } from 'react-native-vector-icons';
import DiscoverStackNavigator from './DiscoverStackNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Discover') {
            iconName = focused ? 'eye' : 'eye-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'GroceryList') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Discover"
        options={{ headerShown: false }}
        component={DiscoverStackNavigator}
      />
      <Tab.Screen name="Favorites" options={{ headerShown: false }} component={FavoritesScreen} />
      <Tab.Screen
        name="GroceryList"
        options={{ headerShown: false }}
        component={GroceryListScreen}
      />
    </Tab.Navigator>
  );
}
