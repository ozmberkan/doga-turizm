import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
