import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
   name: "food",
   initialState: { foods: [] },
   reducers: {
      setFoods(state, action) {
         state.foods = action.payload
      },
      addFood(state, action) {
         state.foods.push(action.payload)
      },
   }
});

export const { setFoods, addFood } = foodSlice.actions;
export default foodSlice.reducer;