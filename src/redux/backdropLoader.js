import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
};

const backdropLoaderSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    setBackdrop: (state, { payload }) => {
      state.open = payload;
    },
  },
});

const { reducer, actions } = backdropLoaderSlice;
export const { setBackdrop } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
