import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.isModalOpen = payload;
    },
  },
});

const { reducer, actions } = modalSlice;
export const { setModal } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
