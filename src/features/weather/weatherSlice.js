import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (location) => {
  const response = await axios({
    method: "GET",
    baseURL: import.meta.env.VITE_REACT_BASE_URL,
    params: {
      q: location,
      appid: import.meta.env.VITE_REACT_API_KEY,
      units: "metric",
    },
  });
  return response.data;
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
