import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
   name: "meal",
   initialState: { meals: [] },
   reducers: {
      setMeals(state, action) {
         state.meals = action.payload
      }, 
      addMeal(state, action) {
         state.meals.push(action.payload)
      },
   }
});

export const { setMeals, addMeal } = mealSlice.actions;
export default mealSlice.reducer;