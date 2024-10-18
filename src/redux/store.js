import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filterSlice from "./slices/filterSlice";
import finalTicketSlice from "./slices/finalTicketSlice";
import campaignSlice from "./slices/campaignSlice";
import drawerSlice from "./slices/drawerSlice";
import themeSlice from "./slices/themeSlice";
import ticketsSlice from "./slices/ticketsSlice";
import contactsSlice from "./slices/contactsSlice";
import announcementSlice from "./slices/announcementSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    finalTicket: finalTicketSlice,
    campaigns: campaignSlice,
    drawer: drawerSlice,
    theme: themeSlice,
    tickets: ticketsSlice,
    contacts: contactsSlice,
    announcement: announcementSlice,
  },
});
