import { createSlice } from "@reduxjs/toolkit";
import { registr } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registr.fulfilled](state, action) {
      state.users = action.payload.users;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
