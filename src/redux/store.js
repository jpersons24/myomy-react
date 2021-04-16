import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import workoutReducer from './workoutSlice';
import exerciseReducer from './exerciseSlice';
import mealReducer from './mealSlice';


const store = configureStore({
   reducer: {
      user: userReducer,
      workout: workoutReducer,
      exercise: exerciseReducer,
      meal: mealReducer,
   }
});

export default store;