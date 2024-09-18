import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../data";
import { RootState } from "../store";

export type CartProduct = Product & { numberOfUnits: number };
type CartActionPayload = {
  product: Product;
  units: number;
};

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartActionPayload>) => {
      const actionPayload = action.payload;
      const targetProduct = state.products.find(
        (product) => product.product_id === actionPayload.product.product_id,
      );
      if (!targetProduct) {
        // Product is not already in cart. Add anew
        state.products.push({
          ...actionPayload.product,
          numberOfUnits: actionPayload.units,
        });
      } else {
        // Product already in cart.
        // Update the number of units with payload units value
        targetProduct.numberOfUnits += actionPayload.units;
      }
    },
    removeFromCart: (state, action: PayloadAction<CartProduct>) => {
      // state.products = state.products.filter(
      //   (product) => product.product_id !== action.payload.product_id,
      // );
      const targetProductIndex = state.products.findIndex(
        (product) => product.product_id === action.payload.product_id,
      );
      state.products.splice(targetProductIndex, 1);
    },
    increaseUnits: (state, action: PayloadAction<CartProduct>) => {
      const productInCart = state.products.find(
        (product) => product.product_id === action.payload.product_id,
      );
      if (productInCart) {
        productInCart.numberOfUnits += 1;
      }
    },
    decreaseUnits: (state, action: PayloadAction<CartProduct>) => {
      const productInCart = state.products.find(
        (product) => product.product_id === action.payload.product_id,
      );
      if (productInCart) {
        productInCart.numberOfUnits -= 1;
      }
    },
    resetCart: (state) => {
      // state.products.forEach((_product, idx) => {
      //   state.products.splice(idx, 1);
      // });
      state.products.length = 0;
    },
  },
});

export const selectProducts = (state: RootState) => state.cart.products;
export const selectTotalPrice = (state: RootState) =>
  state.cart.products.reduce(
    (acc, product) => acc + product.price * product.numberOfUnits,
    0,
  );
export const selectNumberOfProducts = (state: RootState) =>
  state.cart.products.reduce((acc, product) => acc + product.numberOfUnits, 0);

export const {
  addToCart,
  removeFromCart,
  increaseUnits,
  decreaseUnits,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
