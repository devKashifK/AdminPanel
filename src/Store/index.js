import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Data-slice";
import LogInSlice from "./logIn-slice";

const store = configureStore({
  reducer: {
    data: DataSlice.reducer,
    login: LogInSlice.reducer,
  },
});

export default store;
