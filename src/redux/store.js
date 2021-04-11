import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import workoutReducer from './workoutSlice'


const store = configureStore({
   reducer: {
      user: userReducer,
      workout: workoutReducer,
   }
});

export default store;