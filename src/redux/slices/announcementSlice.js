import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";

const initialState = {
  announcement: [],
  status: "idle",
};

export const getAllAnnouncement = createAsyncThunk(
  "contacts/getAllAnnouncement",
  async () => {
    try {
      const announcementRef = collection(db, "announcement");

      const announcementDocs = await getDocs(announcementRef);

      const announcementData = announcementDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return announcementData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnnouncement.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAnnouncement.fulfilled, (state, action) => {
        state.status = "success";
        state.announcement = action.payload;
      })
      .addCase(getAllAnnouncement.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = announcementSlice.actions;
export default announcementSlice.reducer;
