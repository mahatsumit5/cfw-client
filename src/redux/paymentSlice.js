import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paymentMethods: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentMethods: (state, { payload }) => {
      state.paymentMethods = payload;
    },
  },
});
const { reducer, actions } = paymentSlice;
export const { setPaymentMethods } = actions;
export default reducer;
