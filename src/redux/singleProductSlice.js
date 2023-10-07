import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const { setProduct } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
