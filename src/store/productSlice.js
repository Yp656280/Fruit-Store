import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products++;
    },
    deleteProduct: (state, action) => {
      state.products--;
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
