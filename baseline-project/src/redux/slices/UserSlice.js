import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData) => {
    const response = await axios.post('http://localhost:4000/user/login', userData);
    return response.data; 
  }
);

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData) => {
    const response = await axios.post("http://localhost:4000/user/register", userData);
    return response.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
     .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
     .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
     .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
     .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
     .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
     .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;