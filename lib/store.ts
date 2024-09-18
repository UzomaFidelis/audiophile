import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";
import { CartState } from "./slices/cartSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the type of 'store'
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;

// Infer the 'AppDispatch' type from the store itself
export type AppDispatch = AppStore["dispatch"];

// Define a reusable type describing thunk functions
