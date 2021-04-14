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
      },
      removeWorkout(state, action) {
         const filteredWorkouts = state.workouts.filter((workout) => {
            return workout.id !== action.payload.id
         })
         state.workouts = filteredWorkouts
      }
   }
});

export const { setWorkouts, addWorkout, removeWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;