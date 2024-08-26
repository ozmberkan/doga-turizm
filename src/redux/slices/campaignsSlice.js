import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: []
};

export const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setCampaigns: (state, action) => {
      state.campaigns = action.payload;
    },
  },
});

export const { setCampaigns } = campaignsSlice.actions;

export default campaignsSlice.reducer;
