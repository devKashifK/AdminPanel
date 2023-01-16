import { createSlice } from "@reduxjs/toolkit";

const LogInSlice = createSlice({
  name: "LogIn",
  initialState: {
    isLoggedIn: false,
    // username: "",
  },
  reducers: {
    changeLogin: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    // changeUsername: (state, action) => {
    //   state.username = action.payload;
    // },
  },
});

export const LogInAction = LogInSlice.actions;
export default LogInSlice;
