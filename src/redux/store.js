import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import workoutReducer from './workoutSlice'
import exerciseReducer from './exerciseSlice'


const store = configureStore({
   reducer: {
      user: userReducer,
      workout: workoutReducer,
      exercise: exerciseReducer,
   }
});

export default store;