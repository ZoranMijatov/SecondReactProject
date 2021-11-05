import { createSlice } from "@reduxjs/toolkit";

export const productivitySlice = createSlice({
  name: "productivity",
  initialState: {
    value: 1,
  },
  reducers: {
    daily: (state) => {
      state.value = 1;
    },
    weekly: (state) => {
      state.value = 2;
    },
    monthly: (state) => {
      state.value = 3;
    },
  },
});

export const { daily, weekly, monthly } = productivitySlice.actions;

export default productivitySlice.reducer;
