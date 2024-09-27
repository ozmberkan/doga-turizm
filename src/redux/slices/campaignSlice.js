import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDoc, getDocs, doc } from "firebase/firestore"; // getDocs ve collection eklendi
import { db } from "~/firebase/firebaseConfig";
const initialState = {
  campaigns: [],
  currentCampaign: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMesage: "",
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
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMesage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampaigns.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllCampaigns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.campaigns = action.payload;
      })
      .addCase(getAllCampaigns.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMesage = action.payload || "Bir hata oluştu.";
      })
      .addCase(getCampaignById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getCampaignById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.currentCampaign = action.payload;
      })
      .addCase(getCampaignById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMesage = action.payload || "Bir hata oluştu.";
      });
  },
});

export const { reset } = campaignSlice.actions;
export default campaignSlice.reducer;
