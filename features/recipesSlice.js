import { createSlice } from '@reduxjs/toolkit';

import recipes from '../recipes.json';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipes.recipes,
  reducers: {},
});

export const {} = recipesSlice.actions;

export default recipesSlice.reducer;
