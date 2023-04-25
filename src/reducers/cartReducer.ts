import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { ICart, IFood } from "@/interfaces";
import { AppState } from "@/store";

const initialState: ICart = {
  products: [],
  open: false,
};

const cartSlice = createSlice({
  name: "[CART]",
  initialState,
  reducers: {
    addProduct: (state: ICart, action: { payload: IFood }) => {
      state.products.push(action.payload);
    },
    removeProduct: (state: ICart, action: { payload: IFood }) => {
      state.products = state.products.filter(
        (product) => product.name !== action.payload.name
      );
    },
    cleanCart: (state: ICart) => {
      state.products = [];
    },
    openCart: (state: ICart) => {
      state.open = true;
    },
    closeCart: (state: ICart) => {
      state.open = false;
    },
  },
});

export { cartSlice };

// Actions
export const { addProduct, removeProduct, openCart, closeCart, cleanCart } =
  cartSlice.actions;

// Selector to access to the store
export const selectCart = (state: AppState) => state.cart;

export default cartSlice.reducer;
