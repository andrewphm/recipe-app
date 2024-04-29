import { createSlice } from '@reduxjs/toolkit';

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState: [],
  reducers: {
    addToList: (state, action) => {
      state.push(action.payload);
    },
    removeFromList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToList, removeFromList } = groceryListSlice.actions;

export default groceryListSlice.reducer;
