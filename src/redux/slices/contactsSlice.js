import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";

const initialState = {
  contacts: [],
  status: "idle",
};

export const getAllMessages = createAsyncThunk(
  "contacts/getAllMessages",
  async () => {
    try {
      const contactsRef = collection(db, "contacts");

      const contactsDocs = await getDocs(contactsRef);

      const contactsData = contactsDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return contactsData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.status = "success";
        state.contacts = action.payload;
      })
      .addCase(getAllMessages.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = contactsSlice.actions;
export default contactsSlice.reducer;
