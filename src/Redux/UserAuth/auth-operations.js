import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapi.com";

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
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const logOut = createAsyncThunk("auth/logOut");
