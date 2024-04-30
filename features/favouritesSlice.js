import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addToFavourites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      return state.filter((item) => item.title !== action.payload);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
