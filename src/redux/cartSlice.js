import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      let newItems = payload.filter((product) => {
        return !state.cart.some((item) => item._id === product._id);
      });
      if (newItems.length === 0) {
        const itemWithNewQty = payload.filter((product) => {
          return state.cart.some(
            (item) =>
              item._id === product._id && item.orderQty !== product.orderQty
          );
        });
        console.log(itemWithNewQty);
        if (itemWithNewQty.length) {
          console.log(state.cart);
          state.cart = state.cart.slice(0, state.cart.length - 1);
          state.cart = [...state.cart, ...itemWithNewQty];
          return;
        }
      }

      state.cart = [...state.cart, ...newItems];
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCart, removeItemFromCart } = actions;
export default reducer;
