import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import ticketsSlice from "./slices/ticketsSlice";
import filterSlice from "./slices/filterSlice";
import campaignsSlice from "./slices/campaignsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tickets: ticketsSlice,
    filter: filterSlice,
    campaigns: campaignsSlice,
  },
});
