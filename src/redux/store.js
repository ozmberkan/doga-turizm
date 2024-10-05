import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filterSlice from "./slices/filterSlice";
import finalTicketSlice from "./slices/finalTicketSlice";
import campaignSlice from "./slices/campaignSlice";
import drawerSlice from "./slices/drawerSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    finalTicket: finalTicketSlice,
    campaigns: campaignSlice,
    drawer: drawerSlice,
  },
});
