import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: "user",
   initialState: { curentUser: null },
   reducers: {
      setCurrentUser(state, action) {
         state.currentUser = action.payload
      }
   }
});

export default userSlice.reducer;