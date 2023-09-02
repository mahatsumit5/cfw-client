import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  catagories: [],
};

const catagorySlice = createSlice({
  name: "catagory",
  initialState,
  reducers: {
    setCatagories: (state, { payload }) => {
      state.catagories = payload;
    },
  },
});
const { reducer, actions } = catagorySlice;
export const { setCatagories } = actions;
export default reducer;
