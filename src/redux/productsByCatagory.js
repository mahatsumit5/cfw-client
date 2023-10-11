import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductsByCat: (state, { payload }) => {
      state.products = payload;
    },
  },
});
const { reducer, actions } = productSlice;
export const { setProductsByCat } = actions;
export default reducer;
