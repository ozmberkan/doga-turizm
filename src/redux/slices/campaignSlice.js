import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: [],
};

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setCampaigns: (state, action) => {
      state.campaigns = action.payload
    },
  },
});

export const { setCampaigns } = campaignSlice.actions;

export default campaignSlice.reducer;
