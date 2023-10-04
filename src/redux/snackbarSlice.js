import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
  severity: "",
  message: "",
  name: "",
};

const snackBarSlice = createSlice({
  name: "snackkbar",
  initialState,
  reducers: {
    setSnackbar: (state, { payload }) => {
      state.open = payload.open;
      state.severity = payload.severity;
      state.message = payload.message;
      state.name = payload.name;
    },
  },
});

const { reducer, actions } = snackBarSlice;
export const { setSnackbar } = actions;
export default reducer;
