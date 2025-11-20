import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    editProduct: (state, action) => {
      const { id, name, price, description } = action.payload;
      state.products = state.products.map((p) =>
        p.id === id ? { ...p, name, price, description } : p
      );
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
