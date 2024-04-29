import { createSlice } from '@reduxjs/toolkit';

export const groceryListSlice = createSlice({
  name: 'groceryList',
  initialState: [],
  reducers: {
    addToList: (state, action) => {
      state.push({ title: action.payload, completed: false });
    },
    removeFromList: (state, action) => {
      return state.filter((item) => item.title !== action.payload);
    },
    clearList: (state) => {
      return [];
    },
    completeItem: (state, action) => {
      state.forEach((item) => {
        if (item.title === action.payload) {
          item.completed = !item.completed;
        }
      });
    },
    addRecipeToList: (state, action) => {
      action.payload.ingredients.forEach((ingredient) => {
        state.push({ title: ingredient, completed: false });
      });
    },
  },
});

export const { addToList, removeFromList, clearList, completeItem, addRecipeToList } =
  groceryListSlice.actions;

export default groceryListSlice.reducer;
