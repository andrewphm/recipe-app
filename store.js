import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipesSlice';
import groceryListReducer from './features/groceryListSlice';
import favouritesReducer from './features/favouritesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    groceryList: groceryListReducer,
    favourites: favouritesReducer,
  },
});
