import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
   name: "meal",
   initialState: {meals: [] },
   reducers: {
      setMeals(state, action) {
         state.meals = action.payload
      }, 
   }
});

export const { setMeals } = mealSlice.actions;
export default mealSlice.reducer;