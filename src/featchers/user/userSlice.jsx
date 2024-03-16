import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userIn: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser",JSON.stringify(action.payload))
    },
    userOut: (state) => {
      state.currentUser = null;
      localStorage.setItem("currentUser",null)    

    },
  },
});

export const { userIn, userOut } = userSlice.actions;
export default userSlice.reducer;