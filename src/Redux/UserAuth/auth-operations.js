import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registr = createAsyncThunk("auth/registr", async (userRegistr) => {
  try {
    const response = await axios.post("/users/signup", userRegistr);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const login = createAsyncThunk("auth/login", async (userRegistr) => {
  try {
    const response = await axios.post("/users/login", userRegistr);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return error.message;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thuncAPI) => {
    const state = thuncAPI.getState();
    const currentToken = state.users.token;

    if (currentToken === null) {
      return thuncAPI.rejectWithValue();
    }

    token.set(currentToken);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
