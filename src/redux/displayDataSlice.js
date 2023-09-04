import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  displayData: [],
};

const displayDatalice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayData: (state, { payload }) => {
      state.displayData = payload;
    },
  },
});
const { reducer, actions } = displayDatalice;
export const { setDisplayData } = actions;
export default reducer;
