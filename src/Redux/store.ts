import { configureStore } from "@reduxjs/toolkit";
import pricingSlice from "./Reducers/pricingSlice";
import productivitySlice from "./Reducers/productivitySlice";

export const store = configureStore({
  reducer: {
    productivity: productivitySlice,
    pricing: pricingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
