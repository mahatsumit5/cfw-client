import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orderItems: [],
  payment: {},
  user: {},
};

const cartSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      if (payload.name === "user") {
        state.user = payload.userForm;
      }
      if (payload.name === "cart") {
        state.orderItems = payload.cart;
      }
      if (payload.name === "paymentMethod") {
        state.payment = payload.payment;
      }
    },
    resetOrder: (state, { payload }) => {
      state.user = {};
      state.payment = {};
      state.orderItems = [];
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setOrder, resetOrder } = actions;
export default reducer;
