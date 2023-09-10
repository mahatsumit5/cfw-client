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
      const itemExist = state.cart.filter((item) => item.includes(payload._id));
      console.log(itemExist);
      if (itemExist) {
        console.log("ssame old item");

        const indexOfItemTobeRemoved = state.cart.findIndex(
          (item) => item._id === payload._id
        );

        console.log(indexOfItemTobeRemoved);
        state.cart = state.cart.splice(indexOfItemTobeRemoved, 1);
        // console.log("item removed", state.cart);
        // state.cart = [...state.cart, payload];
        return;
      }

      state.cart = [...state.cart, payload];
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCart, removeItemFromCart } = actions;
export default reducer;
