import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "~/firebase/firebaseConfig";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    setUpdate: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerService.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registerService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(registerService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Bir hata oluştu.";
      })
      .addCase(loginService.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Bir hata oluştu.";
      });
  },
});

export const registerService = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.displayName,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: data.phoneNumber,
        ownedTickets: [],
        fullTickets: [],
        hasBeenLogin: false,
        usedDiscount: false,
        admin: false,
        disabled: false,
      });

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: data.phoneNumber,
        emailVerified: user.emailVerified,
        hasBeenLogin: false,
        admin: false,
        ownedTickets: [],
        allTickets: [],
      };

      return userData;
    } catch (error) {
      toast.error(
        "Bir hata ile karşılaşıldı. Lütfen bilgileri kontrol ediniz."
      );
      return rejectWithValue(error.message);
    }
  }
);

export const loginService = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.data().disabled) {
        toast.error("Hesabınız devre dışı bırakılmıştır.");
        return rejectWithValue(
          "Hesabınız devre dışı bırakılmıştır. Lütfen geliştirici ile iletişime geçin."
        );
      }

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: userDoc.data()?.phoneNumber || null,
        emailVerified: user.emailVerified,
        admin: userDoc.data()?.admin || false,
        hasBeenLogin: userDoc.data()?.hasBeenLogin || false,
        disabled: userDoc.data().disabled || false,
        ownedTickets: userDoc.data()?.ownedTickets || [],
        allTickets: userDoc.data()?.allTickets || [],
      };

      return userData;
    } catch (error) {
      console.error("Bir Hata Oluştu", error);
      return rejectWithValue(error.message);
    }
  }
);

export const { reset, updateUserProfile, setUpdate } = userSlice.actions;

export default userSlice.reducer;
