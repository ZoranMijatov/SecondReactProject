import { createSlice } from "@reduxjs/toolkit";

export const pricingSlice = createSlice({
  name: "pricing",
  initialState: {
    value: true,
  },
  reducers: {
    togglePricing: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglePricing } = pricingSlice.actions;

export default pricingSlice.reducer;
