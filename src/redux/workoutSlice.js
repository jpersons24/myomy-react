import { createSlice } from '@reduxjs/toolkit';

const workoutSlice = createSlice({
   name: "workout",
   initialState: { workouts: [] },
   reducers: {
      setWorkouts(state, action) {
         state.workouts = action.payload
      },
      addWorkout(state, action) {
         state.workouts.push(action.payload)
      }
   }
});

export const { setWorkouts, addWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;