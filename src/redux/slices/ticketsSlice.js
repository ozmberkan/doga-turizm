import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";

const initialState = {
  tickets: [],
  status: "idle",
};

export const getAllTickets = createAsyncThunk(
  "tickets/getAllTickets",
  async () => {
    try {
      const ticketRef = collection(db, "tickets");
      const ticketDoc = await getDocs(ticketRef);

      const data = ticketDoc.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTickets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllTickets.fulfilled, (state, action) => {
        state.status = "success";
        state.tickets = action.payload;
      })
      .addCase(getAllTickets.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default ticketsSlice.reducer;
