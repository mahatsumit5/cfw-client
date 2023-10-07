import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { setSnackbar } from "../redux/snackbarSlice";
import { useDispatch, useSelector } from "react-redux";

export const SnackBar = () => {
  const { open, severity, message } = useSelector((store) => store.snackBar);
  const dispatch = useDispatch();
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={() => {
        dispatch(setSnackbar({ open: false }));
      }}
      width={"100%"}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};
