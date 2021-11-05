import { configureStore } from "@reduxjs/toolkit";
import productivitySlice from "./Reducers/productivitySlice";

export const store = configureStore({
  reducer: {
    productivity: productivitySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
