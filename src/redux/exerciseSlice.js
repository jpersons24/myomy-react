import { createSlice } from '@reduxjs/toolkit'

const exerciseSlice = createSlice({
   name: "exercise",
   initialState: { exercises: [] },
   reducers: {
      setExercises(state, action) {
         state.exercises = action.payload
      },
      addExercise(state, action) {
         state.exercises.push(action.payload)
      }
   }
});

export const { setExercises, addExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;