import { createSlice } from '@reduxjs/toolkit';

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState: [],
  reducers: {
    addToList: (state, action) => {
      state.push({ title: action.payload, id: Date.now(), completed: false });
    },
    removeFromList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearList: (state) => {
      return [];
    },
  },
});

export const { addToList, removeFromList, clearList } = groceryListSlice.actions;

export default groceryListSlice.reducer;
