import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
const initialState = {
  campaigns: [],
  currentCampaign: {},
  status: "idle",
};

export const getAllCampaigns = createAsyncThunk(
  "campaigns/getAllCampaigns",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "campaigns"));
      const response = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return response;
    } catch (error) {
      console.error("Bir Hata Oluştu", error);
      return rejectWithValue(error.message);
    }
  }
);

export const getCampaignById = createAsyncThunk(
  "campaigns/getCampaignById",
  async (id, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "campaigns", id);
      const docSnapshot = await getDoc(docRef);
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } catch (error) {
      console.error("Error fetching campaign by ID:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    reset: (state) => {
      state.campaigns = [];
      state.currentCampaign = {};
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampaigns.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCampaigns.fulfilled, (state, action) => {
        state.status = "success";
        state.campaigns = action.payload;
      })
      .addCase(getAllCampaigns.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getCampaignById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCampaignById.fulfilled, (state, action) => {
        state.status = "success";
        state.currentCampaign = action.payload;
      })
      .addCase(getCampaignById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { reset } = campaignSlice.actions;
export default campaignSlice.reducer;
