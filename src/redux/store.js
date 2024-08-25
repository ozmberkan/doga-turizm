import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import ticketsSlice from "./slices/ticketsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tickets : ticketsSlice
  },
});
