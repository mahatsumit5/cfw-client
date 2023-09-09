import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      if (payload._id === undefined) {
        return;
      }
      const isThisANewItem = state.cart.find(
        (item) => item._id === payload._id
      ); //checking if item is available in cart
      // returns emptys arraylist if not found whihc means false value converting to boolean with !
      console.log("is it a new item", !isThisANewItem);
      if (isThisANewItem) {
        console.log("ssame old item");
        const itemWithNewQty = state.cart.some(
          (item) =>
            item._id === payload._id && item.orderQty !== payload.orderQty
        );
        console.log(itemWithNewQty);
        if (itemWithNewQty) {
          console.log(state.cart);
          state.cart = state.cart.slice(0, state.cart.length - 1);
          state.cart = [...state.cart, payload];
          return;
        }
      }

      // }
      if (!isThisANewItem) {
        state.cart = [...state.cart, payload];
      }
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCart, removeItemFromCart } = actions;
export default reducer;
