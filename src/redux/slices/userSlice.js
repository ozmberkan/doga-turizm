import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, db } from "~/firebase/firebaseConfig";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  users: [],
  status: "idle",
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const usersRef = collection(db, "users");

    const usersSnapshot = await getDocs(usersRef);

    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return users;
  } catch (error) {
    console.log(error);
  }
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
        usedDiscount: false,
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
        usedDiscount: userDoc.data()?.usedDiscount || false,
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.status = "idle";
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
        state.status = "loading";
      })
      .addCase(registerService.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(registerService.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(loginService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginService.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginService.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { reset, updateUserProfile, setUpdate } = userSlice.actions;

export default userSlice.reducer;
