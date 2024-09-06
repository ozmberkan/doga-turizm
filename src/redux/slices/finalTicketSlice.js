import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalTicket : [],
};

export const finalTicketSlice = createSlice({
  name: "finalTicket",
  initialState,
  reducers: {
    setFinalTicket: (state, action) => {
      state.finalTicket = action.payload;
    },
  },
});

export const { setFinalTicket } = finalTicketSlice.actions;

export default finalTicketSlice.reducer;
