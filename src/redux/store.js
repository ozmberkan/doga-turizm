import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
  },
});
