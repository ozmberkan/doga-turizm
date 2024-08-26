import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCriteria : {
    departure: "",
    arrival: "",
    date: "",
  }
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterCriteria: (state, action) => {
      state.filterCriteria = { ...state.filterCriteria, ...action.payload };
    },
    
  },
});

export const { setFilterCriteria } = filterSlice.actions;

export default filterSlice.reducer;
