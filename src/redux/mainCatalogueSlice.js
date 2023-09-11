import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  catalogue: [],
};

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    setCatalogue: (state, { payload }) => {
      state.catalogue = payload;
    },
  },
});
const { reducer, actions } = catalogueSlice;
export const { setCatalogue } = actions;
export default reducer;
