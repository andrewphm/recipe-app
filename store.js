import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipesSlice';
import groceryListReducer from './features/groceryListSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    groceryList: groceryListReducer,
  },
});
